import { useState } from 'react'
import { BedSingle, CalendarCheck, ChevronDown, ShoppingCart, Smile, Users } from 'lucide-react'
import homepageArt from '../homepage.svg'
import { saveAppointment } from '../firebase/appointments'

export default function Home() {
  const categories = [
    {
      id: 'alltag',
      icon: Users,
      title: 'Alltagsbegleitung',
      intro: 'Unterstützung für einen ruhigen und sicheren Alltag.',
      details: ['Begleitung im Alltag', 'Gespräche und Aktivierung', 'Spaziergänge und kleine Erledigungen']
    },
    {
      id: 'haushalt',
      icon: ShoppingCart,
      title: 'Hauswirtschaft & Einkauf',
      intro: 'Praktische Hilfe rund um Haushalt, Ordnung und Besorgungen.',
      details: ['Einkäufe und Besorgungen', 'Leichte Reinigung', 'Wäsche und einfache Haushaltsaufgaben']
    },
    {
      id: 'freizeit',
      icon: Smile,
      title: 'Freizeit & Gesellschaft',
      intro: 'Gemeinsame Zeit, damit der Alltag leichter und schöner wird.',
      details: ['Gemeinsames Kochen', 'Vorlesen, Spielen oder Gespräche', 'Begleitung bei Spaziergängen']
    },
    {
      id: 'termine',
      icon: CalendarCheck,
      title: 'Organisation & Termine',
      intro: 'Wenn Termine, Papierkram oder Abläufe Unterstützung brauchen.',
      details: ['Arzt- und Behördenbegleitung', 'Kalender und Terminplanung', 'Alltägliche Organisation']
    },
    {
      id: 'nachsorge',
      icon: BedSingle,
      title: 'Nachsorge zu Hause',
      intro: 'Zuverlässige Hilfe nach einem Krankenhausaufenthalt oder in einer belastenden Phase.',
      details: ['Entlastung nach dem Krankenhaus', 'Sicherheit im Alltag', 'Ruhige Begleitung zuhause']
    }
  ]

  const [openCategory, setOpenCategory] = useState('alltag')
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: 'Alltagsbegleitung',
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
      setStatusMessage('Vielen Dank. Ihre Anfrage wurde gespeichert.')
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        service: 'Alltagsbegleitung',
        date: '',
        time: '',
        message: ''
      })
    } catch (error) {
      console.error('Error saving appointment:', error)
      setStatusMessage('Die Buchung konnte gerade nicht gespeichert werden. Bitte erneut versuchen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-10 md:py-16 space-y-10 bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="container mx-auto px-4 pt-8 md:pt-14">
          <div className="relative overflow-visible rounded-[2rem] border border-gold-primary/15 dark:border-slate-700 bg-gradient-to-br from-brand-cream/85 via-white to-brand-cream/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 px-6 py-14 md:px-12 md:py-16 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,131,144,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(219,141,105,0.14),transparent_26%)] pointer-events-none" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative z-20 text-center lg:text-left max-w-2xl">
              <div className="inline-block rounded-[1.75rem] border border-white/60 dark:border-white/10 bg-white/84 dark:bg-slate-950/72 backdrop-blur-md px-6 py-6 md:px-8 md:py-8 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gold-primary text-navy-dark font-semibold text-sm">
                      Anerkanntes Angebot nach § 45a SGB XI
                    </span>
                  </div>
                  <p className="text-xs md:text-sm uppercase tracking-[0.24em] text-navy-dark/70 dark:text-brand-cream/75 mb-4">
                    Alltagshelfer Plus Herz
                  </p>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-navy-dark dark:text-brand-cream mb-4 drop-shadow-sm">
                    Alltagshelfer Plus Herz
                  </h1>
                  <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed">
                    Hilfe im Alltag, klar erklärt und direkt buchbar.
                  </p>
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-[1100px] lg:max-w-none animate-fadeScale h-[320px] md:h-[420px] lg:h-[480px]">
                <div className="absolute inset-0 rounded-full bg-gold-primary/10 blur-2xl animate-pulseSoft" />
                <div className="absolute left-[6%] top-[12%] h-16 w-16 rounded-full border border-navy-light/12 animate-float-slow" />
                <div className="absolute right-[-4%] bottom-[6%] h-20 w-20 rounded-full border border-gold-primary/18 animate-float" />
                <div className="absolute left-[48%] top-1/4 -translate-x-1/2 h-44 w-16 bg-slate-800/20 dark:bg-slate-200/8 rounded-full z-20" />
                <img
                  src={homepageArt}
                  alt="Alltagshelfer Plus Herz"
                  style={{ right: '-4vw' }}
                  className="absolute top-0 bottom-0 -right-4 w-[120%] h-full object-cover object-right translate-x-4 lg:translate-x-12 scale-[1.18] lg:scale-[1.2] z-10 opacity-100 animate-slideInRight animate-float-slow drop-shadow-[0_60px_200px_rgba(16,55,64,0.18)]"
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
                <h2 className="text-2xl font-bold text-navy-dark dark:text-brand-cream">Direkte Terminbuchung</h2>
                <p className="text-slate-600 dark:text-slate-300">Kurz ausfüllen, wir melden uns zeitnah zurück.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Vorname"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Nachname"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefonnummer"
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
                placeholder="Kurze Nachricht oder Wunsch"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-gold-primary hover:bg-gold-dark text-navy-dark font-semibold disabled:opacity-50"
              >
                <CalendarCheck className="h-5 w-5" />
                {loading ? 'Wird gesendet...' : 'Termin anfragen'}
              </button>

              {statusMessage && <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-300">{statusMessage}</p>}
            </form>
          </div>

          <div className="space-y-4">
            <div className="card p-6 md:p-8 border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-navy-dark dark:text-brand-cream mb-2">Leistungen auf einen Blick</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Klicken Sie auf eine Kategorie, um mehr Details und passende Unterpunkte zu sehen.
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
    </div>
  )
}
