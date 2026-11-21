export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  tone: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: 'como-organizar-sua-alimentacao-durante-uma-semana-corrida',
    title: 'Como organizar sua alimentação durante uma semana corrida',
    category: 'Planejamento alimentar',
    excerpt: 'Ter uma rotina intensa não significa abrir mão de refeições equilibradas. Descubra como o planejamento alimentar pode facilitar suas escolhas, economizar tempo e trazer mais tranquilidade ao seu dia a dia.',
    readTime: '7 min de leitura',
    tone: 'sage',
    sections: [
      { heading: 'Por que organizar a alimentação facilita a rotina', paragraphs: ['Quando a semana começa sem nenhuma referência, cada refeição vira uma decisão nova. Em dias cheios, essa sequência de pequenas escolhas costuma favorecer o improviso, a repetição e a sensação de que comer bem exige uma energia que não está sobrando.', 'Planejar não significa deixar todos os dias idênticos. Significa criar algumas âncoras: saber quais preparos podem ser adiantados, quais ingredientes conversam entre si e quais refeições aceitam uma adaptação. A organização devolve espaço mental para você escolher com mais calma.'] },
      { heading: 'Como planejar um cardápio semanal flexível', paragraphs: ['Comece observando a sua agenda real. Marque os dias em que haverá mais tempo, os horários apertados e as refeições que serão feitas fora de casa. A partir daí, escolha duas ou três bases que possam aparecer de formas diferentes, em vez de montar um cardápio completamente novo a cada dia.', 'Uma base de vegetais assados pode acompanhar arroz, entrar em uma omelete ou formar o recheio de um sanduíche. Um feijão bem armazenado pode compor um prato completo ou virar uma sopa rápida. O segredo é planejar combinações, não uma lista rígida de pratos.'] },
      { heading: 'Estratégias para compras inteligentes', paragraphs: ['Antes de ir ao mercado, confira a geladeira, a despensa e a agenda. Faça uma lista dividida por categorias e priorize alimentos que tenham mais de um uso. Folhas, legumes, frutas, uma fonte de proteína e itens de apoio para temperar já formam um bom ponto de partida.', 'Também vale pensar na quantidade. Comprar uma variedade enorme de ingredientes sem um plano de preparo pode gerar desperdício e mais trabalho. Uma lista inteligente considera o que será consumido primeiro, o que pode ser congelado e o que deve ficar disponível para os imprevistos.'] },
      { heading: 'Pré-preparo e organização da geladeira', paragraphs: ['O pré-preparo não precisa ser um domingo inteiro na cozinha. Lavar e secar folhas, cortar parte dos vegetais, cozinhar uma base de grãos e deixar temperos acessíveis já reduz o atrito durante a semana.', 'Armazene os alimentos de maneira visível e segura. Recipientes transparentes, etiquetas simples e uma prateleira para os itens que precisam ser consumidos primeiro ajudam a transformar o planejamento em uma prática concreta.'] },
      { heading: 'Como reduzir desperdícios sem buscar perfeição', paragraphs: ['O melhor planejamento é aquele que acompanha a vida. Se a semana mudou, reorganize as prioridades: use primeiro o que está mais maduro, congele o que não será consumido e transforme sobras em um novo preparo.', 'Flexibilidade também é uma forma de cuidado. Não existe uma semana perfeita; existe uma organização que permite fazer boas escolhas na maior parte do tempo e retomar o caminho quando for necessário.'] },
    ],
  },
  {
    slug: 'alimentacao-saudavel-sem-complicacao-por-onde-comecar',
    title: 'Alimentação saudável sem complicação: por onde começar?',
    category: 'Nutrição',
    excerpt: 'Uma alimentação saudável não precisa ser baseada em regras rígidas ou receitas difíceis. Pequenas escolhas e hábitos sustentáveis podem ajudar você a construir uma rotina alimentar mais leve.',
    readTime: '6 min de leitura',
    tone: 'terracotta',
    sections: [
      { heading: 'O que é uma alimentação equilibrada', paragraphs: ['Alimentação equilibrada não é um modelo único. Ela reúne variedade, regularidade, prazer, acesso e escolhas compatíveis com a rotina de cada pessoa. Na prática, isso significa observar o conjunto da semana, e não transformar uma refeição isolada em um julgamento sobre você.', 'Ingredientes diferentes oferecem experiências diferentes de sabor, textura e preparo. Aos poucos, ampliar o repertório pode tornar as escolhas mais naturais e diminuir a dependência de soluções que não combinam com a sua realidade.'] },
      { heading: 'Por que evitar extremos alimentares', paragraphs: ['Regras muito rígidas podem até parecer simples no começo, mas costumam deixar pouco espaço para a vida acontecer. Festas, viagens, cansaço e mudanças de agenda fazem parte da rotina. Um plano que não comporta essas situações se torna difícil de sustentar.', 'Buscar equilíbrio é trocar o pensamento de tudo ou nada por perguntas mais úteis: o que está ao meu alcance hoje? Qual é a próxima escolha possível? Como posso deixar essa refeição mais completa sem complicar?'] },
      { heading: 'Como construir refeições variadas', paragraphs: ['Uma refeição pode ser pensada a partir de alguns elementos: uma fonte de energia, vegetais ou frutas, uma fonte de proteína e algo que traga sabor. Essa estrutura não é uma fórmula fechada, mas uma maneira de lembrar que variedade pode nascer de combinações simples.', 'Temperos, ervas, acidez e diferentes texturas fazem um mesmo ingrediente parecer novo. Cozinhar também é aprender a adaptar: substituir um vegetal, aproveitar o que já existe e escolher preparos que caibam no tempo disponível.'] },
      { heading: 'A importância da organização e do prazer', paragraphs: ['A organização reduz decisões de última hora, enquanto o prazer ajuda a manter a presença à mesa. Uma alimentação saudável precisa considerar os dois. Cozinhar um prato de que você gosta, comer com calma quando possível e dividir a refeição com alguém também são partes importantes da experiência.', 'Pequenas mudanças consistentes costumam fazer mais sentido do que uma transformação radical. Escolha um ponto de partida: melhorar o café da manhã, organizar uma compra ou preparar um vegetal de uma nova maneira.'] },
      { heading: 'Quando buscar orientação individualizada', paragraphs: ['Cada pessoa tem uma história, necessidades, preferências e condições diferentes. Uma orientação nutricional individualizada pode ajudar a traduzir informação em estratégias possíveis, respeitando contexto e objetivos sem prometer soluções universais.', 'O cuidado começa com escuta. A partir dela, é possível construir um caminho prático, acolhedor e responsável para a relação com a comida.'] },
    ],
  },
  {
    slug: '5-receitas-nutritivas-e-praticas-para-facilitar-sua-semana',
    title: '5 receitas nutritivas e práticas para facilitar sua semana',
    category: 'Receitas',
    excerpt: 'Descubra cinco ideias simples e saborosas que podem fazer parte da sua rotina, ajudando você a economizar tempo na cozinha sem abrir mão de boas refeições.',
    readTime: '8 min de leitura',
    tone: 'forest',
    sections: [
      { heading: '1. Bowl de quinoa e vegetais', paragraphs: ['Ingredientes: 1 xícara de quinoa cozida, 1 abobrinha em cubos, 1 cenoura em meias-luas, folhas, azeite, limão e ervas. Rendimento: 2 porções. Tempo: 30 minutos.', 'Asse a abobrinha e a cenoura com azeite e ervas até dourarem. Monte com a quinoa, folhas e um molho de limão. Guarde os componentes separados por até dois dias e finalize na hora. Troque a quinoa por arroz integral ou outro grão que já esteja na sua despensa.'] },
      { heading: '2. Panqueca de banana e aveia', paragraphs: ['Ingredientes: 1 banana madura, 1 ovo, 3 colheres de sopa de aveia e canela. Rendimento: 1 porção. Tempo: 10 minutos.', 'Amasse a banana, misture os demais ingredientes e doure pequenas porções em uma frigideira untada. Sirva com fruta e iogurte, se fizer sentido para você. Para uma versão sem ovo, use uma colher de sopa de linhaça hidratada e ajuste a textura com um pouco de água.'] },
      { heading: '3. Salada mediterrânea de grão-de-bico', paragraphs: ['Ingredientes: 1 xícara de grão-de-bico cozido, tomate, pepino, cebola roxa, salsinha, azeite e limão. Rendimento: 2 porções. Tempo: 15 minutos, sem contar o cozimento.', 'Misture os ingredientes e deixe descansar alguns minutos para os sabores se encontrarem. Sirva com pão, folhas ou como acompanhamento. Armazene em recipiente fechado por até dois dias. Para variar, acrescente cenoura, azeitona ou ervas frescas.'] },
      { heading: '4. Omelete colorida de legumes', paragraphs: ['Ingredientes: 2 ovos, abobrinha ralada, tomate, cheiro-verde e uma pitada de sal. Rendimento: 1 porção. Tempo: 12 minutos.', 'Refogue rapidamente os legumes, junte os ovos batidos e cozinhe em fogo baixo. Tampe para firmar a parte de cima. É uma receita para aproveitar pequenas quantidades de vegetais e pode receber cogumelos, folhas ou sobras de legumes assados.'] },
      { heading: '5. Frango assado com vegetais', paragraphs: ['Ingredientes: filés ou sobrecoxas de frango, batata, cebola, cenoura, azeite, páprica, alho e limão. Rendimento: 3 a 4 porções. Tempo: cerca de 45 minutos.', 'Tempere, distribua tudo em uma assadeira e asse até que o frango esteja completamente cozido e os vegetais macios. Separe porções para a semana depois que o preparo esfriar. Para uma versão vegetariana, use grão-de-bico ou tofu firme e reduza o tempo de forno conforme a textura.'] },
      { heading: 'Como usar as receitas na rotina', paragraphs: ['Escolha uma ou duas receitas para testar por vez. O objetivo não é cozinhar tudo no mesmo dia, mas criar algumas opções que diminuam a pressa durante a semana. Observe o que você gostou, o que pode ser ajustado e quais ingredientes se repetem entre os preparos.', 'Receitas práticas ficam ainda mais úteis quando viram repertório. Use a base, troque os vegetais e adapte os temperos para que o preparo continue fazendo sentido para sua casa.'] },
    ],
  },
];

export const categories = ['Todos', 'Nutrição', 'Planejamento alimentar', 'Receitas'];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
