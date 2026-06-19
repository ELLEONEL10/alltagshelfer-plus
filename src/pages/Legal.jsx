import { useTranslation } from 'react-i18next'

export default function Legal() {
  const { t } = useTranslation()
  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        <article className="card p-8 border border-slate-100 dark:border-slate-700">
          <h1 className="section-title">{t('legalPage.imprintTitle')}</h1>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {t('legalPage.imprintSubtitle')}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>Alltagshelfer Plus Herz</strong><br />
            Gerlachstr. 31<br />
            14480 Potsdam
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.representedBy')}</strong><br />
            Kasem Alzuabi
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.contact')}</strong><br />
            {t('legalPage.phone')} 016095383001<br />
            {t('legalPage.email')} info@alltagshelfer-plus.de
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.vatId')}</strong><br />
            {t('legalPage.vatIdText')}<br />
            [Steuer-ID]
          </p>
        </article>

        <article className="card p-8 border border-slate-100 dark:border-slate-700">
          <h2 className="section-title">{t('legalPage.privacyTitle')}</h2>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {t('legalPage.privacyIntro')}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.section1Title')}</strong><br />
            Alltagshelfer Plus Herz<br />
            Gerlachstr. 31<br />
            14480 Potsdam<br />
            {t('legalPage.ceo')} Kasem Alzuabi<br />
            {t('legalPage.email')} info@alltagshelfer-plus.de
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.section2Title')}</strong><br />
            {t('legalPage.section2Text')}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.section3Title')}</strong><br />
            {t('legalPage.section3Text')}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.section4Title')}</strong><br />
            {t('legalPage.section4Text')}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.section5Title')}</strong><br />
            {t('legalPage.section5Text')}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.section6Title')}</strong><br />
            {t('legalPage.section6Text')}
          </p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-4">
            <strong>{t('legalPage.section7Title')}</strong><br />
            {t('legalPage.section7Text')}
          </p>
        </article>
      </div>
    </section>
  )
}
