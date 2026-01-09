/**
 * Lead Persistence Utility
 *
 * Sistema de persistência de dados do lead entre as 4 iscas do ecossistema.
 * Usa localStorage como cache local + URL params para cross-device.
 *
 * Fluxo:
 * 1. Ao submeter qualquer isca → salva no localStorage
 * 2. Ao abrir qualquer isca → checa URL params primeiro, depois localStorage
 * 3. Se tem dados → pré-preenche form automaticamente
 */

const STORAGE_KEY = 'al_lead_v1';
const EXPIRY_DAYS = 30;

export interface PersistedLeadData {
  nome: string;
  email: string;
  whatsapp: string;
  lastIsca?: string;
  timestamp?: number;
}

/**
 * Salva dados do lead no localStorage após submit
 */
export function saveLeadToStorage(data: PersistedLeadData): void {
  try {
    const payload: PersistedLeadData = {
      nome: data.nome || '',
      email: data.email || '',
      whatsapp: data.whatsapp || '',
      lastIsca: data.lastIsca || 'paradoxo-ia',
      timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    // localStorage pode estar indisponível (modo privado, etc)
    console.warn('[LeadPersistence] Falha ao salvar no localStorage:', error);
  }
}

/**
 * Recupera dados do lead do localStorage
 * Retorna null se não existir ou estiver expirado
 */
export function getLeadFromStorage(): PersistedLeadData | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const data: PersistedLeadData = JSON.parse(stored);

    // Verifica expiração
    if (data.timestamp) {
      const expiryMs = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
      if (Date.now() - data.timestamp > expiryMs) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
    }

    return data;
  } catch (error) {
    console.warn('[LeadPersistence] Falha ao ler do localStorage:', error);
    return null;
  }
}

/**
 * Extrai dados do lead dos URL params (para cross-sell links)
 * Formato: ?ld=base64(JSON)
 */
export function getLeadFromUrl(): PersistedLeadData | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const ld = params.get('ld');
    if (!ld) return null;

    const decoded = JSON.parse(atob(ld));
    return {
      nome: decoded.n || '',
      email: decoded.e || '',
      whatsapp: decoded.w || ''
    };
  } catch (error) {
    // URL param inválido ou malformado
    return null;
  }
}

/**
 * Gera URL com dados do lead para cross-sell
 * Ex: buildCrossLink('https://calculadora.academialendaria.ai', lead)
 */
export function buildCrossLink(baseUrl: string, lead: PersistedLeadData): string {
  try {
    const payload = {
      n: lead.nome,
      e: lead.email,
      w: lead.whatsapp
    };
    const encoded = btoa(JSON.stringify(payload));
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}ld=${encoded}`;
  } catch (error) {
    // Fallback para URL sem dados
    return baseUrl;
  }
}

/**
 * Hook principal: recupera dados do lead na ordem de prioridade
 * 1. URL params (cross-device)
 * 2. localStorage (mesmo dispositivo)
 *
 * Se encontrar via URL, também salva no localStorage para uso futuro
 */
export function getPersistedLead(): PersistedLeadData | null {
  // Prioridade 1: URL params
  const fromUrl = getLeadFromUrl();
  if (fromUrl && (fromUrl.email || fromUrl.nome)) {
    // Salva no storage para uso futuro
    saveLeadToStorage({
      ...fromUrl,
      lastIsca: 'cross-link',
      timestamp: Date.now()
    });
    return fromUrl;
  }

  // Prioridade 2: localStorage
  const fromStorage = getLeadFromStorage();
  if (fromStorage && (fromStorage.email || fromStorage.nome)) {
    return fromStorage;
  }

  return null;
}

/**
 * Limpa dados persistidos (útil para logout ou reset)
 */
export function clearPersistedLead(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('[LeadPersistence] Falha ao limpar localStorage:', error);
  }
}

/**
 * URLs base das iscas para cross-sell
 */
export const ISCA_URLS = {
  quiz: 'https://quiz.academialendaria.ai',
  calculadora: 'https://calculadora.academialendaria.ai',
  paradoxo: 'https://paradoxo.academialendaria.ai',
  guia: 'https://guia.academialendaria.ai'
} as const;
