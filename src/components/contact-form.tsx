'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Digite seu nome completo.'),
  email: z.string().email('Digite um email válido.'),
  whatsapp: z.string().min(8, 'Digite um WhatsApp válido.'),
  subject: z.string().min(2, 'Escolha um assunto.'),
  message: z.string().min(10, 'Escreva uma mensagem com pelo menos 10 caracteres.'),
  consent: z.literal(true, { errorMap: () => ({ message: 'O consentimento é necessário.' }) }),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const onSubmit = async () => setMessage('Prévia: os campos foram validados. O envio ainda não está ativo; conecte um canal oficial para receber mensagens.');
  const error = (key: keyof FormValues) => errors[key]?.message;
  const fieldError = (key: keyof FormValues, id: string) => error(key) ? <span id={id} className="field-error" role="alert">{error(key)}</span> : null;

  return <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-two"><div className="field"><label htmlFor="contact-name">Nome completo</label><input id="contact-name" autoComplete="name" aria-invalid={Boolean(error('name'))} aria-describedby={error('name') ? 'contact-name-error' : undefined} {...register('name')} />{fieldError('name', 'contact-name-error')}</div><div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" autoComplete="email" spellCheck={false} aria-invalid={Boolean(error('email'))} aria-describedby={error('email') ? 'contact-email-error' : undefined} {...register('email')} />{fieldError('email', 'contact-email-error')}</div></div>
    <div className="form-two"><div className="field"><label htmlFor="contact-whatsapp">WhatsApp</label><input id="contact-whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" aria-invalid={Boolean(error('whatsapp'))} aria-describedby={error('whatsapp') ? 'contact-whatsapp-error' : undefined} {...register('whatsapp')} />{fieldError('whatsapp', 'contact-whatsapp-error')}</div><div className="field"><label htmlFor="contact-subject">Assunto</label><select id="contact-subject" autoComplete="off" defaultValue="" aria-invalid={Boolean(error('subject'))} aria-describedby={error('subject') ? 'contact-subject-error' : undefined} {...register('subject')}><option value="" disabled>Selecione</option><option value="consultoria">Consultoria nutricional</option><option value="parcerias">Parcerias</option><option value="outro">Outro assunto</option></select>{fieldError('subject', 'contact-subject-error')}</div></div>
    <div className="field"><label htmlFor="contact-message">Mensagem</label><textarea id="contact-message" rows={6} autoComplete="off" aria-invalid={Boolean(error('message'))} aria-describedby={error('message') ? 'contact-message-error' : undefined} {...register('message')} />{fieldError('message', 'contact-message-error')}</div>
    <label className="consent"><input type="checkbox" aria-invalid={Boolean(error('consent'))} aria-describedby={error('consent') ? 'contact-consent-error' : undefined} {...register('consent')} /><span>Li e concordo com a política de privacidade.</span></label>{fieldError('consent', 'contact-consent-error')}
    <button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Validando…' : 'Enviar mensagem'}</button>{message && <p className="form-status" role="status" aria-live="polite">{message}</p>}
  </form>;
}
