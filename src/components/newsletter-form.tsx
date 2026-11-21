'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Digite seu nome.'),
  email: z.string().email('Digite um email válido.'),
  consent: z.literal(true, { errorMap: () => ({ message: 'O consentimento é necessário.' }) }),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const onSubmit = async () => setMessage('Prévia: os campos foram validados. A inscrição ainda não está ativa porque o serviço de email precisa ser conectado.');
  const fieldError = (key: keyof FormValues, id: string) => errors[key]?.message ? <span id={id} className="field-error" role="alert">{errors[key]?.message}</span> : null;

  return <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="field"><label htmlFor="newsletter-name">Nome</label><input id="newsletter-name" autoComplete="name" placeholder="Seu nome" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'newsletter-name-error' : undefined} {...register('name')} />{fieldError('name', 'newsletter-name-error')}</div>
    <div className="field"><label htmlFor="newsletter-email">Email</label><input id="newsletter-email" type="email" autoComplete="email" spellCheck={false} placeholder="voce@email.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'newsletter-email-error' : undefined} {...register('email')} />{fieldError('email', 'newsletter-email-error')}</div>
    <label className="consent"><input type="checkbox" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'newsletter-consent-error' : undefined} {...register('consent')} /><span>Concordo em receber conteúdos e posso cancelar quando quiser.</span></label>{fieldError('consent', 'newsletter-consent-error')}
    <button className="button button-light" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Validando…' : 'Inscrever-se'}</button>
    {message && <p className="form-status" role="status" aria-live="polite">{message}</p>}
  </form>;
}
