import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import logoIco from './logo.ico'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const About = lazy(() => import('./pages/About'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Career = lazy(() => import('./pages/Career'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))

function RouteLoader() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="card p-6 border border-slate-100 dark:border-slate-700 animate-fadeIn">
        <p className="text-slate-700 dark:text-slate-200">Inhalt wird geladen...</p>
      </div>
    </div>
  )
}

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
    document.documentElement.dir = 'ltr'
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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-brand-cream/50 via-white to-brand-cream/20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-grow pt-20">
          <Suspense fallback={<RouteLoader />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
