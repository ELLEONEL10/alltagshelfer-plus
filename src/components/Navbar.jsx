import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import logo from '../logo.svg'

export default function Navbar({ theme, onToggleTheme }) {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { to: '/', label: t('site.nav.home') },
    { to: '/ueber-uns', label: t('site.nav.about') },
    { to: '/leistungen', label: t('site.nav.services') },
    { to: '/preise-finanzierung', label: t('site.nav.pricing') },
    { to: '/karriere', label: t('site.nav.career') },
    { to: '/faq', label: t('site.nav.faq') },
    { to: '/kontakt', label: t('site.nav.contact') }
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-gold-primary/20 dark:border-slate-700 shadow-sm z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Alltagshelfer Plus Herz" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold-primary/40" />
          <span className="text-lg md:text-xl font-bold text-navy-dark dark:text-brand-cream">
            Alltagshelfer Plus Herz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-slate-700 dark:text-slate-200 hover:text-gold-primary transition text-sm font-medium">
              {link.label}
            </Link>
          ))}

          <div className="flex gap-1">
            {['de', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                className={`px-2 py-1 text-xs rounded ${i18n.language === lang ? 'bg-gold-primary text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100 hover:text-gold-primary transition"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 dark:text-slate-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gold-primary/20 dark:border-slate-700 p-4 space-y-4">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-200 hover:text-gold-primary">
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2">
            {['de', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                className={`px-2 py-1 text-xs rounded ${i18n.language === lang ? 'bg-gold-primary text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={onToggleTheme}
            className="w-full flex justify-center items-center gap-2 px-3 py-2 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? t('site.nav.lightMode') : t('site.nav.darkMode')}</span>
          </button>
        </div>
      )}
    </nav>
  )
}
