import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()

  const steps = ['step1', 'step2', 'step3']

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy-dark dark:text-brand-cream">
          {t('howitworks.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-dark dark:text-brand-cream">
                {t(`howitworks.${step}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-slate-300">
                {t(`howitworks.${step}.description`)}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-24 transform translate-x-1/2">
                  <div className="w-8 h-1 bg-gold-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
