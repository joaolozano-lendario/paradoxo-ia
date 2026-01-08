import React, { useState, useEffect, useRef } from 'react'
import {
  Brain,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Zap,
  Users,
  DollarSign,
  Clock,
  ChevronDown,
  Mail
} from 'lucide-react'

// Lendaria Diamond Logo SVG Component
function DiamondLogo({ className = "w-12 h-12", fill = "#000000" }: { className?: string, fill?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
    </svg>
  )
}

// Hook for scroll-based animations
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

// Progress indicator
function ProgressIndicator({ sections, currentSection }: { sections: string[], currentSection: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((_, idx) => (
        <div
          key={idx}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            idx === currentSection
              ? 'bg-black-pure scale-150'
              : idx < currentSection
                ? 'bg-gray-600'
                : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

// Section wrapper with animation
function Section({
  children,
  className = '',
  id,
  dark = false
}: {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}) {
  const { ref, isInView } = useInView(0.2)

  return (
    <section
      ref={ref}
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 py-24 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${dark ? 'bg-black-pure text-white-pure' : 'bg-white-pure text-black-soft'} ${className}`}
    >
      {children}
    </section>
  )
}

// Stat card component
function StatCard({
  number,
  label,
  trend,
  delay = 0
}: {
  number: string
  label: string
  trend?: 'up' | 'down'
  delay?: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white-soft border border-gray-100 rounded-lg p-6 text-center transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-4xl md:text-5xl font-bold text-black-pure">
          {number}
        </span>
        {trend && (
          trend === 'up'
            ? <TrendingUp className="w-6 h-6 text-black-pure" />
            : <TrendingDown className="w-6 h-6 text-gray-500" />
        )}
      </div>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  )
}

// Quote component - using Source Serif Pro per brand guidelines
function Quote({ text, author }: { text: string; author: string }) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <blockquote className="bg-white-soft border-l-4 border-black-pure p-6">
        <p className="text-2xl md:text-3xl font-serif italic text-black-pure leading-relaxed mb-4">
          "{text}"
        </p>
        <cite className="text-gray-500 text-sm not-italic font-medium">
          — {author}
        </cite>
      </blockquote>
    </div>
  )
}

// Framework step component
function FrameworkStep({
  number,
  title,
  description,
  icon: Icon,
  delay = 0
}: {
  number: string
  title: string
  description: string
  icon: React.ElementType
  delay?: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`flex gap-6 items-start transition-all duration-500 ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-black-pure flex items-center justify-center">
        <Icon className="w-6 h-6 text-white-pure" />
      </div>
      <div>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-gray-400 text-sm font-medium">{number}</span>
          <h3 className="text-xl font-semibold text-black-deep">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Main App
function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [email, setEmail] = useState('')
  const sections = ['hero', 'problema', 'estatisticas', 'paradoxo', 'framework', 'prova', 'oferta']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const sectionElements = sections.map(id => document.getElementById(id))

      sectionElements.forEach((section, idx) => {
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(idx)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Email capturado: ${email}\n\nEm producao, isso enviaria para seu CRM/Email Marketing.`)
  }

  return (
    <div className="relative">
      <ProgressIndicator sections={sections} currentSection={currentSection} />

      {/* HERO - Dark section with grid background */}
      <Section id="hero" dark className="relative overflow-hidden grid-bg-dark textured">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Logo with floating animation */}
          <div className="mb-12 hero-logo">
            <DiamondLogo className="w-20 h-20 mx-auto mb-6 diamond-float diamond-glow" fill="#FFFFFF" />
          </div>

          <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white-pure/10 border border-white-pure/20 rounded-lg text-white-pure text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            ALERTA PARA EMPRESARIOS
          </span>

          <h1 className="hero-title hero-display font-bold mb-8">
            <span className="text-white-pure block">O Paradoxo da IA:</span>
            <span className="text-gray-400 block">Por que 90% dos empresarios</span>
            <span className="text-white-pure block">estao usando errado</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Enquanto voce tenta "aprender IA", seus concorrentes ja automatizaram
            <span className="text-white-pure font-semibold"> 40% das operacoes</span> e
            reduziram custos em milhoes.
          </p>

          <a
            href="#oferta"
            className="hero-cta inline-flex items-center gap-3 px-8 py-4 bg-white-pure text-black-pure font-semibold rounded-lg btn-fill btn-fill-dark group"
          >
            Quero o Framework Gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="hero-scroll mt-16">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-500 animate-bounce" />
          </div>
        </div>
      </Section>

      {/* PROBLEMA - Agitar a dor */}
      <Section id="problema" className="bg-white-soft dot-pattern">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">O Problema</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure display-tight">
              Voce esta ficando para tras.
              <br />
              <span className="text-gray-500">E nem percebe.</span>
            </h2>
          </div>

          <div className="space-y-6 stagger">
            <div className="flex items-start gap-4 p-6 bg-white-pure border border-gray-200 border-l-4 border-l-black-pure rounded-lg card-lift">
              <AlertTriangle className="w-6 h-6 text-black-pure flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black-deep">O Custo da Espera</h3>
                <p className="text-gray-600">
                  Cada dia que voce "estuda" IA sem aplicar, sua empresa perde em media
                  <strong className="text-black-pure"> R$ 15.000</strong> em eficiencia operacional
                  que seus concorrentes ja capturaram.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white-pure border border-gray-200 border-l-4 border-l-black-pure rounded-lg card-lift">
              <Clock className="w-6 h-6 text-black-pure flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black-deep">A Ilusao do "Depois"</h3>
                <p className="text-gray-600">
                  "Vou implementar quando tiver tempo" e a frase de empresas que
                  <strong className="text-black-pure"> fecharam</strong>. A janela de oportunidade
                  esta se fechando. Em 18 meses, sera tarde demais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white-pure border border-gray-200 border-l-4 border-l-black-pure rounded-lg card-lift">
              <Users className="w-6 h-6 text-black-pure flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black-deep">Seus Funcionarios Sabem Mais que Voce</h3>
                <p className="text-gray-600">
                  37% dos funcionarios ja usam IA escondido do chefe. Eles estao produzindo mais,
                  mas <strong className="text-black-pure">sem estrategia</strong>. Imagine o risco
                  de dados sensiveis sendo jogados no ChatGPT sem governanca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* BREATHER - Estatisticas */}
      <Section id="estatisticas">
        <div className="max-w-5xl mx-auto text-center">
          <Quote
            text="A IA nao vai substituir empresarios. Empresarios que usam IA vao substituir os que nao usam."
            author="Jensen Huang, CEO da NVIDIA"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <StatCard
              number="67%"
              label="dos CEOs planejam aumentar investimento em IA em 2025"
              trend="up"
              delay={0}
            />
            <StatCard
              number="R$ 2.3M"
              label="economia media anual de empresas que implementaram IA corretamente"
              trend="up"
              delay={150}
            />
            <StatCard
              number="14x"
              label="mais produtivos sao times que usam IA vs times tradicionais"
              trend="up"
              delay={300}
            />
          </div>
        </div>
      </Section>

      {/* PARADOXO - O insight */}
      <Section id="paradoxo" className="bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">O Paradoxo</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure tracking-tight">
              Quanto mais voce tenta "aprender IA",
              <br />
              <span className="text-gray-500">mais longe fica do resultado.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white-pure border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black-deep">
                <TrendingDown className="w-5 h-5 text-gray-500" />
                O que 90% fazem (ERRADO)
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">x</span>
                  Fazer cursos genericos de "prompt engineering"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">x</span>
                  Brincar com ChatGPT sem proposito claro
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">x</span>
                  Tentar automatizar TUDO de uma vez
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">x</span>
                  Esperar a tecnologia "amadurecer"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">x</span>
                  Delegar 100% para o TI
                </li>
              </ul>
            </div>

            <div className="p-8 bg-black-pure text-white-pure rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                O que 10% fazem (CERTO)
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-white-pure mt-1 flex-shrink-0" />
                  Identificar 3 processos de ALTO IMPACTO primeiro
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-white-pure mt-1 flex-shrink-0" />
                  Implementar em 72h, nao 72 dias
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-white-pure mt-1 flex-shrink-0" />
                  Medir ROI desde o dia 1
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-white-pure mt-1 flex-shrink-0" />
                  Treinar 1 pessoa-chave por area
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-white-pure mt-1 flex-shrink-0" />
                  Criar politica de governanca desde o inicio
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white-pure border border-gray-200 rounded-lg">
              <Lightbulb className="w-5 h-5 text-black-pure" />
              <span className="text-black-soft">
                <strong>O segredo:</strong> Comece pelo problema, nao pela ferramenta.
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* FRAMEWORK - A solucao */}
      <Section id="framework">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">O Framework</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure tracking-tight">
              O Metodo
              <span className="text-gray-500"> P.I.V.O.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 etapas para implementar IA no seu negocio em 30 dias
              (mesmo que voce nao entenda nada de tecnologia)
            </p>
          </div>

          <div className="space-y-8">
            <FrameworkStep
              number="01"
              title="Problema Prioritario"
              description="Identifique os 3 processos que mais consomem tempo da sua equipe. Esses sao seus Quick Wins - onde IA gera resultado imediato e mensuravel."
              icon={Target}
              delay={0}
            />
            <FrameworkStep
              number="02"
              title="Implementacao Rapida"
              description="72 horas para primeiro resultado. Nada de projetos de 6 meses. Use ferramentas prontas (nao reinvente a roda). Comece pequeno, escale rapido."
              icon={Zap}
              delay={150}
            />
            <FrameworkStep
              number="03"
              title="Validacao Continua"
              description="Meca tudo desde o dia 1: tempo economizado, erros reduzidos, satisfacao do time. Se nao da pra medir, nao faca."
              icon={CheckCircle}
              delay={300}
            />
            <FrameworkStep
              number="04"
              title="Operacionalizacao"
              description="Documente, treine, padronize. Crie uma 'pessoa-chave de IA' em cada area. Estabeleca governanca: o que pode e o que nao pode ir pro ChatGPT."
              icon={Users}
              delay={450}
            />
          </div>
        </div>
      </Section>

      {/* PROVA - Cases rapidos */}
      <Section id="prova" className="bg-white-soft grid-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">Casos Reais</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure display-tight">
              Empresarios que aplicaram
              <br />
              <span className="text-gray-500">nos ultimos 90 dias</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger">
            <div className="bg-white-pure border border-gray-200 rounded-lg p-6 card-lift">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-black-pure" />
                <span className="text-gray-500 text-sm font-medium uppercase">Varejo</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black-deep">
                "Cortamos 40% do tempo em atendimento"
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Rede de lojas com 12 unidades implementou atendente IA no WhatsApp.
                Resultado: 40% menos chamados para humanos, NPS subiu 18 pontos.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-500 text-xs mb-1">Implementacao: 5 dias</p>
                <p className="text-2xl font-bold text-black-pure display-tight">R$ 47k/mes economizados</p>
              </div>
            </div>

            <div className="bg-white-pure border border-gray-200 rounded-lg p-6 card-lift">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-black-pure" />
                <span className="text-gray-500 text-sm font-medium uppercase">Servicos</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black-deep">
                "Propostas que levavam 4h agora saem em 20min"
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Consultoria de RH automatizou geracao de propostas comerciais.
                Time comercial triplicou capacidade de atendimento.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-500 text-xs mb-1">Implementacao: 3 dias</p>
                <p className="text-2xl font-bold text-black-pure display-tight">3x mais propostas/mes</p>
              </div>
            </div>

            <div className="bg-white-pure border border-gray-200 rounded-lg p-6 card-lift">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-black-pure" />
                <span className="text-gray-500 text-sm font-medium uppercase">Industria</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black-deep">
                "IA pega erros que humanos nao veem"
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Fabrica de pecas implementou analise de qualidade por visao computacional.
                Reducao de 87% em pecas defeituosas que chegavam ao cliente.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-500 text-xs mb-1">Implementacao: 14 dias</p>
                <p className="text-2xl font-bold text-black-pure display-tight">87% menos defeitos</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* OFERTA - CTA Final (Dark) */}
      <Section id="oferta" dark className="relative overflow-hidden grid-bg-dark textured">
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <DiamondLogo className="w-24 h-24 mx-auto mb-6 diamond-float diamond-glow" fill="#FFFFFF" />
            <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">Gratuito por tempo limitado</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white-pure display-tight">
            Receba o Framework P.I.V.O. Completo
            <br />
            <span className="text-gray-400">+ Checklist de Implementacao</span>
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
            O mesmo framework que empresas estao usando para
            <strong className="text-white-pure"> economizar milhoes</strong> com IA.
            Enviamos direto no seu email em 2 minutos.
          </p>

          <div className="bg-black-deep border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-white-pure">
              O que voce recebe:
            </h3>

            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white-pure flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  <strong className="text-white-pure">Framework P.I.V.O. Detalhado</strong> —
                  Passo a passo de implementacao
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white-pure flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  <strong className="text-white-pure">Checklist de 47 Pontos</strong> —
                  Para nao esquecer nada na implementacao
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white-pure flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  <strong className="text-white-pure">Template de ROI</strong> —
                  Calcule quanto sua empresa pode economizar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white-pure flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  <strong className="text-white-pure">Lista de 15 Ferramentas</strong> —
                  As que realmente funcionam (testadas)
                </span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors group-focus-within:text-white-pure" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black-pure border border-gray-600 rounded-lg text-white-pure placeholder:text-gray-500 focus:outline-none focus:border-white-pure transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-white-pure text-black-pure font-semibold rounded-lg btn-fill btn-fill-dark whitespace-nowrap"
              >
                Quero Receber
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-4">
              Zero spam. Cancele quando quiser. Seus dados estao seguros.
            </p>
          </div>

          <p className="text-gray-500 text-sm mt-12">
            Mais de <span className="text-white-pure font-semibold">2.847 empresarios</span> ja
            baixaram este material nos ultimos 30 dias.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 bg-white-pure">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <DiamondLogo className="w-10 h-10" fill="#000000" />
          <p className="text-gray-500 text-sm">
            Academia Lendar[IA] — Eternizando legados atraves da IA
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
