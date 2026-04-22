import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="section-title text-center">{t('site.contact.headline')}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="card p-8 border border-slate-100 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-3">
              <strong>{t('site.contact.personLabel')}</strong> Kasem Alzuabi
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-3">
              <strong>{t('site.contact.phoneLabel')}</strong> 016095383001
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-3">
              <strong>{t('site.contact.addressLabel')}</strong> Gerlachstr.31, 14480 Potsdam
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              <strong>{t('site.contact.hoursLabel')}</strong> {t('site.contact.hours')}
            </p>
          </article>

          <form onSubmit={handleSubmit} className="card p-8 space-y-4 border border-slate-100 dark:border-slate-700">
            <input
              type="text"
              name="name"
              placeholder={t('site.forms.name')}
              required
              className="w-full px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
            />
            <input
              type="email"
              name="email"
              placeholder={t('site.forms.email')}
              required
              className="w-full px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('site.forms.phone')}
              required
              className="w-full px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
            />
            <textarea
              name="message"
              placeholder={t('site.forms.message')}
              rows="5"
              required
              className="w-full px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
            />
            <button type="submit" className="btn-primary w-full bg-gold-primary hover:bg-gold-dark text-navy-dark">
              {t('site.contact.cta')}
            </button>
            {sent && <p className="text-green-700 dark:text-green-300">{t('site.contact.success')}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
