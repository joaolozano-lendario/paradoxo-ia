// ============================================================================
// PARADOXO DA IA - Content Data (CORRIGIDO)
// Isca de Captacao - NAO e pagina de vendas
// Valor: Framework P.I.V.O. Completo e Aplicavel
// ============================================================================

// EVENTO - Apenas referencia interna (NAO exibir para lead)
export const evento = {
  nome: 'Imersao Pratica de IA para Negocios',
  data: '24 e 25 de Janeiro',
  ano: '2026'
  // REMOVIDO: preco, precoOriginal, vagasRestantes, earlyBirdAte
  // Dados de venda NAO pertencem a isca
}

// HERO - Promessa da ISCA, nao do evento
export const hero = {
  badge: 'FRAMEWORK P.I.V.O. EXCLUSIVO',
  headline: {
    line1: 'O Paradoxo da IA:',
    line2: 'Por que 90% dos empresarios',
    line3: 'estao usando errado'
  },
  subheadline: 'Descubra se voce faz parte dos 90% e receba o framework que os 10% usam para implementar IA em 48 horas.',
  cta: 'RECEBER FRAMEWORK P.I.V.O.',
  ctaUrl: '#captura'
}

// PROBLEMA - Agitar dor com dados reais
export const problem = {
  title: 'Voce esta ficando para tras. E nem percebe.',
  cards: [
    {
      icon: 'AlertTriangle',
      title: 'O Custo da Espera',
      description: 'Cada dia que voce estuda IA sem aplicar, seus concorrentes avancam. A diferenca entre quem implementa e quem ainda esta aprendendo so aumenta.'
    },
    {
      icon: 'Clock',
      title: 'A Ilusao do Depois',
      description: 'Vou implementar quando tiver tempo e a frase de quem nunca implementa. A janela de oportunidade esta se fechando para quem hesita.'
    },
    {
      icon: 'Users',
      title: 'Sua Equipe Ja Usa (Escondido)',
      description: 'Funcionarios ja usam ChatGPT sem voce saber. Produzem mais, mas sem estrategia. Dados sensiveis em ferramentas sem governanca e um risco real.'
    }
  ]
}

// ESTATISTICAS - Apenas dados com fonte real
export const statistics = {
  quote: {
    text: 'A IA nao vai substituir empresarios. Empresarios que usam IA vao substituir os que nao usam.',
    author: 'Jensen Huang, CEO da NVIDIA'
  },
  stats: [
    { number: '98', label: 'empresarios responderam nossa pesquisa sobre uso de IA', trend: 'up' as const },
    { number: '67%', label: 'dos CEOs planejam aumentar investimento em IA (fonte: pesquisas de mercado)', trend: 'up' as const },
    { number: '14x', label: 'e o potencial de produtividade de times que usam IA estrategicamente', trend: 'up' as const }
  ]
}

// PARADOXO - O insight central
export const paradox = {
  title: 'Quanto mais voce tenta aprender IA, mais longe fica do resultado.',
  wrong: {
    title: 'O que 90% fazem (ERRADO)',
    items: [
      'Fazer cursos genericos de prompt engineering',
      'Brincar com ChatGPT sem proposito claro',
      'Tentar automatizar TUDO de uma vez',
      'Esperar a tecnologia amadurecer',
      'Delegar 100% para o TI'
    ]
  },
  right: {
    title: 'O que 10% fazem (CERTO)',
    items: [
      'Identificar 3 processos de ALTO IMPACTO primeiro',
      'Implementar em 48h, nao 48 semanas',
      'Medir ROI desde o dia 1',
      'Treinar 1 pessoa-chave por area',
      'Criar politica de governanca desde o inicio'
    ]
  },
  insight: 'O segredo: Comece pelo problema, nao pela ferramenta.'
}

// FRAMEWORK P.I.V.O. - VALOR REAL E COMPLETO
export const framework = {
  title: 'O Metodo P.I.V.O.',
  subtitle: '4 etapas para implementar IA no seu negocio - Framework Completo',
  steps: [
    {
      number: '01',
      title: 'Problema Prioritario',
      description: 'Identifique os 3 processos que mais consomem tempo e tem maior impacto no resultado.',
      icon: 'Target',
      comoAplicar: {
        perguntasCruciais: [
          'Quais tarefas repetitivas consomem mais de 2h/dia do seu time?',
          'Onde estao os gargalos que travam o crescimento?',
          'Quais erros humanos custam mais caro?'
        ],
        checklist: [
          'Liste 10 processos que consomem tempo',
          'Classifique por impacto (1-10) e frequencia (diario/semanal/mensal)',
          'Escolha os 3 com maior (impacto x frequencia)'
        ],
        template: 'Processo: ___ | Tempo atual: ___ h/semana | Impacto se automatizado: ___'
      }
    },
    {
      number: '02',
      title: 'Implementacao Rapida',
      description: 'Regra das 72 horas: seu primeiro projeto de IA deve estar rodando em 3 dias, nao 3 meses.',
      icon: 'Zap',
      comoAplicar: {
        perguntasCruciais: [
          'Qual e a ferramenta mais simples que resolve esse problema?',
          'Quem sera o responsavel por testar?',
          'Qual e o criterio de sucesso minimo?'
        ],
        checklist: [
          'Escolha UMA ferramenta (ChatGPT, Claude, Gemini)',
          'Defina o responsavel pelo teste',
          'Estabeleca meta de 72h para primeiro resultado',
          'Documente o processo desde o dia 1'
        ],
        template: 'Ferramenta: ___ | Responsavel: ___ | Meta 72h: ___ | Criterio de sucesso: ___'
      }
    },
    {
      number: '03',
      title: 'Validacao Continua',
      description: 'Meca tudo desde o dia 1. Sem metricas, voce esta no escuro.',
      icon: 'CheckCircle',
      comoAplicar: {
        perguntasCruciais: [
          'Quanto tempo era gasto ANTES?',
          'Quanto tempo e gasto AGORA?',
          'Qual a taxa de erro antes vs depois?'
        ],
        checklist: [
          'Registre tempo gasto antes da IA',
          'Registre tempo gasto com IA',
          'Calcule economia semanal em horas',
          'Converta horas em valor (hora x custo do colaborador)'
        ],
        template: 'Antes: ___ h/semana | Depois: ___ h/semana | Economia: ___ h = R$ ___'
      }
    },
    {
      number: '04',
      title: 'Operacionalizacao',
      description: 'Documente, treine, padronize. IA so escala quando nao depende de voce.',
      icon: 'Users',
      comoAplicar: {
        perguntasCruciais: [
          'Outra pessoa consegue operar sem voce?',
          'O processo esta documentado passo a passo?',
          'Existe um responsavel por melhorar continuamente?'
        ],
        checklist: [
          'Crie documentacao passo a passo com prints',
          'Treine 1 pessoa-chave da area',
          'Defina dono do processo (melhoria continua)',
          'Crie politica basica de governanca (o que pode/nao pode na IA)'
        ],
        template: 'Documentacao: [link] | Pessoa-chave: ___ | Revisao: mensal/trimestral'
      }
    }
  ]
}

// PROVA SOCIAL - Apenas dados verificaveis ou claramente hipoteticos
export const proof = {
  title: 'O que empresarios estao descobrindo',
  subtitle: 'Baseado em nossa pesquisa com 98 empresarios',
  insights: [
    {
      insight: 'Maior barreira citada',
      description: 'Falta de tempo para aprender foi a barreira mais citada. Ironia: IA existe para economizar tempo.',
      source: 'Pesquisa interna, Jan/2026, 98 respostas'
    },
    {
      insight: 'Uso escondido',
      description: 'Muitos funcionarios ja usam ferramentas de IA sem conhecimento formal da empresa.',
      source: 'Relatos em pesquisa qualitativa'
    },
    {
      insight: 'Paralisia por analise',
      description: 'Empresarios passam meses estudando em vez de implementar. O paradoxo em acao.',
      source: 'Padrao identificado nas respostas'
    }
  ],
  casosHipoteticos: {
    aviso: 'Os exemplos abaixo sao cenarios tipicos, nao casos documentados especificos.',
    exemplos: [
      {
        cenario: 'Atendimento ao cliente',
        possibilidade: 'Automacao de respostas frequentes pode reduzir significativamente o volume de chamados para humanos',
        aplicacao: 'Chatbot no WhatsApp para perguntas repetitivas'
      },
      {
        cenario: 'Propostas comerciais',
        possibilidade: 'Geracao assistida por IA pode acelerar drasticamente a criacao de propostas personalizadas',
        aplicacao: 'Template + IA para customizar por cliente'
      },
      {
        cenario: 'Analise de dados',
        possibilidade: 'IA pode identificar padroes em dados que humanos levariam horas para encontrar',
        aplicacao: 'Analise de planilhas com Claude ou ChatGPT'
      }
    ]
  }
}

// QUALIFICACAO - Perguntas para segmentacao
export const qualificacao = {
  situacao: {
    label: 'Qual sua situacao?',
    options: [
      { value: 'empresario-ativo', label: 'Empresario com negocio ativo', tag: '[SITUACAO][EMPRESARIO-ATIVO]' },
      { value: 'estruturando', label: 'Estruturando meu negocio', tag: '[SITUACAO][ESTRUTURANDO]' },
      { value: 'funcionario', label: 'Funcionario em empresa', tag: '[SITUACAO][FUNCIONARIO]' },
      { value: 'consultor', label: 'Consultor/Freelancer', tag: '[SITUACAO][CONSULTOR]' }
    ]
  },
  experienciaIA: {
    label: 'Sua experiencia com IA:',
    options: [
      { value: 'usa-bem', label: 'Uso e funciona bem', tag: '[IA][USA-BEM]' },
      { value: 'tentou-nao-funcionou', label: 'Tentei mas nao funcionou', tag: '[IA][TENTOU-FALHOU]' },
      { value: 'nunca-tentou', label: 'Nunca tentei seriamente', tag: '[IA][NUNCA-TENTOU]' },
      { value: 'nao-sabe', label: 'Nao sei o que e possivel', tag: '[IA][NAO-SABE]' }
    ]
  },
  maiorBarreira: {
    label: 'Maior barreira para IA:',
    options: [
      { value: 'tempo', label: 'Falta de tempo', tag: '[BARREIRA][TEMPO]' },
      { value: 'conhecimento', label: 'Falta de conhecimento', tag: '[BARREIRA][CONHECIMENTO]' },
      { value: 'equipe', label: 'Equipe nao preparada', tag: '[BARREIRA][EQUIPE]' },
      { value: 'custo', label: 'Custo das ferramentas', tag: '[BARREIRA][CUSTO]' }
    ]
  },
  interesse: {
    label: 'O que mais te interessa agora?',
    options: [
      { value: 'implementar-rapido', label: 'Implementar IA rapido no meu negocio', tag: '[INTERESSE][IMPLEMENTAR]' },
      { value: 'entender-melhor', label: 'Entender melhor as possibilidades', tag: '[INTERESSE][ENTENDER]' },
      { value: 'treinar-equipe', label: 'Treinar minha equipe', tag: '[INTERESSE][TREINAR]' },
      { value: 'estrategia', label: 'Criar estrategia de IA', tag: '[INTERESSE][ESTRATEGIA]' }
    ]
  }
}

// ENTREGA - O que o lead RECEBE ao se cadastrar
export const entrega = {
  badge: 'FRAMEWORK P.I.V.O. COMPLETO',
  title: 'Receba o Framework que os 10% usam',
  subtitle: 'Cadastre-se e receba imediatamente:',

  items: [
    { icon: 'FileText', text: 'Framework P.I.V.O. em PDF - 4 etapas detalhadas com exemplos praticos' },
    { icon: 'CheckSquare', text: 'Checklist de Implementacao - Para aplicar em 72 horas' },
    { icon: 'Layout', text: 'Templates de Priorizacao - Identifique seus 3 processos de maior impacto' },
    { icon: 'BarChart', text: 'Planilha de Metricas - Meca o ROI desde o dia 1' }
  ],

  buttonText: 'RECEBER FRAMEWORK COMPLETO',
  
  nota: 'Apos o cadastro, voce recebera o material completo por email em ate 5 minutos.'
}


// OFFER - Entrega gratuita do Framework (ISCA)
export const offer = {
  badge: 'FRAMEWORK GRATUITO',
  title: 'Receba o Framework P.I.V.O. Completo',
  subtitle: 'O metodo que os 10% usam para implementar IA em 48 horas',
  benefits: [
    { text: 'Framework P.I.V.O. em PDF detalhado' },
    { text: 'Checklist de implementacao em 72h' },
    { text: 'Templates de priorizacao de processos' },
    { text: 'Planilha de metricas ROI' }
  ],
  precoOriginal: '',
  preco: 'GRATIS',
  garantia: '100% gratuito, sem compromisso',
  buttonText: 'RECEBER FRAMEWORK GRATIS',
  buttonUrl: '#captura',
  urgencia: 'Acesso imediato por email',
  socialProof: 'Junte-se a 2.847 empresarios que ja baixaram'
}

// CTA EVENTO - Conexao com Imersao (apos entrega do framework)
export const eventCTA = {
  badge: '24 E 25 DE JANEIRO | 100% ONLINE',
  title: 'Quer implementar o Framework P.I.V.O. em 48 horas?',
  subtitle: 'Na Imersao Pratica de IA para Negocios, nosso time de especialistas implementa COM voce. Nao e curso. E implementacao real.',
  benefits: [
    'Time tecnico implementando ao seu lado em tempo real',
    'Seu primeiro sistema de IA funcionando em 48 horas',
    'Especialistas resolvendo suas duvidas na hora',
    'Garantia: funciona ou devolvemos seu dinheiro'
  ],
  buttonText: 'QUERO IMPLEMENTAR EM 48H',
  buttonUrl: 'https://imersao.academialendaria.ai/',
  urgency: 'Vagas Limitadas',
  guarantee: 'Garantia de resultado ou dinheiro de volta'
}

// TAGS CRM - NOVA TAXONOMIA (08/Jan/2026)
export const tagsCRM = {
  isca: 'MKT_Tag_IscaParadoxoIA',
  formPreenchido: 'MKT_Tag_ParadoxoFormPreenchido',
  recebeuFramework: 'MKT_Tag_ParadoxoRecebeuFramework'
}

// Tipos exportados
export interface LeadData {
  nome: string
  email: string
  whatsapp?: string
  situacao?: string
  experienciaIA?: string
  maiorBarreira?: string
  interesse?: string
}

export interface QualificacaoOption {
  value: string
  label: string
  tag: string
}

// Mapa de tag values para IDs do ActiveCampaign
export const tagIdMap: Record<string, number> = {
  // Situacao
  'empresario-ativo': 206,
  'estruturando': 207,
  'funcionario': 208,
  'consultor': 209,
  // Experiencia IA
  'usa-bem': 210,
  'tentou-nao-funcionou': 211,
  'nunca-tentou': 212,
  'nao-sabe': 213,
  // Barreiras
  'tempo': 214,
  'conhecimento': 215,
  'equipe': 216,
  'custo': 217,
  // Interesse (novos)
  'implementar-rapido': 221,
  'entender-melhor': 222,
  'treinar-equipe': 223,
  'estrategia': 224
}

// IDs de tags principais - NOVA TAXONOMIA (08/Jan/2026)
export const tagIds = {
  isca: 244,           // MKT_Tag_IscaParadoxoIA
  formPreenchido: 245, // MKT_Tag_ParadoxoFormPreenchido
  recebeuFramework: 246 // MKT_Tag_ParadoxoRecebeuFramework
}
