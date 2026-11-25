import { Instagram, Youtube } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Retrato } from '@/components/retrato';
import { SOCIAL } from '@/content/site';

export const metadata = { title: 'Contato', description: 'Dúvidas sobre os materiais, parcerias ou imprensa: fale com Adriana Botelho.' };

export default function ContactPage() {
  return <>
    <section className="secao secao-topo">
      <div className="container grade-duas grade-contato">
        <Retrato className="retrato-contato" src="/fotos/contato.webp" alt="Retrato de Adriana Botelho de blazer branco, com o cabelo solto e sorrindo, diante de um fundo cinza-azulado" largura={1600} altura={2399} prioridade tamanhos="(max-width: 900px) 80vw, 400px" />
        <div className="texto-corrido">
          <h1 className="titulo-grande">Vamos conversar.</h1>
          <p className="texto-destaque">Dúvidas sobre os materiais, parcerias ou imprensa: deixe sua mensagem que eu respondo pelo e-mail.</p>
          <ContactForm />
        </div>
      </div>
    </section>

    <section className="secao secao-areia secao-redes">
      <div className="estreito centro">
        <div className="acoes acoes-centro">
          <a className="botao botao-contorno" href={SOCIAL.instagram} target="_blank" rel="noreferrer"><Instagram size={18} aria-hidden="true" /> Instagram</a>
          <a className="botao botao-contorno" href={SOCIAL.youtube} target="_blank" rel="noreferrer"><Youtube size={18} aria-hidden="true" /> YouTube</a>
        </div>
      </div>
    </section>
  </>;
}
