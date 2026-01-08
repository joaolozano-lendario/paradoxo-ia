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
  Mail,
  Phone,
  User,
  Loader2,
  X
} from 'lucide-react'

// Importar dados do content.ts
import {
  evento,
  hero,
  problem,
  statistics,
  paradox,
  framework,
  proof,
  qualificacao,
  offer,
  eventCTA,
  entrega,
  LeadData
} from './src/data/content'

// Importar hook de captura para ActiveCampaign
import { useLeadCapture } from './src/hooks/useLeadCapture'

// Mapa de icones por nome
const iconMap: Record<string, React.ElementType> = {
  AlertTriangle,
  Clock,
  Users,
  Target,
  Zap,
  CheckCircle,
  DollarSign,
  Brain,
  TrendingUp
}

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

// Quote component
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
  naImersao,
  icon: Icon,
  delay = 0
}: {
  number: string
  title: string
  description: string
  naImersao?: string
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
        <p className="text-gray-600 leading-relaxed mb-2">{description}</p>
        {naImersao && (
          <p className="text-sm text-gray-500 italic flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-black-pure" />
            Na Imersao: {naImersao}
          </p>
        )}
      </div>
    </div>
  )
}

// Formatacao de WhatsApp
function formatWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

// Form State Types
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// Main App
function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showFrameworkPage, setShowFrameworkPage] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Hook para enviar dados ao ActiveCampaign
  const { sendLead, isLoading: isLeadLoading } = useLeadCapture()

  // Form data
  const [formData, setFormData] = useState<LeadData>({
    nome: '',
    email: '',
    whatsapp: '',
    situacao: '',
    experienciaIA: '',
    maiorBarreira: '',
    disponibilidade: ''
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'whatsapp') {
      setFormData(prev => ({ ...prev, [name]: formatWhatsApp(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    setErrorMessage('')

    try {
      // Validação básica
      if (!formData.email || !formData.nome || !formData.whatsapp) {
        throw new Error('Por favor, preencha todos os campos obrigatorios.')
      }

      // Enviar para ActiveCampaign via hook
      const success = await sendLead({
        email: formData.email,
        nome: formData.nome,
        whatsapp: formData.whatsapp,
        situacao: formData.situacao,
        experienciaIA: formData.experienciaIA,
        maiorBarreira: formData.maiorBarreira,
        interesse: formData.disponibilidade // mapear disponibilidade para interesse
      })

      if (!success) {
        throw new Error('Erro ao enviar dados. Tente novamente.')
      }

      // Sucesso - ir DIRETO para página do Framework (sem popup)
      setShowModal(false)
      setShowFrameworkPage(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })

    } catch (error) {
      setFormStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar. Tente novamente.')
    }
  }

  const openQualificationModal = () => {
    setShowModal(true)
    setFormStatus('idle')
    setErrorMessage('')
  }

  // Se showFrameworkPage, renderiza página de entrega do Framework
  if (showFrameworkPage) {
    return (
      <div className="min-h-screen bg-white-pure">
        {/* Header */}
        <header className="bg-black-pure text-white-pure py-6 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <DiamondLogo className="w-10 h-10" fill="#FFFFFF" />
            <span className="text-sm text-gray-400">Framework P.I.V.O. - Acesso Liberado</span>
          </div>
        </header>

        {/* Mensagem de Boas-vindas */}
        <section className="py-12 px-6 bg-white-soft border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-black-pure mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black-pure">
              Parabens, {formData.nome.split(' ')[0]}!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seu acesso ao Framework P.I.V.O. foi liberado. Abaixo voce encontra o metodo completo com checklists e templates para implementar IA em 48 horas.
            </p>
          </div>
        </section>

        {/* Framework Completo */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">FRAMEWORK COMPLETO</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-black-pure">
                {framework.title}
              </h2>
              <p className="text-xl text-gray-600">{framework.subtitle}</p>
            </div>

            <div className="space-y-12">
              {framework.steps.map((step, idx) => {
                const Icon = iconMap[step.icon] || Target
                return (
                  <div key={idx} className="bg-white-soft border border-gray-200 rounded-xl p-8">
                    {/* Header do Step */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-black-pure flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white-pure" />
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm font-medium">{step.number}</span>
                        <h3 className="text-2xl font-bold text-black-pure">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                      </div>
                    </div>

                    {/* Como Aplicar */}
                    {step.comoAplicar && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        {/* Perguntas Cruciais */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Perguntas Cruciais
                          </h4>
                          <ul className="space-y-2">
                            {step.comoAplicar.perguntasCruciais.map((pergunta, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-3 text-gray-700">
                                <span className="text-black-pure font-bold">{pIdx + 1}.</span>
                                {pergunta}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Checklist */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Checklist de Implementacao
                          </h4>
                          <ul className="space-y-2">
                            {step.comoAplicar.checklist.map((item, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-3 text-gray-700">
                                <CheckCircle className="w-5 h-5 text-black-pure flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Template */}
                        <div className="bg-black-pure text-white-pure p-4 rounded-lg">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Template
                          </h4>
                          <code className="text-sm text-gray-300 font-mono">
                            {step.comoAplicar.template}
                          </code>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Final - Imersao (APOS entrega de valor) - VERSAO ABUNDANTE */}
        <section className="py-20 px-6 bg-black-pure text-white-pure">
          <div className="max-w-5xl mx-auto">

            {/* Ponte Narrativa - Contexto */}
            <div className="text-center mb-16">
              <p className="text-gray-400 text-lg mb-3">{eventCTA.contexto.preTitle}</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white-pure leading-tight">
                {eventCTA.contexto.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                {eventCTA.contexto.subtitle}
              </p>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-500 mb-2">{eventCTA.ponte.principal}</p>
                <p className="text-white-pure font-medium">{eventCTA.ponte.prova}</p>
              </div>
            </div>

            {/* Card Principal do Evento */}
            <div className="bg-gradient-to-b from-gray-900 to-black-deep border border-gray-700 rounded-2xl overflow-hidden mb-12">

              {/* Header do Evento */}
              <div className="p-8 border-b border-gray-700 text-center">
                <span className="inline-block px-4 py-2 bg-white-pure text-black-pure text-sm font-bold rounded-lg mb-4">
                  {eventCTA.preco.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white-pure mb-2">
                  {eventCTA.evento.badge}
                </h3>
                <p className="text-gray-400">{eventCTA.evento.data}</p>
                <p className="text-gray-500 text-sm mt-1">{eventCTA.evento.formato}</p>
              </div>

              {/* O que esta incluso - Grid */}
              <div className="p-8 border-b border-gray-700">
                <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-6 text-center">
                  {eventCTA.oqueinclui.titulo}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {eventCTA.oqueinclui.blocos.map((bloco, idx) => (
                    <div key={idx} className="p-5 bg-black-pure/40 rounded-xl border border-gray-800">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white-pure/10 flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-white-pure" />
                        </div>
                        <div>
                          <h5 className="text-white-pure font-semibold mb-1">{bloco.titulo}</h5>
                          <p className="text-gray-400 text-sm mb-2">{bloco.desc}</p>
                          <span className="text-xs text-gray-500 italic">{bloco.destaque}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack de Valor */}
              <div className="p-8 border-b border-gray-700">
                <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-6 text-center">
                  {eventCTA.stack.titulo}
                </h4>
                <div className="max-w-xl mx-auto space-y-3">
                  {eventCTA.stack.itens.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                      <span className="text-gray-300">{item.item}</span>
                      <span className="text-gray-500 text-sm">{item.valor}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-600">
                    <span className="text-white-pure font-bold">Valor Total</span>
                    <span className="text-white-pure font-bold">{eventCTA.stack.valorTotal}</span>
                  </div>
                </div>
              </div>

              {/* Preco e CTA */}
              <div className="p-8 bg-black-pure/50">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-gray-500 line-through text-2xl">{eventCTA.preco.de}</span>
                    <span className="text-5xl font-bold text-white-pure">{eventCTA.preco.por}</span>
                  </div>
                  <p className="text-gray-400">ou {eventCTA.preco.parcelas}</p>
                  <p className="text-green-400 text-sm mt-1">{eventCTA.preco.economia}</p>
                </div>

                <a
                  href={eventCTA.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-md mx-auto px-8 py-5 bg-white-pure text-black-pure font-bold rounded-xl hover:bg-gray-100 transition-all text-lg text-center shadow-2xl shadow-white-pure/10"
                >
                  {eventCTA.buttonText}
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </a>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  {eventCTA.urgencia.texto} · {eventCTA.urgencia.subTexto}
                </p>
              </div>
            </div>

            {/* Garantia */}
            <div className="max-w-2xl mx-auto text-center p-6 bg-white-pure/5 border border-white-pure/10 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-white-pure/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white-pure" />
              </div>
              <h4 className="text-white-pure font-semibold mb-2">{eventCTA.garantia.titulo}</h4>
              <p className="text-gray-400 text-sm">{eventCTA.garantia.texto}</p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative">
      <ProgressIndicator sections={sections} currentSection={currentSection} />

      {/* HERO */}
      <Section id="hero" dark className="relative overflow-hidden grid-bg-dark textured">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-12 hero-logo">
            <DiamondLogo className="w-20 h-20 mx-auto mb-6 diamond-float diamond-glow" fill="#FFFFFF" />
          </div>

          <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white-pure/10 border border-white-pure/20 rounded-lg text-white-pure text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            {hero.badge}
          </span>

          <h1 className="hero-title hero-display font-bold mb-8">
            <span className="text-white-pure block">{hero.headline.line1}</span>
            <span className="text-gray-400 block">{hero.headline.line2}</span>
            <span className="text-white-pure block">{hero.headline.line3}</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {hero.subheadline}
          </p>

          <a
            href={hero.ctaUrl}
            className="hero-cta inline-flex items-center gap-3 px-8 py-4 bg-white-pure text-black-pure font-semibold rounded-lg btn-fill btn-fill-dark group"
          >
            {hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="hero-scroll mt-16">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-500 animate-bounce" />
          </div>
        </div>
      </Section>

      {/* PROBLEMA */}
      <Section id="problema" className="bg-white-soft dot-pattern">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">O Problema</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure display-tight">
              {problem.title}
            </h2>
          </div>

          <div className="space-y-6 stagger">
            {problem.cards.map((card, idx) => {
              const Icon = iconMap[card.icon] || AlertTriangle
              return (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white-pure border border-gray-200 border-l-4 border-l-black-pure rounded-lg card-lift">
                  <Icon className="w-6 h-6 text-black-pure flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black-deep">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ESTATISTICAS */}
      <Section id="estatisticas">
        <div className="max-w-5xl mx-auto text-center">
          <Quote text={statistics.quote.text} author={statistics.quote.author} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {statistics.stats.map((stat, idx) => (
              <StatCard
                key={idx}
                number={stat.number}
                label={stat.label}
                trend={stat.trend}
                delay={idx * 150}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* PARADOXO */}
      <Section id="paradoxo" className="bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">O Paradoxo</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure tracking-tight">
              {paradox.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white-pure border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black-deep">
                <TrendingDown className="w-5 h-5 text-gray-500" />
                {paradox.wrong.title}
              </h3>
              <ul className="space-y-3 text-gray-600">
                {paradox.wrong.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">x</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-black-pure text-white-pure rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {paradox.right.title}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {paradox.right.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white-pure mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white-pure border border-gray-200 rounded-lg">
              <Lightbulb className="w-5 h-5 text-black-pure" />
              <span className="text-black-soft">
                <strong>O segredo:</strong> {paradox.insight.replace('O segredo: ', '')}
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* FRAMEWORK */}
      <Section id="framework">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">O Framework</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure tracking-tight">
              {framework.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {framework.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {framework.steps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Target
              return (
                <FrameworkStep
                  key={idx}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  naImersao={step.naImersao}
                  icon={Icon}
                  delay={idx * 150}
                />
              )
            })}
          </div>
        </div>
      </Section>

      {/* PROVA */}
      <Section id="prova" className="bg-white-soft grid-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">Casos Reais</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-black-pure display-tight">
              {proof.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger">
            {proof.cases.map((caseItem, idx) => {
              const Icon = iconMap[caseItem.icon] || DollarSign
              return (
                <div key={idx} className="bg-white-pure border border-gray-200 rounded-lg p-6 card-lift">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-black-pure" />
                    <span className="text-gray-500 text-sm font-medium uppercase">{caseItem.sector}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-black-deep">
                    "{caseItem.title}"
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {caseItem.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-500 text-xs mb-1">Implementacao: {caseItem.implementation}</p>
                    <p className="text-2xl font-bold text-black-pure display-tight">{caseItem.result}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* OFERTA - Box de Captura com Abundancia */}
      <Section id="oferta" dark className="relative overflow-hidden grid-bg-dark textured">
        <div className="relative max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <DiamondLogo className="w-20 h-20 mx-auto mb-6 diamond-float diamond-glow" fill="#FFFFFF" />
            <span className="inline-block px-4 py-2 bg-white-pure/10 border border-white-pure/20 rounded-lg text-white-pure text-sm font-medium mb-6">
              {offer.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white-pure display-tight">
              {offer.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {offer.subtitle}
            </p>
          </div>

          {/* Box Principal */}
          <div className="bg-gradient-to-b from-gray-900 to-black-deep border border-gray-700 rounded-2xl overflow-hidden">
            {/* Stack de Valor */}
            <div className="p-8 border-b border-gray-700">
              <h3 className="text-lg font-semibold mb-6 text-gray-400 uppercase tracking-wider text-center">
                O que voce recebe agora:
              </h3>

              <div className="space-y-4">
                {offer.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-black-pure/30 rounded-lg border border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white-pure/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white-pure" />
                      </div>
                      <span className="text-white-pure font-medium">{benefit.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-black-pure/50">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white-pure">{offer.preco}</span>
              </div>

              <button
                onClick={openQualificationModal}
                className="w-full max-w-md mx-auto block px-8 py-5 bg-white-pure text-black-pure font-bold rounded-xl hover:bg-gray-100 transition-all text-lg shadow-2xl shadow-white-pure/10"
              >
                {offer.buttonText}
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Modal de Qualificacao */}
      {showModal && (
        <div className="fixed inset-0 bg-black-pure/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white-pure rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black-pure transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-black-pure">Receba o Framework P.I.V.O.</h3>
              <p className="text-gray-600 mb-6">O metodo de 4 etapas para implementar IA no seu negocio. Acesso imediato.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required placeholder="Seu nome" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black-pure transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="seu@email.com" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black-pure transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required placeholder="(11) 99999-9999" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black-pure transition-colors" />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-sm text-gray-500 mb-4">Ajude-nos a preparar uma experiencia personalizada:</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{qualificacao.situacao.label}</label>
                      <select name="situacao" value={formData.situacao} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black-pure transition-colors bg-white">
                        <option value="">Selecione...</option>
                        {qualificacao.situacao.options.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{qualificacao.experienciaIA.label}</label>
                      <select name="experienciaIA" value={formData.experienciaIA} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black-pure transition-colors bg-white">
                        <option value="">Selecione...</option>
                        {qualificacao.experienciaIA.options.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{qualificacao.maiorBarreira.label}</label>
                      <select name="maiorBarreira" value={formData.maiorBarreira} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black-pure transition-colors bg-white">
                        <option value="">Selecione...</option>
                        {qualificacao.maiorBarreira.options.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{qualificacao.disponibilidade.label}</label>
                      <select name="disponibilidade" value={formData.disponibilidade} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black-pure transition-colors bg-white">
                        <option value="">Selecione...</option>
                        {qualificacao.disponibilidade.options.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    {formStatus === 'error' && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {errorMessage}
                      </div>
                    )}

                <button type="submit" disabled={formStatus === 'loading' || isLeadLoading} className="w-full py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {(formStatus === 'loading' || isLeadLoading) ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      QUERO MEU KIT GRATIS
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  {offer.garantia} · Seus dados estao seguros.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

// URL da Imersao - Link estrategico
const IMERSAO_URL = 'https://lendario.ai/imersao/'

// Footer Component
function Footer() {
  return (
    <footer className="bg-black-pure text-white-pure">
      {/* CTA Destacado da Imersao */}
      <div className="border-b border-white-pure/10">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <span className="inline-block px-4 py-1.5 bg-white-pure/10 border border-white-pure/20 rounded-lg text-sm font-medium mb-4">
            Proximo Passo
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Quer implementar IA no seu negocio com acompanhamento?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Participe da Imersao Pratica de IA para Negocios e saia com automacoes funcionando.
          </p>
          <a
            href={IMERSAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white-pure text-black-pure font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Conhecer a Imersao
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer Principal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Mapa do Site */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Mapa do Site</h4>
            <ul className="space-y-2">
              <li><a href="https://academialendaria.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Pagina Inicial</a></li>
              <li><a href="https://oalanicolas.news/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">NewsLetter</a></li>
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Programas</h4>
            <ul className="space-y-2">
              <li><a href="https://academialendaria.ai/comunidade/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Comunidade Lendar[IA]</a></li>
              <li><a href="https://go.academialendaria.ai/gestor/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Certificacao Gestor [IA]</a></li>
              <li><a href="https://lendario.ai/formacao/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Formacao Lendar[IA]</a></li>
              <li><a href={IMERSAO_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure font-medium hover:text-gray-200 transition-colors">Imersao Pratica de IA</a></li>
            </ul>
          </div>

          {/* Ecossistema */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Ecossistema</h4>
            <ul className="space-y-2">
              <li><a href="https://agencialendaria.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Agencia Lendar[IA]</a></li>
              <li><a href="https://lendario.ai/chat/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Chat Lendario</a></li>
              <li><a href="https://superagentes.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Super Agentes</a></li>
              <li><a href="https://hub.lendario.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Hub Lendario</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="mailto:suporte@vidalendaria.com" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">E-mail</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5551998444171" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Whatsapp</a></li>
              <li className="pt-2"><span className="text-gray-500 text-xs uppercase tracking-wider">Transparencia</span></li>
              <li><a href="https://academialendaria.ai/termos" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Termos de uso</a></li>
              <li><a href="https://academialendaria.ai/privacidade" target="_blank" rel="noopener noreferrer" className="text-sm text-white-pure/80 hover:text-white-pure transition-colors">Politica de privacidade</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">Siga-nos nas redes</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://www.youtube.com/@Academia.Lendaria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white-pure/20 flex items-center justify-center hover:bg-white-pure/10 transition-colors" aria-label="Youtube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/academialendaria/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white-pure/20 flex items-center justify-center hover:bg-white-pure/10 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://x.com/oalanicolas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white-pure/20 flex items-center justify-center hover:bg-white-pure/10 transition-colors" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@oalanicolas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white-pure/20 flex items-center justify-center hover:bg-white-pure/10 transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/academia-lend-r-ia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white-pure/20 flex items-center justify-center hover:bg-white-pure/10 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <p className="text-sm text-white-pure/60 leading-relaxed">
              Somos Um <span className="text-white-pure">Ecossistema de Educacao & Inovacao</span> para <span className="text-[#D4AF37]">Pessoas e Negocios</span> serem Potencializados com IA Generativa.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white-pure/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <DiamondLogo className="w-6 h-6" fill="#FFFFFF" />
            <p className="text-sm text-white-pure/40">
              Academia Lendar[IA] © {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
          <p className="text-xs text-white-pure/30">
            CNPJ: 37.348.342/0001-07
          </p>
        </div>
      </div>
    </footer>
  )
}

export default App
