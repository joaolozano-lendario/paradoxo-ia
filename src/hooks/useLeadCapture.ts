import { useState } from 'react';
import { AC_CONFIG } from '../config/activecampaign';

export interface LeadData {
  email: string;
  nome: string;
  whatsapp?: string;
  situacao?: string;
  experienciaIA?: string;
  maiorBarreira?: string;
  interesse?: string;
}

interface UseLeadCaptureReturn {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  sendLead: (data: LeadData) => Promise<boolean>;
}

export function useLeadCapture(): UseLeadCaptureReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendLead = async (data: LeadData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Tags a aplicar
      const tagIds = AC_CONFIG.getTagsToApply(false);

      // Extrair primeiro e ultimo nome
      const nameParts = (data.nome || '').trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Payload para API Proxy
      const payload = {
        email: data.email,
        nome: data.nome,
        firstName,
        lastName,
        phone: data.whatsapp || '',
        isca: 'paradoxo-ia',
        listId: AC_CONFIG.list.id,
        tags: tagIds,
        fieldValues: [],
        meta: {
          situacao: data.situacao,
          experienciaIA: data.experienciaIA,
          maiorBarreira: data.maiorBarreira,
          interesse: data.interesse,
          dataCaptura: new Date().toISOString().split('T')[0]
        }
      };

      console.log('[ParadoxoIA] Sending to AC:', payload);

      // Chamar API Proxy
      const response = await fetch(AC_CONFIG.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'HTTP ' + response.status);
      }

      const result = await response.json();
      console.log('[ParadoxoIA] AC Response:', result);

      // Facebook Pixel - Lead Event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Paradoxo da IA - Framework PIVO',
          content_category: 'isca',
          value: 0,
          currency: 'BRL'
        });
      }

      // GTM DataLayer - Lead Event
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'generate_lead',
          lead_source: 'paradoxo-ia',
          lead_situacao: data.situacao,
          lead_experiencia: data.experienciaIA,
          lead_barreira: data.maiorBarreira
        });
      }

      setSuccess(true);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao enviar dados';
      setError(errorMessage);
      console.error('[ParadoxoIA] Error:', err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    success,
    sendLead
  };
}
