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
  const onSubmit = async () => setMessage('Mensagem validada. O canal de envio ainda precisa ser conectado para receber contatos.');
  const error = (key: keyof FormValues) => errors[key]?.message;

  return <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-two"><div className="field"><label htmlFor="contact-name">Nome completo</label><input id="contact-name" {...register('name')} />{error('name') && <span className="field-error">{error('name')}</span>}</div><div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" {...register('email')} />{error('email') && <span className="field-error">{error('email')}</span>}</div></div>
    <div className="form-two"><div className="field"><label htmlFor="contact-whatsapp">WhatsApp</label><input id="contact-whatsapp" placeholder="(00) 00000-0000" {...register('whatsapp')} />{error('whatsapp') && <span className="field-error">{error('whatsapp')}</span>}</div><div className="field"><label htmlFor="contact-subject">Assunto</label><select id="contact-subject" defaultValue="" {...register('subject')}><option value="" disabled>Selecione</option><option value="consultoria">Consultoria nutricional</option><option value="parcerias">Parcerias</option><option value="outro">Outro assunto</option></select>{error('subject') && <span className="field-error">{error('subject')}</span>}</div></div>
    <div className="field"><label htmlFor="contact-message">Mensagem</label><textarea id="contact-message" rows={6} {...register('message')} />{error('message') && <span className="field-error">{error('message')}</span>}</div>
    <label className="consent"><input type="checkbox" {...register('consent')} /><span>Li e concordo com a política de privacidade.</span></label>{errors.consent && <span className="field-error">{errors.consent.message}</span>}
    <button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Validando…' : 'Enviar mensagem'}</button>{message && <p className="form-status" role="status">{message}</p>}
  </form>;
}
