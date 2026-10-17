export const BUSINESS_WHATSAPP_NUMBER = '4915565666559'

const ENDPOINT = '/.netlify/functions/whatsapp'

export const formatWhatsAppMessage = ({ title, lines = [] }) => {
  const body = lines
    .map((line) => `${line.label}: ${String(line.value ?? '').trim()}`)
    .filter((entry) => !entry.endsWith(':'))
    .join('\n')

  return [title, body].filter(Boolean).join('\n')
}

export const buildWhatsAppLink = (text) =>
  `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const sendWhatsAppMessage = async ({ title, lines }) => {
  const text = formatWhatsAppMessage({ title, lines })
  const link = buildWhatsAppLink(text)

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: BUSINESS_WHATSAPP_NUMBER, text }),
    })

    if (!response.ok) throw new Error(`WhatsApp notification failed with status ${response.status}`)

    return { ok: true, link, text }
  } catch (error) {
    console.error('WhatsApp notification failed:', error)
    return { ok: false, link, text }
  }
}
