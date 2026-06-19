import { collection, addDoc, getDocs, query, orderBy, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from './config.js'

export const saveAppointment = async (data) => {
  return await addDoc(collection(db, 'appointments'), {
    ...data,
    createdAt: new Date(),
    status: 'pending'
  })
}

export const getAppointments = async () => {
  const q = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const updateAppointmentStatus = async (appointmentId, status) => {
  const ref = doc(db, 'appointments', appointmentId)
  return await updateDoc(ref, { status })
}

export const deleteAppointment = async (appointmentId) => {
  const ref = doc(db, 'appointments', appointmentId)
  return await deleteDoc(ref)
}

const csvEscape = (value) => {
  const str = String(value ?? '')
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

// CSV Export functionality
export const appointmentsToCSV = (appointments) => {
  const headers = ['ID', 'Name', 'Phone', 'Email', 'Service', 'Date', 'Time', 'Message', 'Status', 'Created']
  const rows = appointments.map(a => [
    a.id,
    `${a.firstName} ${a.lastName}`,
    a.phone,
    a.email || '',
    a.service || '',
    a.date || '',
    a.time || '',
    a.message || '',
    a.status,
    a.createdAt ? new Date(a.createdAt.seconds * 1000).toLocaleString() : ''
  ])

  const csv = [
    headers.join(','),
    ...rows.map(r => r.map(csvEscape).join(','))
  ].join('\n')

  return csv
}

export const downloadCSV = (appointments, filename = 'appointments.csv') => {
  const csv = appointmentsToCSV(appointments)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', filename)
  link.click()
}
