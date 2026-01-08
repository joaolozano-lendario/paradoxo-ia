/**
 * Configuracao do ActiveCampaign para o Paradoxo da IA
 *
 * TAXONOMIA DE GOVERNANCA:
 * - Formato: [CODIGO]_[AREA]_[TIPO]_[Nome]
 * - Areas: MKT, COM, CS, PROD, MASTER
 * - Tipos: Lista, Tag, Auto, Pipe, Form, Camp, Pro
 * - Temporarios: sufixo _TEMP_[MES][ANO]
 *
 * IDs criados em: 08/Jan/2026
 * Ambiente: Academia Lendaria
 */

// =============================================================================
// TIPOS
// =============================================================================
export type LeadTemperatura = 'quente' | 'morno' | 'frio'

export interface LeadScoreData {
  situacao?: string
  experienciaIA?: string
  maiorBarreira?: string
  disponibilidade?: string
}

export interface LeadScoreResult {
  score: number
  temperatura: LeadTemperatura
  tagId: number
}

// =============================================================================
// CONFIGURACAO PRINCIPAL
// =============================================================================
export const AC_CONFIG = {
  // Lista para leads do Paradoxo
  // Taxonomia: 03_MKT_Lista_IscaParadoxoIA_TEMP_JAN26
  list: {
    id: 60,
    name: '03_MKT_Lista_IscaParadoxoIA_TEMP_JAN26'
  },

  // Lista de compradores da Imersao (para referencia)
  listaCompradores: {
    id: 54,
    name: '04_MKT_Lista_ImersaoNegocios'
  },

  // Tags principais - NOVA TAXONOMIA
  tags: {
    // Origem
    origemIsca: {
      id: 244,
      name: 'MKT_Tag_IscaParadoxoIA'
    },
    // Form preenchido
    formPreenchido: {
      id: 245,
      name: 'MKT_Tag_ParadoxoFormPreenchido'
    },
    // Framework enviado
    frameworkEnviado: {
      id: 246,
      name: 'MKT_Tag_ParadoxoRecebeuFramework'
    },
    // Temperatura - Criados em 08/Jan/2026
    leadQuente: {
      id: 257,
      name: 'MKT_Tag_ParadoxoLeadQuente'
    },
    leadMorno: {
      id: 258,
      name: 'MKT_Tag_ParadoxoLeadMorno'
    },
    leadFrio: {
      id: 259,
      name: 'MKT_Tag_ParadoxoLeadFrio'
    },
    // Comprador da Imersao (para Goal nas automacoes)
    compradorImersao: {
      id: 192,
      name: '04_MKT_Tag_ImersaoNegocios_Aprovado'
    }
  },

  // API Proxy endpoint
  apiEndpoint: 'https://api-proxy-activecampaign.vercel.app/api/lead/qualify',

  // Todas as tags que devem ser aplicadas ao lead
  getTagsToApply: (recebeuFramework: boolean = false, temperaturaTagId?: number): number[] => {
    const tags = [244, 245] // origemIsca + formPreenchido
    if (recebeuFramework) {
      tags.push(246) // frameworkEnviado
    }
    // Adiciona tag de temperatura se disponivel e valida (ID > 0)
    if (temperaturaTagId && temperaturaTagId > 0) {
      tags.push(temperaturaTagId)
    }
    return tags
  }
}

// =============================================================================
// SISTEMA DE SCORE PARA TEMPERATURA
// =============================================================================

/**
 * Calcula o score do lead baseado nos 4 campos do formulario
 * Score vai de 0 a 12 pontos
 *
 * LOGICA:
 * - Situacao: ICP fit (empresario = +3)
 * - ExperienciaIA: Prontidao (tentou e falhou = +3, sabe que precisa)
 * - MaiorBarreira: Qual objecao (tempo = +3, imersao resolve em 48h)
 * - Disponibilidade: Urgencia (imediata = +3)
 */
export function calcularScoreLead(data: LeadScoreData): LeadScoreResult {
  let score = 0

  // SITUACAO (ICP fit) - Max 3 pontos
  switch (data.situacao) {
    case 'empresario-ativo':
      score += 3 // ICP perfeito
      break
    case 'estruturando':
    case 'consultor':
      score += 2 // ICP aceitavel
      break
    case 'funcionario':
      score += 0 // Nao e ICP
      break
  }

  // EXPERIENCIA COM IA (Prontidao) - Max 3 pontos
  switch (data.experienciaIA) {
    case 'tentou-nao-funcionou':
      score += 3 // JA TENTOU = sabe que precisa, quer solucao
      break
    case 'usa-bem':
      score += 2 // Ja usa = quer escalar
      break
    case 'nunca-tentou':
      score += 1 // Curioso mas nao urgente
      break
    case 'nao-sabe':
      score += 0 // Precisa muita educacao
      break
  }

  // MAIOR BARREIRA (Objecao principal) - Max 3 pontos
  switch (data.maiorBarreira) {
    case 'tempo':
      score += 3 // Imersao resolve em 48h!
      break
    case 'conhecimento':
      score += 2 // Especialistas ensinam na hora
      break
    case 'equipe':
      score += 1 // Sessao por especialidade ajuda
      break
    case 'custo':
      score += 0 // Objecao de preco = mais dificil converter
      break
  }

  // DISPONIBILIDADE (Urgencia) - Max 3 pontos
  switch (data.disponibilidade) {
    case 'imediata':
      score += 3 // QUER AGORA!
      break
    case 'proximos-30-dias':
      score += 2 // Janela aberta
      break
    case 'analisando':
      score += 1 // Precisa nurture
      break
    case 'apenas-curioso':
      score += 0 // Frio
      break
  }

  // Classificar temperatura baseado no score
  let temperatura: LeadTemperatura
  let tagId: number

  if (score >= 9) {
    temperatura = 'quente'
    tagId = AC_CONFIG.tags.leadQuente.id
  } else if (score >= 5) {
    temperatura = 'morno'
    tagId = AC_CONFIG.tags.leadMorno.id
  } else {
    temperatura = 'frio'
    tagId = AC_CONFIG.tags.leadFrio.id
  }

  return { score, temperatura, tagId }
}

/**
 * Retorna descricao da temperatura para logs/debug
 */
export function getTemperaturaDescricao(temperatura: LeadTemperatura): string {
  switch (temperatura) {
    case 'quente':
      return 'QUENTE (Score 9-12) - Sequencia curta, oferta direta'
    case 'morno':
      return 'MORNO (Score 5-8) - Sequencia media, educacao + oferta'
    case 'frio':
      return 'FRIO (Score 0-4) - Sequencia longa, muita educacao'
  }
}

export default AC_CONFIG
