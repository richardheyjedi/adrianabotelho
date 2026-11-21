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
  const onSubmit = async () => setMessage('Formulário validado. A integração com o serviço de email ainda precisa ser configurada.');

  return <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="field"><label htmlFor="newsletter-name">Nome</label><input id="newsletter-name" placeholder="Seu nome" {...register('name')} />{errors.name && <span className="field-error">{errors.name.message}</span>}</div>
    <div className="field"><label htmlFor="newsletter-email">Email</label><input id="newsletter-email" type="email" placeholder="voce@email.com" {...register('email')} />{errors.email && <span className="field-error">{errors.email.message}</span>}</div>
    <label className="consent"><input type="checkbox" {...register('consent')} /><span>Concordo em receber conteúdos e posso cancelar quando quiser.</span></label>{errors.consent && <span className="field-error">{errors.consent.message}</span>}
    <button className="button button-light" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Validando…' : 'Inscrever-se'}</button>
    {message && <p className="form-status" role="status">{message}</p>}
  </form>;
}
