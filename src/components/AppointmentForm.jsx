import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { saveAppointment } from '../firebase/appointments'
import { Loader } from 'lucide-react'

export default function AppointmentForm() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await saveAppointment(formData)
      setMessage(t('form.success'))
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error)
      setMessage(t('form.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy-dark dark:text-brand-cream">
          {t('form.title')}
        </h2>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg space-y-6 border border-transparent dark:border-slate-700">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder={t('form.firstName')}
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
            />
            <input
              type="text"
              name="lastName"
              placeholder={t('form.lastName')}
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder={t('form.email')}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('form.phone')}
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
            >
              <option value="">{t('form.service')}</option>
              <option value="housekeeping">{t('services.housekeeping.name')}</option>
              <option value="childcare">{t('services.childcare.name')}</option>
              <option value="eldercare">{t('services.eldercare.name')}</option>
              <option value="shopping">{t('services.shopping.name')}</option>
              <option value="garden">{t('services.garden.name')}</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
            />
          </div>

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
          />

          <textarea
            name="message"
            placeholder={t('form.message')}
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:border-gold-primary"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary px-6 py-3 rounded bg-gold-primary hover:bg-gold-dark text-white font-bold transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading && <Loader className="w-5 h-5 animate-spin" />}
            {loading ? t('form.loading') : t('form.submit')}
          </button>

          {message && (
            <p className={`text-center font-semibold ${message.includes('Thank') || message.includes('Danke') || message.includes('شكراً') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
