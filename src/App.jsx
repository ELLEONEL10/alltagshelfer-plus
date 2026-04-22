import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Pricing from './pages/Pricing'
import Career from './pages/Career'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import logoIco from './logo.ico'

function App() {
  const { i18n } = useTranslation()
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const lang = i18n.language || 'de'
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
    document.documentElement.style.colorScheme = theme

    let favicon = document.querySelector('link[rel="icon"]')
    if (!favicon) {
      favicon = document.createElement('link')
      favicon.setAttribute('rel', 'icon')
      document.head.appendChild(favicon)
    }
    favicon.setAttribute('href', logoIco)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-cream/20 dark:bg-slate-950 transition-colors duration-300">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/leistungen" element={<ServicesPage />} />
            <Route path="/preise-finanzierung" element={<Pricing />} />
            <Route path="/karriere" element={<Career />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum-datenschutz" element={<Legal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
