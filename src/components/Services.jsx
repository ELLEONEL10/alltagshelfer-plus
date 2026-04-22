import { useTranslation } from 'react-i18next'
import { Briefcase, Users, Heart, ShoppingCart, Leaf } from 'lucide-react'

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Briefcase,
      key: 'housekeeping',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      key: 'childcare',
      color: 'text-pink-500'
    },
    {
      icon: Heart,
      key: 'eldercare',
      color: 'text-red-500'
    },
    {
      icon: ShoppingCart,
      key: 'shopping',
      color: 'text-green-500'
    },
    {
      icon: Leaf,
      key: 'garden',
      color: 'text-emerald-500'
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-navy-dark dark:text-brand-cream">
          {t('services.title')}
        </h2>
        <p className="text-center text-gray-600 dark:text-slate-300 mb-12 text-lg">
          {t('services.description')}
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.key}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-xl transition transform hover:scale-105 text-center border border-transparent dark:border-slate-700"
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${service.color}`} />
                <h3 className="font-bold text-lg mb-2 text-navy-dark dark:text-brand-cream">
                  {t(`services.${service.key}.name`)}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
