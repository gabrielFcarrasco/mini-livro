export interface Capitulo {
  id: string;
  titulo: string;
  ehSubtitulo: boolean; // Ajuda a definir o tamanho da fonte (Prólogo maior, capítulos menores)
  paragrafos: string[];
  imagem?: {
    url: string;
    posicaoDepoisDoParagrafo: number;
  };
}

export const livroData: Capitulo[] = [
  {
    id: "prologo",
    titulo: "PRÓLOGO",
    ehSubtitulo: false,
    paragrafos: [
      "Existem histórias que começam de forma grandiosa.",
      "Com acontecimentos marcantes, declarações inesquecíveis ou momentos que parecem ter saído diretamente de um filme.",
      "A nossa não começou assim.",
      "Começou em um jardim.",
      "Em meio à rotina, distrações, dias comuns e caminhos que pareciam seguir sempre iguais, duas vidas acabaram se encontrando de maneira simples. Quase imperceptível para o restante do mundo.",
      "Mas algumas das coisas mais importantes da vida começam exatamente assim.",
      "Pequenas.",
      "Silenciosas.",
      "Como sementes enterradas antes das primeiras flores nascerem.",
      "Naquele tempo, Gabriel ainda não entendia completamente o próprio jardim. Existiam partes bonitas, é verdade, mas também haviam espaços vazios, sonhos adormecidos e caminhos que pareciam sempre levar aos mesmos lugares.",
      "Vitória também carregava consigo suas marcas, aprendizados, pressa, força e a maneira intensa com que aprendeu a enfrentar a vida.",
      "Eles ainda não sabiam, mas aquele encontro mudaria muito mais do que apenas a companhia um do outro.",
      "Mudaria o jardim, e talvez seja exatamente isso que o amor faz. Não cria um novo lugar. Mas transforma, pouco a pouco, aquilo que antes parecia incapaz de florescer.",
      "Então, antes de continuar esta história, existe apenas uma coisa importante para se lembrar:",
      "Alguns encontros não chegam fazendo barulho.",
      "Alguns chegam como chuva sobre uma terra seca.",
      "E quando percebemos…",
      "Já existe vida nascendo onde antes havia apenas silêncio."
    ]
  },
  {
    id: "capitulo-1",
    titulo: "Capítulo 1 — O Encontro",
    ehSubtitulo: true,
    imagem: {
      url: '/img-cap1.png', // ou .png, dependendo de como salvou na pasta public
      posicaoDepoisDoParagrafo: 5 // Aparece após "Respondeu o homem, envergonhado."
    },
    paragrafos: [
      "Em um jardim, existia um certo homem com uma aparência calma e tranquila. Ele cuidava daquilo que lhe havia sido incumbido e, talvez naquele tempo, apenas fazia sem perceber o quanto estava estagnado.",
      "Até que, certo dia, caminhando distraído, acabou esbarrando em uma pessoa que, de um pulo, assustou-se.",
      "— Que susto! Escapou da boca da mulher que, logo em seguida, desculpou-se pelo que disse.",
      "— Desculpa. Respondeu o homem, envergonhado.",
      "Então, olhando melhor para aquela pessoa ainda desconhecida, ele reparou que seus cabelos batiam em seus ombros e que seus fios faziam voltas tão lindas, formando belos cachos. Seus olhos, ainda assustados, eram castanho-escuros e seu rosto era incrivelmente lindo.",
      "Esse homem não conseguia ver defeito algum naquela mulher que estava logo à sua frente. Porém, naquele momento de constrangimento mútuo, acabaram apenas seguindo seus rumos. Mas aquele dia jamais seria esquecido por ele.",
      "Algo ainda mais curioso era que essas duas pessoas tinham amigos em comum que, por uma coincidência — ou não — haviam chamado diversas pessoas para um certo evento, e apenas os dois aceitaram.",
      "Então, mais uma vez, esses dois desconhecidos voltaram a se encontrar. Agora, não mais em um simples esbarrão por aí.",
      "— Olá, tudo bem? Me chamo Vitória! — disse a bela mulher.",
      "— Oi, prazer. Me chamo Gabriel — respondeu o homem ainda tímido, antes de continuar com uma pergunta: — Você já foi em uma vigília?",
      "— Essa é a minha primeira. Respondeu Vitória.",
      "E, bom, logo após a vigília, Gabriel e Vitória ainda continuaram conversando aos poucos, pois Gabriel costumava enviar mensagens em alguns horários específicos do dia enquanto cuidava do jardim, e Vitória também era muito atarefada.",
      "Pouco a pouco, iam conhecendo mais um do outro e, em pouco tempo, já não eram mais completamente desconhecidos.",
      "Gabriel nem imaginava que aquela pequena esbarrada mudaria tanto sua vida e o seu jardim. Jardim esse que, por vezes, havia sido calmo até demais, com águas que pareciam não correr, sonhos enterrados que não floresciam e escolhas que sempre o levavam a continuar estagnado."
    ]
  },
  {
    id: "capitulo-2",
    titulo: "Capítulo 2 — O Jardim",
    ehSubtitulo: true,
    imagem: {
      url: '/img-cap2.png',
      posicaoDepoisDoParagrafo: 11 // Aparece no final do capítulo
    },
    paragrafos: [
      "Conforme Vitória ia ganhando espaço em seu jardim, ela começou a ajudar em sua organização.",
      "Aquilo que parecia calmo demais começou a movimentar-se mais, mas isso não foi algo ruim, de modo algum.",
      "Ela descobriu muitos dos motivos de algumas coisas não florescerem, dos frutos não amadurecerem, e Gabriel começou a mudar muitas coisas.",
      "Começou a ter mais ideias, mais obras em seu jardim.",
      "Quem diria que alguém tão calmo gostaria tanto de músicas agitadas?",
      "E talvez a maior surpresa para Gabriel tenha sido sua habilidade com a escrita. Vitória tirou do fundo dele um poeta e um escritor.",
      "Gabriel, por sua vez, ficava impressionado com as habilidades de organização de Vitória, com o quanto ela era inteligente e com a facilidade que tinha em criar novas ideias.",
      "Ela é muito forte. Acredito que porque a vida a ensinou a ser.",
      "Muitas vezes, era dura nas palavras e também buscava fazer as coisas o mais rápido possível. Ela aprendeu que a praticidade e a velocidade precisavam ser valorizadas.",
      "E, com sua criatividade, colocou mais cores no jardim.",
      "Gabriel gostou muito de sua companhia. Existia uma falta que, por vezes, ele sentia, mas nem imaginava que poderia de fato mudar.",
      "Aquele trabalho que até parecia pacato, mas ainda assim cansativo, virou algo muito mais prazeroso de se fazer."
    ]
  },
  {
    id: "capitulo-3",
    titulo: "Capítulo 3 — As Colisões",
    ehSubtitulo: true,
    imagem: {
      url: '/img-cap3.png',
      posicaoDepoisDoParagrafo: 6 // Aparece após "amar um ao outro."
    },
    paragrafos: [
      "Algumas vezes eles colidiram, nisso não posso negar.",
      "Às vezes, ela queria que ele fosse mais acelerado, enquanto ele queria que ela desacelerasse um pouco.",
      "Às vezes, as perspectivas de mundo não se encaixavam e, por muitos dias, parecia que eram diferentes demais para continuar o projeto naquele jardim.",
      "Mas todos os momentos — fossem eles bons ou não tão bons, fáceis ou difíceis — foram muito importantes para a construção de cada um.",
      "Hoje podemos ver o quanto amadureceram e o quanto o laço está ficando mais forte.",
      "Os erros ao manusear algo no jardim ensinaram a eles a forma correta de usar.",
      "As conversas difíceis foram as que mais ensinaram o que é, de fato, amar um ao outro.",
      "Sim, hoje eles namoram.",
      "E Gabriel aprendeu que o Dia dos Namorados precisa ter um cuidado maior em sua organização. Não que ele não se importasse, mas talvez fosse descuidado demais em detalhes importantes, como reservar um local com muita antecedência.",
      "Apesar de ainda existir um certo receio da Vitória por que os dois primeiros não foram muito bons, vejo que Gabriel está gerando grandes expectativas de que esse ano pode ser uma cidade de chaves"
    ]
  },
  {
    id: "capitulo-4",
    titulo: "Capítulo 4 — O Lar",
    ehSubtitulo: true,
    imagem: {
      url: '/img-cap4.png',
      posicaoDepoisDoParagrafo: 7 // Aparece após "encontrou nela um lar."
    },
    paragrafos: [
      "E voltando ao escritor que Vitória descobriu ao garimpar o jardim dele…",
      "Parece até bem doido imaginar que alguém poderia escrever tantas coisas sobre amor sem nunca ter vivido algo assim antes.",
      "Parece até coisa de cinema.",
      "Mas eu gosto de acreditar que Gabriel não estava apenas querendo filosofar ou impressionar Vitória.",
      "Por mais que antes não tivesse contato algum com relacionamentos amorosos, foi com ela que ele pôde expor o seu coração.",
      "Para ele, escrever parece ser algo que naturalmente consegue expressar aquilo que talvez outros gestos não conseguiriam.",
      "Em suas metáforas, ele pode ser livre.",
      "E essa liberdade nasceu porque ele encontrou nela um lar.",
      "Quando estamos em casa, nos sentimos livres para sermos nós mesmos. E, quando Gabriel está com Vitória, ele pode ser ele mesmo.",
      "E convenhamos: nela não faltam motivos para que ele possa se inspirar."
    ]
  },
  {
    id: "capitulo-5",
    titulo: "Capítulo 5 — As Flores",
    ehSubtitulo: true,
    imagem: {
      url: '/img-cap5.png',
      posicaoDepoisDoParagrafo: 10 // Aparece no final do capítulo
    },
    paragrafos: [
      "Neste Dia dos Namorados, parece que Gabriel quer tentar, de alguma forma, mostrar o quanto ela sempre foi importante para ele.",
      "No primeiro Dia dos Namorados, acabaram indo ao shopping comer batata frita na praça de alimentação.",
      "No segundo, ele perdeu tempo e não entrou na fila de espera do restaurante, o que ocasionou uma nova frustração.",
      "Não sei dizer como essa nova tentativa irá acabar.",
      "Espero que termine com mais um dos muitos finais felizes que já tiveram.",
      "Por enquanto, chegamos ao fim.",
      "Não consegui contar todas as aventuras que os dois viveram desde a primeira troca de olhares.",
      "Vejo que, como em todos os relacionamentos, existiram muitos altos e baixos que, com toda certeza, jamais serão esquecidos por esse casal.",
      "Que, neste Dia dos Namorados, eles possam aproveitar um ao outro.",
      "E que as próximas aventuras sejam tão alegres quanto as antigas.",
      "Pois, no fim, desde que Vitória chegou, o jardim de Gabriel começou a ter mais flores."
    ]
  }
];