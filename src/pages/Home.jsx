import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CalendarCheck, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import homepageImage from '../Homepage.png'

export default function Home() {
  const { t } = useTranslation()
  const benefits = [
    {
      title: t('site.home.benefits.personalized.title'),
      text: t('site.home.benefits.personalized.text')
    },
    {
      title: t('site.home.benefits.trusted.title'),
      text: t('site.home.benefits.trusted.text')
    },
    {
      title: t('site.home.benefits.quality.title'),
      text: t('site.home.benefits.quality.text')
    }
  ]
  const highlights = [
    {
      icon: ShieldCheck,
      title: t('site.home.highlights.safe.title'),
      text: t('site.home.highlights.safe.text')
    },
    {
      icon: HeartHandshake,
      title: t('site.home.highlights.personal.title'),
      text: t('site.home.highlights.personal.text')
    },
    {
      icon: Sparkles,
      title: t('site.home.highlights.relief.title'),
      text: t('site.home.highlights.relief.text')
    }
  ]
  const steps = [
    t('site.home.steps.first'),
    t('site.home.steps.second'),
    t('site.home.steps.third')
  ]

  return (
    <>
      <section className="pt-24 pb-16 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="w-full">
          <div className="relative w-full overflow-hidden shadow-2xl border-y border-white/20 dark:border-slate-700 min-h-[620px]">
            <img
              src={homepageImage}
              alt="Alltagshelfer Plus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-light/60 to-transparent dark:from-slate-950/90 dark:via-slate-950/70" />
            <div className="relative z-10 h-full px-8 md:px-14 py-20 flex items-center">
              <div className="max-w-2xl animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">{t('site.home.headline')}</h1>
                <p className="text-2xl md:text-3xl mb-8 text-brand-cream">{t('site.home.subheadline')}</p>
                <Link to="/kontakt" className="inline-block btn-primary px-8 py-4 rounded bg-gold-primary hover:bg-gold-dark text-navy-dark font-semibold">
                  {t('site.home.cta')}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative -mt-12 z-20 max-w-5xl mx-auto px-4">
            <div className="card p-6 md:p-8 border border-gold-primary/20 dark:border-slate-700">
              <h2 className="text-2xl font-semibold text-navy-dark dark:text-brand-cream mb-4">{t('site.home.termin.title')}</h2>
              <div className="grid md:grid-cols-4 gap-3">
                <input type="text" placeholder={t('site.home.termin.name')} className="px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
                <input type="tel" placeholder={t('site.home.termin.phone')} className="px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
                <input type="date" className="px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
                <Link to="/kontakt" className="btn-primary bg-gold-primary hover:bg-gold-dark text-navy-dark text-center flex items-center justify-center">
                  {t('site.home.termin.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <p className="max-w-4xl mx-auto text-xl leading-relaxed text-slate-800 dark:text-slate-100 text-center mb-12">
            {t('site.home.welcome')}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <article key={item.title} className="card p-6 border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-semibold text-navy-dark dark:text-brand-cream mb-3">{item.title}</h2>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream/40 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">{t('site.home.highlights.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="card p-6 border border-gold-primary/20 dark:border-slate-700">
                  <Icon className="w-10 h-10 text-navy-light dark:text-brand-cream mb-4" />
                  <h3 className="text-xl font-semibold text-navy-dark dark:text-brand-cream mb-2">{item.title}</h3>
                  <p className="text-slate-700 dark:text-slate-200">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center">{t('site.home.steps.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {steps.map((step, index) => (
              <article key={step} className="card p-6 border border-slate-100 dark:border-slate-700 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-primary text-navy-dark flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-slate-800 dark:text-slate-100 font-semibold">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-navy-dark to-navy-medium dark:from-slate-900 dark:to-navy-dark p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t('site.home.finalCta.title')}</h2>
              <p className="text-lg text-brand-cream">{t('site.home.finalCta.text')}</p>
            </div>
            <Link to="/kontakt" className="btn-primary bg-gold-primary hover:bg-gold-dark text-navy-dark inline-flex items-center gap-2">
              <CalendarCheck size={18} />
              {t('site.home.finalCta.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
