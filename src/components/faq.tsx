'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const items = [
  ['Como funciona a consultoria nutricional?', 'A consultoria é um espaço para compreender suas necessidades, sua rotina e seus objetivos, buscando estratégias alimentares que façam sentido para sua realidade. Os detalhes do atendimento devem ser confirmados diretamente com Adriana.'],
  ['Como posso agendar uma consultoria?', 'Você pode utilizar o botão de agendamento disponível nesta página para acessar o canal oficial de contato.'],
  ['Preciso ter uma rotina organizada para começar?', 'Não. A proposta é justamente encontrar alternativas que sejam compatíveis com sua realidade, considerando suas necessidades e possibilidades.'],
  ['Posso tirar dúvidas antes de agendar?', 'Sim. Utilize os canais oficiais de contato disponíveis no website para esclarecer suas dúvidas sobre o atendimento.'],
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  return <div className="faq-list">{items.map(([question, answer], index) => {
    const answerId = `faq-answer-${index}`;
    const questionId = `faq-question-${index}`;
    const isOpen = active === index;
    return <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={question}>
      <button id={questionId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setActive(isOpen ? null : index)}><span>{question}</span><Plus size={20} aria-hidden="true" /></button>
      <div id={answerId} className="faq-answer" role="region" aria-labelledby={questionId} aria-hidden={!isOpen}><p>{answer}</p></div>
    </div>;
  })}</div>;
}
