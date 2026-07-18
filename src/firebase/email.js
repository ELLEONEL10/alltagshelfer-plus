const submitToNetlify = async (formName, data) => {
  const formData = new URLSearchParams()
  formData.append('form-name', formName)
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value ?? '')
  })

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString(),
  })

  if (!response.ok) throw new Error('Submission failed')
}

export const sendContactEmail = async (data) => {
  return submitToNetlify('contact-form', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
  })
}

export const sendAppointmentEmail = async (data) => {
  return submitToNetlify('appointment-form', {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    service: data.service,
    date: data.date,
    time: data.time,
    message: data.message || '',
  })
}
