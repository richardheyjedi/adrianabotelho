'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EMAIL_CONTATO } from '@/content/site';

const ASSUNTOS = ['Dúvidas sobre os materiais', 'Parcerias e imprensa', 'Outro assunto'] as const;

const schema = z.object({
  name: z.string().trim().min(2, 'Digite seu nome completo.'),
  email: z.string().trim().email('Digite um e-mail válido.'),
  subject: z.enum(ASSUNTOS, { errorMap: () => ({ message: 'Escolha um assunto.' }) }),
  message: z.string().trim().min(10, 'Escreva uma mensagem com pelo menos 10 caracteres.'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Marque a caixa para enviar a mensagem.' }) }),
  _honey: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

// As mensagens são entregues no e-mail de contato pelo serviço FormSubmit.
const ENDERECO_ENVIO = `https://formsubmit.co/ajax/${EMAIL_CONTATO}`;

export function ContactForm() {
  const [status, setStatus] = useState<{ tipo: 'ok' | 'erro'; texto: string } | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (dados: FormValues) => {
    setStatus(null);
    if (dados._honey) return;
    try {
      const resposta = await fetch(ENDERECO_ENVIO, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nome: dados.name,
          'E-mail': dados.email,
          Assunto: dados.subject,
          Mensagem: dados.message,
          _replyto: dados.email,
          _subject: `Site: ${dados.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const resultado = await resposta.json().catch(() => ({}));
      if (!resposta.ok || String(resultado.success) !== 'true') throw new Error(resultado.message || 'falha');
      reset();
      setStatus({ tipo: 'ok', texto: 'Mensagem enviada. Eu respondo pelo seu e-mail assim que possível.' });
    } catch {
      setStatus({ tipo: 'erro', texto: `Não foi possível enviar agora. Tente de novo em alguns minutos ou escreva para ${EMAIL_CONTATO}.` });
    }
  };

  const erro = (campo: keyof FormValues) => errors[campo]?.message;
  const mensagemErro = (campo: keyof FormValues) => erro(campo) ? <span id={`contato-${campo}-erro`} className="campo-erro" role="alert">{erro(campo)}</span> : null;
  const descricao = (campo: keyof FormValues) => erro(campo) ? `contato-${campo}-erro` : undefined;

  return (
    <form className="formulario formulario-contato" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" {...register('_honey')} />
      <div className="campo"><label htmlFor="contato-nome">Nome completo</label><input id="contato-nome" autoComplete="name" aria-invalid={Boolean(erro('name'))} aria-describedby={descricao('name')} {...register('name')} />{mensagemErro('name')}</div>
      <div className="campo"><label htmlFor="contato-email">E-mail</label><input id="contato-email" type="email" autoComplete="email" spellCheck={false} aria-invalid={Boolean(erro('email'))} aria-describedby={descricao('email')} {...register('email')} />{mensagemErro('email')}</div>
      <div className="campo"><label htmlFor="contato-assunto">Assunto</label><select id="contato-assunto" defaultValue="" aria-invalid={Boolean(erro('subject'))} aria-describedby={descricao('subject')} {...register('subject')}><option value="" disabled>Selecione</option>{ASSUNTOS.map((assunto) => <option key={assunto} value={assunto}>{assunto}</option>)}</select>{mensagemErro('subject')}</div>
      <div className="campo"><label htmlFor="contato-mensagem">Mensagem</label><textarea id="contato-mensagem" rows={6} aria-invalid={Boolean(erro('message'))} aria-describedby={descricao('message')} {...register('message')} />{mensagemErro('message')}</div>
      <label className="consentimento"><input type="checkbox" aria-invalid={Boolean(erro('consent'))} aria-describedby={descricao('consent')} {...register('consent')} /><span>Li e concordo com a <a href="/privacidade" target="_blank">política de privacidade</a>.</span></label>{mensagemErro('consent')}
      <button className="botao botao-marrom" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Enviando…' : 'Enviar mensagem'}</button>
      {status && <p className={`formulario-aviso ${status.tipo === 'erro' ? 'aviso-erro' : ''}`} role="status" aria-live="polite">{status.texto}</p>}
    </form>
  );
}
