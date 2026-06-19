import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../firebase/auth'

export default function Login() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError('')
    try {
      const result = await signInWithGoogle()
      console.log('User signed in:', result.user)
      navigate('/dashboard')
    } catch (err) {
      console.error('Error:', err)
      setError(t('login.loginError'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-navy-dark via-navy-light to-navy-medium dark:from-slate-950 dark:via-slate-900 dark:to-navy-dark text-white transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white dark:bg-slate-800 text-navy-dark dark:text-brand-cream p-8 rounded-lg shadow-xl border border-transparent dark:border-slate-700">
          <h1 className="text-3xl font-bold text-center mb-8">
            {t('login.title')}
          </h1>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full px-6 py-3 rounded bg-gold-primary hover:bg-gold-dark text-white font-bold transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? t('login.loading') : t('login.googleLogin')}
          </button>

          {error && (
            <p className="text-red-600 text-center mt-4">
              {error}
            </p>
          )}

          <p className="text-center text-gray-600 dark:text-slate-300 mt-4 text-sm">
            {t('logo.tagline')}
          </p>
        </div>
      </div>
    </div>
  )
}
