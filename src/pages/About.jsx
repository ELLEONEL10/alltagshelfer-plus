import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="section-title text-center">{t('aboutPage.headline')}</h1>

        <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-200">
          <section className="rounded-3xl border border-gold-primary/15 dark:border-slate-700 bg-gradient-to-br from-brand-cream/25 via-white to-brand-cream/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 md:p-8 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark dark:text-brand-cream mb-3">
              {t('aboutPage.headline')}
            </h2>

            <p className="text-lg leading-relaxed">
              {t('aboutPage.subheadline')}
            </p>

            <p className="text-lg leading-relaxed mt-4">
              {t('aboutPage.intro1')}
            </p>

            <p className="text-lg leading-relaxed mt-4">
              {t('aboutPage.intro2')}
            </p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6">
              <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-3">🛡️ {t('aboutPage.medicalTitle')}</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">{t('aboutPage.medical1Title')}</p>
                    <p className="text-sm">{t('aboutPage.medical1Text')}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">{t('aboutPage.medical2Title')}</p>
                    <p className="text-sm">{t('aboutPage.medical2Text')}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">{t('aboutPage.medical3Title')}</p>
                    <p className="text-sm">{t('aboutPage.medical3Text')}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6">
              <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-3">🤝 {t('aboutPage.pedagogyTitle')}</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">{t('aboutPage.pedagogy1Title')}</p>
                    <p className="text-sm">{t('aboutPage.pedagogy1Text')}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">{t('aboutPage.pedagogy2Title')}</p>
                    <p className="text-sm">{t('aboutPage.pedagogy2Text')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-3">📊 {t('aboutPage.strategyTitle')}</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                <p>
                  <span className="font-semibold">{t('aboutPage.strategyText')}</span>
                </p>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-gold-primary/15 dark:border-slate-700 bg-gradient-to-br from-brand-cream/25 via-white to-brand-cream/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-2">{t('aboutPage.promiseTitle')}</h3>
            <p className="text-lg leading-relaxed">
              {t('aboutPage.promiseText')}
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

