import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BedSingle, CalendarCheck, ChevronDown, ShoppingCart, Smile, Users, ShieldCheck, GraduationCap, ClipboardCheck, MapPin, PhoneCall } from 'lucide-react'
import homepageArt from '../homepage.svg'
import { saveAppointment } from '../firebase/appointments'
import { sendAppointmentEmail } from '../firebase/email'

export default function Home() {
  const { t } = useTranslation()

  const categories = [
    { id: 'alltag', icon: Users, title: t('homePage.services.alltag.title'), intro: t('homePage.services.alltag.intro'), details: [t('homePage.services.alltag.detail1'), t('homePage.services.alltag.detail2'), t('homePage.services.alltag.detail3')] },
    { id: 'haushalt', icon: ShoppingCart, title: t('homePage.services.haushalt.title'), intro: t('homePage.services.haushalt.intro'), details: [t('homePage.services.haushalt.detail1'), t('homePage.services.haushalt.detail2'), t('homePage.services.haushalt.detail3')] },
    { id: 'freizeit', icon: Smile, title: t('homePage.services.freizeit.title'), intro: t('homePage.services.freizeit.intro'), details: [t('homePage.services.freizeit.detail1'), t('homePage.services.freizeit.detail2'), t('homePage.services.freizeit.detail3')] },
    { id: 'termine', icon: CalendarCheck, title: t('homePage.services.termine.title'), intro: t('homePage.services.termine.intro'), details: [t('homePage.services.termine.detail1'), t('homePage.services.termine.detail2'), t('homePage.services.termine.detail3')] },
    { id: 'nachsorge', icon: BedSingle, title: t('homePage.services.nachsorge.title'), intro: t('homePage.services.nachsorge.intro'), details: [t('homePage.services.nachsorge.detail1'), t('homePage.services.nachsorge.detail2'), t('homePage.services.nachsorge.detail3')] }
  ]

  const [openCategory, setOpenCategory] = useState('alltag')
  const [openTraining, setOpenTraining] = useState('')
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const today = new Date().toISOString().split('T')[0]
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: t('homePage.services.alltag.title'),
    date: '',
    time: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatusMessage('')

    try {
      await saveAppointment(formData)
      await sendAppointmentEmail(formData)
      setStatusMessage(t('homePage.booking.success'))
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        service: t('homePage.services.alltag.title'),
        date: '',
        time: '',
        message: ''
      })
    } catch (error) {
      console.error('Error saving appointment:', error)
      setStatusMessage(t('homePage.booking.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-10 md:py-16 space-y-10 bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="container mx-auto px-4 pt-8 md:pt-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-primary/15 dark:border-slate-700 bg-gradient-to-br from-brand-cream/85 via-white to-brand-cream/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 px-6 py-10 md:px-12 md:py-14 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,131,144,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(219,141,105,0.16),transparent_30%)] pointer-events-none" />
              <div className="relative grid items-center gap-6 lg:gap-8 lg:grid-cols-[1fr_2fr]">
            <div className="relative z-20 text-center lg:text-left">
              <div className="inline-block rounded-[1.75rem] border border-white/60 dark:border-white/10 bg-white/84 dark:bg-slate-950/72 backdrop-blur-md px-6 py-6 md:px-8 md:py-8 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-gold-primary text-navy-dark font-semibold text-xs">
                      {t('homePage.hero.badge')}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.24em] text-navy-dark/70 dark:text-brand-cream/75 mb-3">
                    {t('homePage.hero.preTitle')}
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-dark dark:text-brand-cream mb-3 drop-shadow-sm leading-tight">
                    {t('homePage.hero.title')}
                  </h1>
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                    {t('homePage.hero.subtitle')}
                  </p>
                </div>
            </div>

            <div className="relative animate-fadeScale -mx-4 md:-mx-6 lg:-mx-0">
                <div className="absolute -inset-6 rounded-full bg-gold-primary/10 blur-3xl animate-pulseSoft" />
                <div className="absolute left-[4%] top-[6%] h-24 w-24 rounded-full border border-navy-light/8 animate-float-slow" />
                <div className="absolute right-[8%] bottom-[8%] h-28 w-28 rounded-full border border-gold-primary/12 animate-float" />
                <img
                  src={homepageArt}
                  alt={t('homePage.hero.title')}
                  className="w-full h-auto object-contain scale-110 md:scale-125 animate-float-slow drop-shadow-[0_50px_150px_rgba(16,55,64,0.25)]"
                />
            </div>
            </div>
          </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start max-w-6xl mx-auto">
          <div id="terminbuchung" className="card p-6 md:p-8 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gold-primary/15 text-gold-dark flex items-center justify-center">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-dark dark:text-brand-cream">{t('homePage.booking.title')}</h2>
                <p className="text-slate-600 dark:text-slate-300">{t('homePage.booking.subtitle')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t('homePage.booking.firstName')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t('homePage.booking.lastName')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('homePage.booking.phone')}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
              </div>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('homePage.booking.message')}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-gold-primary hover:bg-gold-dark text-navy-dark font-semibold disabled:opacity-50"
              >
                <CalendarCheck className="h-5 w-5" />
                {loading ? t('homePage.booking.sending') : t('homePage.booking.submit')}
              </button>

              {statusMessage && <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-300">{statusMessage}</p>}
            </form>
          </div>

          <div className="space-y-4">
            <div className="card p-6 md:p-8 border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-navy-dark dark:text-brand-cream mb-2">{t('homePage.services.title')}</h2>
              <p className="text-slate-600 dark:text-slate-300">
                {t('homePage.services.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {categories.map((category) => {
                const Icon = category.icon
                const expanded = openCategory === category.id

                return (
                  <article key={category.id} className="card border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenCategory(expanded ? '' : category.id)}
                      className="w-full flex items-start justify-between gap-4 p-5 text-left"
                      aria-expanded={expanded}
                    >
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-slate-900/5 dark:bg-white/10 flex items-center justify-center text-gold-dark dark:text-brand-cream shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-navy-dark dark:text-brand-cream">{category.title}</h3>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{category.intro}</p>
                        </div>
                      </div>
                      <ChevronDown className={`mt-1 h-5 w-5 text-slate-500 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                    </button>

                    {expanded && (
                      <div className="px-5 pb-5 -mt-1">
                        <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 p-4">
                          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                            {category.details.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ausbildung & Sanitätsdienst / Event-Sicherheit */}
      <section className="container mx-auto px-4">
        <div className="relative overflow-visible rounded-[2rem] border border-gold-primary/15 dark:border-slate-700 bg-gradient-to-br from-brand-cream/25 via-white to-brand-cream/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-6 py-12 md:px-12 md:py-14 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,131,144,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(219,141,105,0.12),transparent_26%)] pointer-events-none" />

          <div className="relative grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 px-4 py-2 backdrop-blur-md shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <ShieldCheck className="h-4 w-4 text-gold-dark" />
                <span className="text-sm font-semibold text-navy-dark dark:text-brand-cream">{t('homePage.training.badge')}</span>
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-brand-cream leading-tight">
                {t('homePage.training.title')}
              </h2>

              <p className="mt-4 text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                {t('homePage.training.text')}
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6">
                <h3 className="flex items-center gap-3 text-xl font-bold text-navy-dark dark:text-brand-cream">
                  <MapPin className="h-5 w-5 text-gold-dark" />
                  {t('homePage.training.areasTitle')}
                </h3>
                <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                    {t('homePage.training.area1')}
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                    {t('homePage.training.area2')}
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                    {t('homePage.training.area3')}
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-gold-primary hover:bg-gold-dark text-navy-dark font-semibold shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
                  onClick={() => {
                    const el = document.getElementById('terminbuchung')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  <PhoneCall className="h-5 w-5" />
                  {t('homePage.training.cta')}
                </button>

                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  {t('homePage.training.ctaBadge')}
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-[1.5rem] border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-navy-dark dark:text-brand-cream mb-2">
                  {t('homePage.training.sidebarTitle')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{t('homePage.training.sidebarSubtitle')}</p>

                <div className="space-y-4">
                  {[
                    {
                      id: 'ausbilder',
                      icon: GraduationCap,
                      title: t('homePage.training.item1Title'),
                      intro: t('homePage.training.item1Intro'),
                      details: [t('homePage.training.item1Detail1'), t('homePage.training.item1Detail2'), t('homePage.training.item1Detail3')]
                    },
                    {
                      id: 'praevention',
                      icon: ClipboardCheck,
                      title: t('homePage.training.item2Title'),
                      intro: t('homePage.training.item2Intro'),
                      details: [t('homePage.training.item2Detail1'), t('homePage.training.item2Detail2'), t('homePage.training.item2Detail3')]
                    },
                    {
                      id: 'sanitaetsdienst',
                      icon: ShieldCheck,
                      title: t('homePage.training.item3Title'),
                      intro: t('homePage.training.item3Intro'),
                      details: [t('homePage.training.item3Detail1'), t('homePage.training.item3Detail2'), t('homePage.training.item3Detail3')]
                    }
                  ].map((item) => {
                    const isOpen = openTraining === item.id
                    const Icon = item.icon

                    return (
                      <article key={item.id} className="card border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setOpenTraining(isOpen ? '' : item.id)}
                          className="w-full flex items-start justify-between gap-4 p-5 text-left"
                          aria-expanded={isOpen}
                        >
                          <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-slate-900/5 dark:bg-white/10 flex items-center justify-center text-gold-dark dark:text-brand-cream shrink-0">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-navy-dark dark:text-brand-cream">{item.title}</h4>
                              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.intro}</p>
                            </div>
                          </div>
                          <ChevronDown className={`mt-1 h-5 w-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 -mt-1">
                            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 p-4">
                              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                                {item.details.map((d) => (
                                  <li key={d} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-gold-primary/15 bg-gradient-to-br from-brand-cream/25 via-white to-brand-cream/10 p-5">
                  <p className="text-lg font-bold text-navy-dark dark:text-brand-cream">
                    {t('homePage.training.footerTitle')}
                  </p>
                  <p className="mt-1 text-slate-700 dark:text-slate-200 text-sm">
                    {t('homePage.training.footerText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

