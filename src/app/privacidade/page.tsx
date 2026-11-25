import { EMAIL_CONTATO } from '@/content/site';

export const metadata = { title: 'Política de privacidade', description: 'Como o site de Adriana Botelho coleta, usa e protege os seus dados.' };

export default function PrivacyPage() {
  return (
    <section className="secao secao-topo">
      <div className="estreito texto-corrido texto-legal">
        <p className="etiqueta">Transparência</p>
        <h1 className="titulo-grande">Política de privacidade</h1>
        <p className="nota">Última atualização: novembro de 2026.</p>

        <p>Esta política explica quais dados pessoais este site coleta, para que eles servem e como você pode pedir para ver, corrigir ou apagar o que for seu. Ela segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).</p>

        <h2>Quem cuida dos seus dados</h2>
        <p>Adriana Botelho, nutricionista, responsável pelo site adrianabotelho.com.br. Para qualquer assunto sobre os seus dados, escreva para <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>.</p>

        <h2>Quais dados são coletados</h2>
        <ul>
          <li><strong>Materiais gratuitos:</strong> nome e e-mail, quando você pede a Lista de Compras Inteligente ou o e-book Bases Alimentares.</li>
          <li><strong>Formulário de contato:</strong> nome, e-mail, assunto e a mensagem que você escrever.</li>
          <li><strong>Dados técnicos de acesso:</strong> a empresa que hospeda o site registra automaticamente informações como endereço de IP, tipo de navegador e páginas acessadas, para manter o site funcionando e seguro.</li>
        </ul>
        <p>O site não usa ferramentas de anúncio nem de análise de comportamento.</p>

        <h2>Para que os dados são usados</h2>
        <ul>
          <li>Enviar o material que você pediu e, se você concordou, conteúdos por e-mail sobre alimentação, receitas e os meus materiais e cursos.</li>
          <li>Responder à mensagem que você enviou pelo formulário de contato.</li>
        </ul>
        <p>A base legal é o seu consentimento, dado ao marcar a caixa do formulário. Você pode retirá-lo a qualquer momento.</p>

        <h2>Com quem os dados são compartilhados</h2>
        <p>Os dados não são vendidos nem cedidos a terceiros para fins comerciais. Eles passam apenas pelos serviços que fazem o site funcionar:</p>
        <ul>
          <li><strong>ActiveCampaign:</strong> guarda o nome e o e-mail de quem pede os materiais gratuitos e envia os e-mails.</li>
          <li><strong>FormSubmit:</strong> entrega as mensagens do formulário de contato no meu e-mail.</li>
          <li><strong>Vercel:</strong> hospeda o site.</li>
          <li><strong>Google Fonts:</strong> entrega as fontes de algumas páginas; para isso, o seu navegador se conecta aos servidores do Google.</li>
          <li><strong>Hotmart:</strong> processa as compras dos produtos pagos, com a política de privacidade própria dela.</li>
        </ul>
        <p>Alguns desses serviços ficam fora do Brasil, e por isso os dados podem ser armazenados em outros países, com as proteções que a LGPD exige.</p>

        <h2>Por quanto tempo os dados ficam guardados</h2>
        <p>O seu nome e e-mail ficam guardados enquanto você quiser receber os conteúdos. Quando você cancela a inscrição ou pede a exclusão, eles são apagados, a não ser que alguma lei exija guardar por mais tempo. As mensagens de contato ficam guardadas apenas pelo tempo necessário para responder.</p>

        <h2>Os seus direitos</h2>
        <p>Você pode, a qualquer momento, pedir para confirmar se eu tenho dados seus, ver quais são, corrigir, apagar, levar para outro serviço ou retirar o consentimento. Para isso, escreva para <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>. Para parar de receber e-mails, basta clicar em &quot;descadastrar&quot; no fim de qualquer e-mail.</p>

        <h2>Segurança</h2>
        <p>O site usa conexão segura (o cadeado no navegador) e os dados ficam apenas nos serviços listados acima, com acesso restrito.</p>

        <h2>Mudanças nesta política</h2>
        <p>Se esta política mudar, a nova versão será publicada nesta página, com a data de atualização no topo.</p>
      </div>
    </section>
  );
}
