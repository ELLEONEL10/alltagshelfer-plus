import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import homepageImage from '../Homepage.png'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy-light to-navy-medium dark:from-slate-950 dark:via-slate-900 dark:to-navy-dark text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fadeIn">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              {t('hero.subtitle')}
            </p>
            <Link
              to="/login"
              className="inline-block btn-primary px-8 py-4 rounded bg-gold-primary hover:bg-gold-dark text-navy-dark font-bold transition transform hover:scale-105"
            >
              {t('hero.cta')}
            </Link>
          </div>

          {/* Homepage Image */}
          <div className="animate-slideUp">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-700">
              <img
                src={homepageImage}
                alt={t('hero.title')}
                className="w-full h-[430px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark/55 via-transparent to-gold-primary/20 dark:from-slate-950/75 dark:to-gold-dark/30" />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-navy-dark/80 to-transparent dark:from-slate-950/90" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-cream/90 mb-2">
                  {t('logo.name')}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
