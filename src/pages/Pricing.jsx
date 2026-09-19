import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import usePageSEO from '../hooks/usePageSEO'

export default function Pricing() {
  const { t } = useTranslation()

  usePageSEO({
    de: { title: 'Preise & Finanzierung', description: 'Transparente Kosten und Abrechnung mit der Pflegekasse – bei anerkanntem Pflegegrad über den Entlastungsbetrag (§ 45b SGB XI), § 45a SGB XI oder Verhinderungspflege finanzierbar.' },
    en: { title: 'Pricing & Funding', description: 'Transparent costs and billing with care insurance – fundable via the relief amount (§ 45b SGB XI), § 45a SGB XI or respite care for recognised care levels.' }
  })

  const steps = [
    {
      title: t('site.pricing.steps.first.title'),
      text: t('site.pricing.steps.first.text')
    },
    {
      title: t('site.pricing.steps.plan.title'),
      text: t('site.pricing.steps.plan.text')
    },
    {
      title: t('site.pricing.steps.billing.title'),
      text: t('site.pricing.steps.billing.text')
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="section-title text-center">{t('site.pricing.headline')}</h1>
        <p className="text-center text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-12">
          {t('site.pricing.text')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((step) => (
            <article key={step.title} className="card p-6 border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-semibold text-navy-dark dark:text-brand-cream mb-3">{step.title}</h2>
              <p className="text-slate-600 dark:text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/kontakt" className="inline-block btn-primary bg-gold-primary hover:bg-gold-dark text-navy-dark">
            {t('site.pricing.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
