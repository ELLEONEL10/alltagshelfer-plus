import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const SITE_NAME = 'Alltagshelfer Plus Herz'

export default function usePageSEO({ de, en }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'de'
    const seo = lang === 'en' ? en : de

    document.title = `${seo.title} — ${SITE_NAME}`

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', seo.description)
  }, [i18n.language, de, en])
}