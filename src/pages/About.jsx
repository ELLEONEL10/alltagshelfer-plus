import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="section-title text-center">{t('site.about.headline')}</h1>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200 text-center">
          {t('site.about.text')}
        </p>
      </div>
    </section>
  )
}
