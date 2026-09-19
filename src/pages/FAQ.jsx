import { useTranslation } from 'react-i18next'
import usePageSEO from '../hooks/usePageSEO'

export default function FAQ() {
  const { t } = useTranslation()

  usePageSEO({
    de: { title: 'Häufige Fragen (FAQ)', description: 'Häufig gestellte Fragen zu Startgeschwindigkeit der Betreuung und Ihrer festen Bezugsperson – kurz und klar beantwortet.' },
    en: { title: 'Frequently Asked Questions (FAQ)', description: 'Frequently asked questions about how quickly care can start and your dedicated contact person – answered clearly and concisely.' }
  })

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="section-title text-center">{t('site.faq.headline')}</h1>
        <div className="space-y-6">
          <article className="card p-6 border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-navy-dark dark:text-brand-cream mb-3">
              {t('site.faq.q1')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              {t('site.faq.a1')}
            </p>
          </article>
          <article className="card p-6 border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-navy-dark dark:text-brand-cream mb-3">
              {t('site.faq.q2')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              {t('site.faq.a2')}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
