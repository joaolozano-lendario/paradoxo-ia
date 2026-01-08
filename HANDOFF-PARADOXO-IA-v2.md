# HANDOFF: ISCA PARADOXO DA IA - v2.0

> **Documento de Continuacao - LEIA COMPLETAMENTE ANTES DE AGIR**
> **Versao:** 2.0
> **Data:** 08/Jan/2026
> **Status:** PENDENTE REVISAO ESTRATEGICA + INTEGRACAO AC

---

## ALERTA CRITICO

**A ISCA ATUAL ESTA ESTRATEGICAMENTE ERRADA.**

Antes de integrar com ActiveCampaign, o CONTEUDO precisa ser revisado.
O codigo funciona, mas o que ele mostra viola os principios de isca.

**LEIA PRIMEIRO:** `D:/funnel-architect/CONTRATO-CLAREZA-ISCAS.md`

---

## ESTADO ATUAL

### O Que Esta Pronto (Tecnico)

| Item | Status | Detalhes |
|------|--------|----------|
| App.tsx refatorado | OK | Usa content.ts dinamicamente |
| Form de qualificacao | OK | Modal com 7 campos + mascara WhatsApp |
| Tags no ActiveCampaign | OK | 18 tags criadas (IDs 203-220) |
| Build | OK | `npm run build` passa |
| TypeScript | OK | Sem erros |

### O Que Esta ERRADO (Estrategico)

| Erro | Onde | O Que Deveria Ser |
|------|------|-------------------|
| CTA de venda | `offer.buttonText` | "Receber Framework P.I.V.O." |
| Preco na isca | `offer.preco/precoOriginal` | REMOVER |
| Vagas inventadas | `evento.vagasRestantes` | REMOVER |
| Cases inventados | `proof.cases[].result` | Remover ou usar dados reais |
| Badge do evento | `hero.badge` e `offer.badge` | Badge sobre DOR, nao evento |
| Framework teaser | `framework.steps` | Entregar P.I.V.O. COMPLETO |
| Secao "oferta" | Secao inteira | Trocar por entrega de valor |

---

## DUAS TAREFAS PENDENTES

### TAREFA 1: REVISAO ESTRATEGICA DO CONTENT.TS (PRIORIDADE)

**Arquivo:** `D:/deploy-ready/paradoxo-ia/src/data/content.ts`

**Acoes:**

1. **Remover dados inventados:**
   - `evento.vagasRestantes: 127` → REMOVER
   - `evento.earlyBirdAte` → REMOVER (urgencia falsa)
   - `proof.cases` → Remover resultados especificos falsos ou marcar como exemplo hipotetico

2. **Mudar CTAs:**
   - `hero.cta`: "Quero Resolver Isso em 48h" → "Receber Framework P.I.V.O."
   - `offer.buttonText`: "QUERO PARTICIPAR DA IMERSAO" → "RECEBER FRAMEWORK COMPLETO"

3. **Remover mencoes ao evento:**
   - `hero.badge`: Trocar "IMERSAO PRATICA | 24 e 25 de Janeiro" por "FRAMEWORK EXCLUSIVO"
   - `offer.badge`: Mesmo
   - Remover `offer.preco`, `offer.precoOriginal`, `offer.urgencia`

4. **Entregar Framework COMPLETO:**
   - Expandir `framework.steps` com conteudo aplicavel
   - Adicionar templates, checklists, perguntas praticas
   - O lead deve conseguir USAR o framework SOZINHO

5. **Transformar secao "oferta" em "entrega":**
   - Em vez de vender, mostrar o que o lead VAI RECEBER ao preencher
   - CTA para captura, nao compra

### TAREFA 2: INTEGRACAO ACTIVECAMPAIGN (APOS TAREFA 1)

**Arquivo:** `D:/deploy-ready/paradoxo-ia/App.tsx` linha ~299-331

**Codigo atual:** `console.log` no `handleSubmit`

**Codigo necessario:** Chamadas reais ao MCP do ActiveCampaign

Ver secao "INTEGRACAO ACTIVECAMPAIGN" abaixo para codigo completo.

---

## LOCALIZACAO DOS ARQUIVOS

```
D:/deploy-ready/paradoxo-ia/
├── App.tsx                    # React app (handleSubmit linha ~299)
├── src/data/content.ts        # DADOS A REVISAR + IDs das tags
├── HANDOFF-PARADOXO-IA-v2.md  # Este arquivo
├── package.json               # npm run dev / npm run build
└── dist/                      # Build gerado

D:/funnel-architect/
├── CONTRATO-CLAREZA-ISCAS.md  # DOCUMENTO NORMATIVO - LEI
└── context-imersao-jan-26/    # Contexto adicional
```

---

## TAGS ACTIVECAMPAIGN (JA CRIADAS)

### Tags Principais
| ID | Tag | Quando Aplicar |
|----|-----|----------------|
| 203 | [ISCA][PARADOXO-IA][JAN26] | SEMPRE - identifica origem |
| 204 | [PARADOXO][VISUALIZOU] | Se implementar tracking |
| 205 | [PARADOXO][FORM-PREENCHIDO] | Ao submeter form |

### Tags de Qualificacao
| ID | Tag | Campo | Value |
|----|-----|-------|-------|
| 206 | [SITUACAO][EMPRESARIO-ATIVO] | situacao | empresario-ativo |
| 207 | [SITUACAO][ESTRUTURANDO] | situacao | estruturando |
| 208 | [SITUACAO][FUNCIONARIO] | situacao | funcionario |
| 209 | [SITUACAO][CONSULTOR] | situacao | consultor |
| 210 | [IA][USA-BEM] | experienciaIA | usa-bem |
| 211 | [IA][TENTOU-FALHOU] | experienciaIA | tentou-nao-funcionou |
| 212 | [IA][NUNCA-TENTOU] | experienciaIA | nunca-tentou |
| 213 | [IA][NAO-SABE] | experienciaIA | nao-sabe |
| 214 | [BARREIRA][TEMPO] | maiorBarreira | tempo |
| 215 | [BARREIRA][CONHECIMENTO] | maiorBarreira | conhecimento |
| 216 | [BARREIRA][EQUIPE] | maiorBarreira | equipe |
| 217 | [BARREIRA][CUSTO] | maiorBarreira | custo |
| 218 | [EVENTO][DISPONIVEL] | disponibilidade | sim |
| 219 | [EVENTO][TALVEZ] | disponibilidade | talvez |
| 220 | [EVENTO][INDISPONIVEL] | disponibilidade | nao |

### Mapa no content.ts
```typescript
export const tagIdMap: Record<string, number> = {
  'empresario-ativo': 206,
  'estruturando': 207,
  'funcionario': 208,
  'consultor': 209,
  'usa-bem': 210,
  'tentou-nao-funcionou': 211,
  'nunca-tentou': 212,
  'nao-sabe': 213,
  'tempo': 214,
  'conhecimento': 215,
  'equipe': 216,
  'custo': 217,
  'sim': 218,
  'talvez': 219,
  'nao': 220
}

export const tagIds = {
  isca: 203,
  visualizou: 204,
  preencheuForm: 205
}
```

---

## INTEGRACAO ACTIVECAMPAIGN

### Passo 1: Verificar MCP

```
mcp__activecampaign__list_tags com filtro "PARADOXO"
```

Deve retornar tags 203-220.

### Passo 2: Identificar Lista

```
mcp__activecampaign__list_lists
```

Opcoes:
- Lista 18 (Lista Workshop) - existente
- Criar nova lista para Imersao Jan26

### Passo 3: Modificar handleSubmit

**ATENCAO:** MCP e server-side. O frontend React NAO pode chamar MCP diretamente.

**Solucao recomendada:** Criar endpoint backend ou usar API REST do AC.

**Se usar API REST direta (com backend/proxy):**

```typescript
// Exemplo de integracao via API REST
// NAO EXPOR API KEY NO FRONTEND!

const AC_API_URL = 'https://academialendariaoficial.activehosted.com/api/3'

// 1. Criar/Atualizar contato
const contactRes = await fetch(`${AC_API_URL}/contact/sync`, {
  method: 'POST',
  headers: {
    'Api-Token': process.env.AC_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contact: {
      email: formData.email,
      firstName: formData.nome,
      phone: formData.whatsapp.replace(/\D/g, '')
    }
  })
})
const { contact } = await contactRes.json()

// 2. Adicionar a lista
await fetch(`${AC_API_URL}/contactLists`, {
  method: 'POST',
  headers: { 'Api-Token': process.env.AC_API_KEY, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contactList: { list: 18, contact: contact.id, status: 1 }
  })
})

// 3. Aplicar tags
const tagsToApply = [
  tagIds.isca, // 203
  tagIds.preencheuForm, // 205
  formData.situacao && tagIdMap[formData.situacao],
  formData.experienciaIA && tagIdMap[formData.experienciaIA],
  formData.maiorBarreira && tagIdMap[formData.maiorBarreira],
  formData.disponibilidade && tagIdMap[formData.disponibilidade]
].filter(Boolean)

for (const tagId of tagsToApply) {
  await fetch(`${AC_API_URL}/contactTags`, {
    method: 'POST',
    headers: { 'Api-Token': process.env.AC_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ contactTag: { contact: contact.id, tag: tagId } })
  })
}
```

**Se usar MCP via Claude (para testes):**

```
1. mcp__activecampaign__create_or_update_contact
2. mcp__activecampaign__add_contact_to_list
3. mcp__activecampaign__add_tag_to_contact (para cada tag)
```

---

## CHECKLIST DE ENTREGA

### Antes de Publicar

**Estrategia (CONTRATO-CLAREZA-ISCAS.md):**
- [ ] Nenhum dado inventado no content.ts
- [ ] CTA e de captura/consumo, NAO de compra
- [ ] Nao menciona preco
- [ ] Nao menciona evento diretamente
- [ ] Framework P.I.V.O. esta COMPLETO e aplicavel
- [ ] Secao "oferta" virou "entrega de valor"

**Tecnico:**
- [ ] Form captura nome, email, whatsapp
- [ ] Form captura campos de qualificacao
- [ ] ActiveCampaign recebe contato
- [ ] Tags aplicadas corretamente
- [ ] `npm run build` passa
- [ ] Sem erros no console

**Teste:**
- [ ] Lead de teste criado no AC
- [ ] Tags verificadas no painel do AC
- [ ] Fluxo completo funciona

---

## PROMPT PARA NOVA SESSAO

Cole isso para continuar:

```
# MISSAO: FINALIZAR ISCA PARADOXO DA IA

## SITUACAO

Isca "Paradoxo da IA" tem codigo pronto mas CONTEUDO ERRADO.
Ha duas tarefas:

1. REVISAO ESTRATEGICA: Corrigir content.ts seguindo CONTRATO-CLAREZA-ISCAS.md
2. INTEGRACAO AC: Substituir console.log por chamadas reais

## PRIMEIRA ACAO

1. Leia: D:/funnel-architect/CONTRATO-CLAREZA-ISCAS.md (LEI)
2. Leia: D:/deploy-ready/paradoxo-ia/HANDOFF-PARADOXO-IA-v2.md (este doc)
3. Leia: D:/deploy-ready/paradoxo-ia/src/data/content.ts (dados a corrigir)

## ERROS A CORRIGIR NO CONTENT.TS

- Remover: vagasRestantes, preco, precoOriginal, urgencia, earlyBirdAte
- Remover: cases com numeros inventados (R$ 47k/mes)
- Mudar: CTAs de "QUERO PARTICIPAR" para "RECEBER FRAMEWORK"
- Mudar: badges de evento para badge de valor
- Expandir: Framework P.I.V.O. com conteudo APLICAVEL

## APOS REVISAR CONTEUDO

Integrar com ActiveCampaign:
- Tags ja criadas: IDs 203-220
- Lista sugerida: 18 (Workshop) ou criar nova
- MCP disponivel? Testar com mcp__activecampaign__list_tags

## ENTREGAVEL FINAL

1. content.ts corrigido (sem dados falsos, sem venda direta)
2. App.tsx com integracao AC funcionando
3. Teste com lead real no ActiveCampaign
```

---

## CONTEXTO ADICIONAL

### O Que E Uma Isca

Uma isca NAO vende. Uma isca:
1. Entrega VALOR REAL completo
2. Captura lead qualificado
3. Gera reciprocidade
4. Alimenta nurture sequence

A VENDA acontece no nurture e na LP/PV, NAO na isca.

### Fluxo Correto

```
ISCA (valor) → NURTURE (consciencia) → LP/PV (venda)
```

### As 3 Iscas do Projeto

| Isca | Objetivo | Status |
|------|----------|--------|
| Paradoxo da IA | Revelar problema (Unaware→Problem Aware) | CONTEUDO ERRADO |
| Calculadora Tempo | Quantificar problema | ~70% |
| Quiz Diagnostico | Personalizar solucao | ~50% |

---

**FIM DO HANDOFF v2.0**

*Gerado em: 08/Jan/2026*
*IMPORTANTE: Nao publicar sem passar pelo checklist do CONTRATO-CLAREZA-ISCAS.md*
