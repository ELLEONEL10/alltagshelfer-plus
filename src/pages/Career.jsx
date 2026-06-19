import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { saveApplication } from '../firebase/career'

export default function Career() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    const form = event.target
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      cvFile: form.cv.files[0] || null,
    }
    try {
      await saveApplication(data)
      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error('Error saving application:', err)
      setError(t('homePage.booking.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="section-title text-center">{t('site.career.headline')}</h1>
        <p className="text-center text-lg text-slate-700 dark:text-slate-200 mb-8">
          {t('site.career.text')}
        </p>

        <ul className="space-y-3 mb-10 text-slate-700 dark:text-slate-200 text-lg">
          <li>• {t('site.career.benefits.flexible')}</li>
          <li>• {t('site.career.benefits.fair')}</li>
          <li>• {t('site.career.benefits.training')}</li>
          <li>• {t('site.career.benefits.environment')}</li>
        </ul>

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
          <div>
            <label className="block mb-2 text-slate-700 dark:text-slate-200">{t('site.career.upload')}</label>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              required
              className="w-full px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full bg-gold-primary hover:bg-gold-dark text-navy-dark disabled:opacity-50">
            {loading ? t('homePage.booking.sending') : t('site.career.submit')}
          </button>
          {submitted && <p className="text-green-700 dark:text-green-300">{t('site.career.success')}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </section>
  )
}
