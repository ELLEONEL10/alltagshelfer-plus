const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/info@alltagshelfer-ph.de'

const buildContactHTML = (data) => `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
  <div style="background:#2d3a4e;padding:24px 32px;">
    <h1 style="color:#dbb46d;margin:0;font-size:22px;">Alltagshelfer Plus Herz</h1>
    <p style="color:#cbd5e1;margin:4px 0 0;font-size:13px;">Neue Nachricht vom Kontaktformular</p>
  </div>
  <div style="padding:28px 32px;background:#ffffff;">
    <table style="width:100%;border-collapse:collapse;font-size:15px;color:#334155;">
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;width:130px;">Name</td>
        <td style="padding:10px 0;">${data.name || '-'}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;">E-Mail</td>
        <td style="padding:10px 0;"><a href="mailto:${data.email}" style="color:#2d8390;">${data.email || '-'}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;">Telefon</td>
        <td style="padding:10px 0;"><a href="tel:${data.phone}" style="color:#2d8390;">${data.phone || '-'}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;vertical-align:top;">Nachricht</td>
        <td style="padding:10px 0;">${(data.message || '-').replace(/\n/g, '<br/>')}</td>
      </tr>
    </table>
  </div>
  <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
    <p style="margin:0;font-size:12px;color:#94a3b8;">Gesendet via alltagshelfer-plus.de</p>
  </div>
</div>
`

const buildAppointmentHTML = (data) => `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
  <div style="background:#2d3a4e;padding:24px 32px;">
    <h1 style="color:#dbb46d;margin:0;font-size:22px;">Alltagshelfer Plus Herz</h1>
    <p style="color:#cbd5e1;margin:4px 0 0;font-size:13px;">Neue Terminanfrage</p>
  </div>
  <div style="padding:28px 32px;background:#ffffff;">
    <table style="width:100%;border-collapse:collapse;font-size:15px;color:#334155;">
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;width:140px;">Name</td>
        <td style="padding:10px 0;">${data.firstName || ''} ${data.lastName || ''}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;">Telefon</td>
        <td style="padding:10px 0;"><a href="tel:${data.phone}" style="color:#2d8390;">${data.phone || '-'}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;">Leistung</td>
        <td style="padding:10px 0;">${data.service || '-'}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;">Datum</td>
        <td style="padding:10px 0;">${data.date || '-'}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;">Uhrzeit</td>
        <td style="padding:10px 0;">${data.time || '-'}</td>
      </tr>
      ${data.message ? `
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#2d3a4e;vertical-align:top;">Nachricht</td>
        <td style="padding:10px 0;">${data.message.replace(/\n/g, '<br/>')}</td>
      </tr>` : ''}
    </table>
  </div>
  <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
    <p style="margin:0;font-size:12px;color:#94a3b8;">Gesendet via alltagshelfer-plus.de</p>
  </div>
</div>
`

const fetchWithTimeout = (url, options, timeoutMs = 15000) => {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(timer))
}

const sendEmail = async (payload) => {
  const response = await fetchWithTimeout(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error('Email sending failed')
}

export const sendContactEmail = async (data) => {
  return sendEmail({
    _subject: `Neue Nachricht von ${data.name}`,
    _template: 'box',
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    _html: buildContactHTML(data),
  })
}

export const sendAppointmentEmail = async (data) => {
  return sendEmail({
    _subject: `Neue Terminanfrage: ${data.firstName} ${data.lastName} – ${data.service}`,
    _template: 'box',
    name: `${data.firstName} ${data.lastName}`,
    phone: data.phone,
    service: data.service,
    date: data.date,
    time: data.time,
    message: data.message || '',
    _html: buildAppointmentHTML(data),
  })
}
