import Link from 'next/link';

export const metadata = { title: 'Política de privacidade' };

export default function PrivacyPage() {
  return <section className="page-hero"><div className="narrow"><p className="eyebrow">Transparência</p><h1>Política de privacidade.</h1><p className="section-intro" style={{ marginTop: 32 }}>Esta página é um espaço provisório para a política de privacidade. O texto jurídico deve ser revisado e publicado antes da coleta de dados ou da ativação das integrações de formulário e newsletter.</p><Link className="button" href="/">Voltar ao início</Link></div></section>;
}
