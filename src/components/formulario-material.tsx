'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { FormularioActiveCampaign } from '@/content/site';

type Props = {
  rotulo: string;
  titulo: string;
  formulario: FormularioActiveCampaign;
};

/*
 * Botão do material gratuito. Abre uma janela com nome, e-mail e consentimento.
 * O envio vai direto para o formulário do ActiveCampaign, que aplica a tag do material
 * e leva a pessoa para a página de obrigado.
 */
export function FormularioMaterial({ rotulo, titulo, formulario }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [erros, setErros] = useState<Record<string, string>>({});
  const [aviso, setAviso] = useState('');
  const [enviando, setEnviando] = useState(false);
  const id = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const aoFechar = () => { document.body.style.overflow = ''; };
    dialog.addEventListener('close', aoFechar);
    return () => dialog.removeEventListener('close', aoFechar);
  }, []);

  const abrir = () => {
    setErros({});
    setAviso('');
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  };
  const fechar = () => dialogRef.current?.close();

  const aoEnviar = (evento: FormEvent<HTMLFormElement>) => {
    const dados = new FormData(evento.currentTarget);
    const nome = String(dados.get(formulario.campoNome) ?? '').trim();
    const email = String(dados.get(formulario.campoEmail) ?? '').trim();
    const novosErros: Record<string, string> = {};
    if (nome.length < 2) novosErros.nome = 'Digite seu nome.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) novosErros.email = 'Digite um e-mail válido.';
    if (!dados.get('consentimento')) novosErros.consentimento = 'Marque a caixa para receber o material.';
    setErros(novosErros);
    if (Object.keys(novosErros).length) {
      evento.preventDefault();
      return;
    }
    if (!formulario.campos) {
      evento.preventDefault();
      setAviso('Este formulário está em configuração. Volte em breve para baixar o material.');
      return;
    }
    setEnviando(true);
  };

  const erro = (campo: string) => erros[campo] ? <span id={`${id}-${campo}-erro`} className="campo-erro" role="alert">{erros[campo]}</span> : null;

  return (
    <>
      <button type="button" className="botao botao-marrom" onClick={abrir}>{rotulo} <ArrowRight size={17} aria-hidden="true" /></button>
      <dialog ref={dialogRef} className="janela" aria-labelledby={`${id}-titulo`} onClick={(e) => { if (e.target === dialogRef.current) fechar(); }}>
        <div className="janela-conteudo">
          <button type="button" className="janela-fechar" onClick={fechar} aria-label="Fechar"><X size={20} aria-hidden="true" /></button>
          <p className="etiqueta">Material gratuito</p>
          <h2 id={`${id}-titulo`}>{titulo}</h2>
          <p className="janela-texto">Deixe seu nome e e-mail para baixar. O link também chega na sua caixa de entrada.</p>
          <form className="formulario" method="POST" action={formulario.acao} onSubmit={aoEnviar} noValidate>
            {formulario.campos && Object.entries(formulario.campos).map(([nome, valor]) => <input key={nome} type="hidden" name={nome} value={valor} />)}
            <div className="campo">
              <label htmlFor={`${id}-nome`}>Nome</label>
              <input id={`${id}-nome`} name={formulario.campoNome} autoComplete="given-name" aria-invalid={Boolean(erros.nome)} aria-describedby={erros.nome ? `${id}-nome-erro` : undefined} />
              {erro('nome')}
            </div>
            <div className="campo">
              <label htmlFor={`${id}-email`}>E-mail</label>
              <input id={`${id}-email`} name={formulario.campoEmail} type="email" autoComplete="email" spellCheck={false} aria-invalid={Boolean(erros.email)} aria-describedby={erros.email ? `${id}-email-erro` : undefined} />
              {erro('email')}
            </div>
            <label className="consentimento">
              <input type="checkbox" name="consentimento" value="sim" aria-invalid={Boolean(erros.consentimento)} aria-describedby={erros.consentimento ? `${id}-consentimento-erro` : undefined} />
              <span>Concordo em receber conteúdos por e-mail e posso cancelar quando quiser. Veja a <a href="/privacidade" target="_blank">política de privacidade</a>.</span>
            </label>
            {erro('consentimento')}
            <button className="botao botao-marrom" type="submit" disabled={enviando}>{enviando ? 'Enviando…' : 'Receber o material'} <ArrowRight size={17} aria-hidden="true" /></button>
            {aviso && <p className="formulario-aviso" role="status">{aviso}</p>}
          </form>
        </div>
      </dialog>
    </>
  );
}
