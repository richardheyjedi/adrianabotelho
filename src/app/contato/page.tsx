import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { FAQ } from '@/components/faq';
import { Reveal } from '@/components/reveal';

export const metadata = { title: 'Contato', description: 'Entre em contato com Adriana Botelho e dê o primeiro passo para uma alimentação mais leve.' };

export default function ContactPage() {
  return <>
    <section className="page-hero contact-hero"><div className="container page-hero-grid"><div><p className="eyebrow">Um primeiro passo</p><h1>Seu bem-estar começa com um <em>primeiro passo.</em></h1></div><div><p className="page-hero-copy">Cuidar da alimentação não precisa ser complicado. Com orientação, acolhimento e estratégias pensadas para sua realidade, é possível construir uma relação mais leve e prazerosa com a comida.</p><Link className="button button-light" href="#agendamento">Agendar minha consultoria <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div></section>

    <Reveal><section className="section section-ivory" id="agendamento"><div className="container contact-grid"><div className="contact-card"><p className="eyebrow">Agendamento</p><h2>Vamos conversar sobre você e sua alimentação?</h2><p>Cada pessoa tem uma rotina, uma história e necessidades diferentes. Meu objetivo é ajudar você a encontrar caminhos possíveis para cuidar da alimentação, respeitando seu tempo e sua individualidade.</p><span className="button button-light" aria-disabled="true" style={{ color: 'var(--muted)', borderColor: 'var(--line)' }}>Canal oficial em configuração</span></div><div className="contact-card contact-image-card"><div className="contact-image-frame"><Image src="/images/contact-still-life.webp" alt="Mesa acolhedora com caderno, cerâmica e ingredientes frescos" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className="contact-image-caption"><span>Antes da consulta</span><strong>Uma conversa começa com espaço para escuta.</strong><small>O canal oficial de reservas será conectado aqui após a confirmação do serviço.</small></div></div></div></section></Reveal>

    <Reveal><section className="section section-cream"><div className="container contact-grid"><div className="contact-card"><p className="eyebrow">Mensagem</p><h2>Prefere deixar uma mensagem?</h2><p>Preencha o formulário abaixo e entre em contato. Será um prazer conhecer um pouco mais sobre você.</p></div><ContactForm /></div></section></Reveal>

    <Reveal><section className="section section-ivory"><div className="narrow"><p className="eyebrow">Perguntas frequentes</p><h2 className="display section-title" style={{ marginBottom: 50 }}>Talvez você ainda tenha algumas dúvidas.</h2><FAQ /></div></section></Reveal>

    <Reveal><section className="section section-forest" id="redes"><div className="narrow"><p className="eyebrow">Continue a conversa</p><h2 className="manifesto">Vamos continuar essa <em>conversa?</em></h2><p className="section-intro" style={{ marginTop: 28 }}>Acompanhe conteúdos sobre alimentação saudável, receitas práticas e estratégias para tornar a rotina mais leve.</p><div className="hero-actions" style={{ marginTop: 30 }}><a className="button button-light" href="https://www.instagram.com/adrianapbotelho/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={17} aria-hidden="true" /></a><a className="text-link" href="https://www.youtube.com/@cozinhaconsciencia" target="_blank" rel="noreferrer" style={{ color: 'var(--sage)' }}>Conheça o YouTube <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section></Reveal>
  </>;
}
