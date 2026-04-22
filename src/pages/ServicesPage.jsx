import { BedSingle, CalendarCheck, ShoppingCart, Smile, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ServicesPage() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Users,
      title: t('site.services.items.daily.title'),
      text: t('site.services.items.daily.text')
    },
    {
      icon: ShoppingCart,
      title: t('site.services.items.household.title'),
      text: t('site.services.items.household.text')
    },
    {
      icon: Smile,
      title: t('site.services.items.leisure.title'),
      text: t('site.services.items.leisure.text')
    },
    {
      icon: CalendarCheck,
      title: t('site.services.items.organization.title'),
      text: t('site.services.items.organization.text')
    },
    {
      icon: BedSingle,
      title: t('site.services.items.aftercare.title'),
      text: t('site.services.items.aftercare.text')
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">{t('site.services.headline')}</h1>
        <p className="text-center text-lg text-slate-700 dark:text-slate-200 mb-12">
          {t('site.services.intro')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="card p-6 border border-slate-100 dark:border-slate-700">
                <Icon className="w-10 h-10 text-gold-primary mb-4" />
                <h2 className="text-2xl font-semibold text-navy-dark dark:text-brand-cream mb-3">{service.title}</h2>
                <p className="text-slate-600 dark:text-slate-300">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
