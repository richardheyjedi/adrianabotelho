// Informações usadas em várias páginas do site.

export const SOCIAL = {
  instagram: 'https://www.instagram.com/adrianapbotelho/',
  youtube: 'https://www.youtube.com/@cozinhaconsciencia',
};

export const CRN = 'CRN-3 12318';

// Pasta dos PDFs dos materiais gratuitos. Eles só aparecem nas páginas de obrigado
// e no e-mail que o ActiveCampaign envia; nenhum outro lugar do site aponta para eles.
const MATERIAIS = '/materiais/925d59bb3904';

export const PDFS = {
  basesAlimentares: `${MATERIAIS}/bases-alimentares.pdf`,
  listaHortifruti: `${MATERIAIS}/lista-de-compras-hortifruti.pdf`,
  listaItensComuns: `${MATERIAIS}/lista-de-compras-itens-comuns.pdf`,
  listaProdutosNaturais: `${MATERIAIS}/lista-de-compras-produtos-naturais.pdf`,
};

/*
 * Formulários do ActiveCampaign para os materiais gratuitos.
 * Cada formulário é criado no ActiveCampaign com a tag do material e com
 * "depois de enviar, ir para" a página de obrigado. Os valores abaixo saem
 * do código de incorporação do formulário (os campos escondidos u, f, s, c, m, act, v, or).
 * Enquanto um formulário estiver com `campos: null`, o botão mostra que está em configuração
 * e nada é enviado.
 */
export type FormularioActiveCampaign = {
  acao: string;
  campos: Record<string, string> | null;
  campoNome: string;
  campoEmail: string;
};

const ACTIVECAMPAIGN = 'https://adrianapbotelho83507.activehosted.com/proc.php';

export const FORMULARIOS: Record<'listaDeCompras' | 'basesAlimentares', FormularioActiveCampaign> = {
  // Formulário 5 do ActiveCampaign: tag lista-de-compras, leva para /obrigado-lista-de-compras.
  listaDeCompras: {
    acao: ACTIVECAMPAIGN,
    campos: { u: '5', f: '5', s: '', c: '0', m: '0', act: 'sub', v: '2', or: 'b3afe33d-8949-4d11-88e2-4ca25413bc58' },
    campoNome: 'fullname',
    campoEmail: 'email',
  },
  // Formulário 6 do ActiveCampaign: tag bases-alimentares, leva para /obrigado-bases-alimentares.
  basesAlimentares: {
    acao: ACTIVECAMPAIGN,
    campos: { u: '6', f: '6', s: '', c: '0', m: '0', act: 'sub', v: '2', or: '5e0b1432-2629-4b57-bd6d-ea4d8d764884' },
    campoNome: 'fullname',
    campoEmail: 'email',
  },
};

// Mensagens do formulário de contato: vão para este e-mail pelo serviço FormSubmit.
export const EMAIL_CONTATO = 'contato@adrianabotelho.com';
