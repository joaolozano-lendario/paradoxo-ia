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

export const AC_CONFIG = {
  // Lista para leads do Paradoxo
  // Taxonomia: 03_MKT_Lista_IscaParadoxoIA_TEMP_JAN26
  list: {
    id: 60,
    name: '03_MKT_Lista_IscaParadoxoIA_TEMP_JAN26'
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
    }
  },

  // API Proxy endpoint
  apiEndpoint: 'https://api-proxy-activecampaign.vercel.app/api/lead/qualify',

  // Todas as tags que devem ser aplicadas ao lead
  getTagsToApply: (recebeuFramework: boolean = false): number[] => {
    const tags = [244, 245] // origemIsca + formPreenchido
    if (recebeuFramework) {
      tags.push(246) // frameworkEnviado
    }
    return tags
  }
}

export default AC_CONFIG
