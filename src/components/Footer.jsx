import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Mail, Phone } from 'lucide-react'
import logo from '../logo.svg'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark dark:bg-slate-950 text-white py-12 border-t border-gold-primary/20 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Alltagshelfer Plus Herz" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold-primary/40" />
              <h3 className="text-2xl font-bold">Alltagshelfer Plus Herz</h3>
            </div>
            <p className="text-gray-300">{t('site.home.subheadline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('site.footer.navigation')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-gold-primary transition">
                  {t('site.nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="hover:text-gold-primary transition">{t('site.nav.services')}</Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-gold-primary transition">{t('site.nav.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('site.footer.legal')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/impressum-datenschutz" className="hover:text-gold-primary transition">{t('site.footer.privacy')}</Link>
              </li>
              <li>
                <Link to="/impressum-datenschutz" className="hover:text-gold-primary transition">{t('site.footer.imprint')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('site.nav.contact')}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-2">
                <Phone size={18} />
                016095383001
              </li>
              <li className="flex gap-2">
                <Mail size={18} />
                info@alltagshelfer-plus.de
              </li>
              <li className="flex gap-2">
                <MapPin size={18} />
                Gerlachstr.31, 14480 Potsdam
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              {t('site.footer.copyright', { year: currentYear })}
            </p>
        </div>
      </div>
    </footer>
  )
}
