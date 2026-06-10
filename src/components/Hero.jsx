import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import homepageArt from '../homepage.svg'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-brand-cream/95 via-white to-brand-cream/40 dark:from-slate-950 dark:via-slate-900 dark:to-navy-dark text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold-primary/15 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-6 py-10 md:px-10 md:py-14 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,131,144,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(219,141,105,0.14),transparent_26%)] pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fadeIn">
              <h1 className="text-5xl font-bold mb-6 leading-tight text-navy-dark dark:text-brand-cream">
                {t('hero.title')}
              </h1>
              <p className="text-xl mb-8 text-slate-700 dark:text-slate-200">
                {t('hero.subtitle')}
              </p>
              <Link
                to="/login"
                className="inline-block btn-primary px-8 py-4 rounded bg-gold-primary hover:bg-gold-dark text-white font-bold transition transform hover:scale-105"
              >
                {t('hero.cta')}
              </Link>
            </div>

            {/* Homepage Image */}
            <div className="animate-slideUp">
              <div className="relative mx-auto w-full max-w-[640px] lg:max-w-[700px]">
                <div className="absolute inset-6 rounded-full bg-gold-primary/20 blur-3xl animate-pulseSoft" />
                <div className="absolute left-4 top-6 h-16 w-16 rounded-full border border-navy-light/20 animate-float-slow" />
                <div className="absolute right-8 bottom-8 h-20 w-20 rounded-full border border-gold-primary/25 animate-float" />
                <div className="relative animate-fadeScale">
                  <img
                    src={homepageArt}
                    alt={t('hero.title')}
                    className="w-full h-auto object-contain animate-float-slow drop-shadow-[0_30px_85px_rgba(16,55,64,0.25)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
