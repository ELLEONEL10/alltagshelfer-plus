import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import de from './de.json'
import en from './en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en }
    },
    supportedLngs: ['de', 'en'],
    nonExplicitSupportedLngs: true,
    fallbackLng: 'de',
    defaultNS: 'translation',
    interpolation: { escapeValue: false }
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = 'ltr'
})

export default i18n
