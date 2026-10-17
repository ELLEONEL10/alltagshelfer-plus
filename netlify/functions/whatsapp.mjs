const GRAPH_API = 'https://graph.facebook.com/v21.0'
const DEFAULT_RECIPIENT = '4915565666559'

const respond = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

const sanitizeNumber = (value) => String(value ?? '').replace(/\D/g, '')

const callGraph = async (path, token, payload) => {
  const response = await fetch(`${GRAPH_API}/${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))
  return { ok: response.ok, data }
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return respond(405, { error: 'Method not allowed' })
  }

  let payload = {}
  try {
    payload = JSON.parse(event.body || '{}')
  } catch {
    return respond(400, { error: 'Invalid JSON body' })
  }

  const text = String(payload.text || '').trim()
  if (!text) {
    return respond(400, { error: 'Missing text' })
  }

  const token = process.env.WHATSAPP_TOKEN
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const to = sanitizeNumber(payload.to || process.env.WHATSAPP_NOTIFY_NUMBER || DEFAULT_RECIPIENT)

  if (!token || !phoneId) {
    return respond(503, {
      error: 'WhatsApp API is not configured',
      hint: 'Set WHATSAPP_TOKEN and WHATSAPP_PHONE_NUMBER_ID in the Netlify environment variables.',
    })
  }

  if (!to) {
    return respond(400, { error: 'Missing recipient number' })
  }

  let result = await callGraph(
    `${phoneId}/messages`,
    token,
    {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'text',
      text: { preview_url: false, body: text },
    }
  )

  if (!result.ok) {
    const templateName = process.env.WHATSAPP_TEMPLATE_NAME
    if (templateName) {
      result = await callGraph(`${phoneId}/messages`, token, {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to,
        type: 'template',
        template: {
          name: templateName,
          language: { code: process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'de' },
          components: [{ type: 'body', parameters: [{ type: 'text', text }] }],
        },
      })
    }
  }

  if (!result.ok) {
    return respond(502, {
      error: result.data?.error?.message || 'WhatsApp API request failed',
      code: result.data?.error?.code,
    })
  }

  return respond(200, { ok: true, messageId: result.data?.messages?.[0]?.id || null })
}
