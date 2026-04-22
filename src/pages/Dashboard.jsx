import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../firebase/auth'
import { getAppointments, updateAppointmentStatus, downloadCSV } from '../firebase/appointments'
import { Loader, Download, LogOut } from 'lucide-react'

export default function Dashboard() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      navigate('/login')
      return
    }
    setUser(currentUser)
    loadAppointments()
  }, [navigate])

  const loadAppointments = async () => {
    try {
      setLoading(true)
      const data = await getAppointments()
      setAppointments(data)
    } catch (err) {
      console.error('Error loading appointments:', err)
      setError('Error loading appointments')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      await updateAppointmentStatus(appointmentId, newStatus)
      loadAppointments()
    } catch (err) {
      console.error('Error updating appointment:', err)
      setError('Error updating appointment')
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (err) {
      console.error('Error logging out:', err)
    }
  }

  const handleExportCSV = () => {
    try {
      downloadCSV(appointments)
    } catch (err) {
      console.error('Error exporting CSV:', err)
      setError('Error exporting CSV')
    }
  }

  if (loading) {
    return (
      <div className="pt-32 pb-16 min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-gold-primary" />
      </div>
    )
  }

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-navy-dark dark:text-brand-cream">
              {t('dashboard.title')}
            </h1>
            <p className="text-gray-600 dark:text-slate-300 mt-2">
              Welcome, {user?.displayName || user?.email}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition"
            >
              <Download size={18} />
              {t('dashboard.exportCSV')}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
            >
              <LogOut size={18} />
              {t('nav.logout')}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 p-4 rounded mb-6">
            {error}
          </div>
        )}

        {/* Appointments Table */}
        {appointments.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 p-8 rounded shadow text-center text-gray-600 dark:text-slate-300 border border-transparent dark:border-slate-700">
            {t('dashboard.noAppointments')}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded shadow overflow-x-auto border border-transparent dark:border-slate-700">
            <table className="w-full">
              <thead className="bg-navy-dark text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Phone</th>
                  <th className="px-6 py-3 text-left">Service</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="border-t border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/40 text-slate-800 dark:text-slate-100">
                    <td className="px-6 py-4">
                      {appointment.firstName} {appointment.lastName}
                    </td>
                    <td className="px-6 py-4">{appointment.email}</td>
                    <td className="px-6 py-4">{appointment.phone}</td>
                    <td className="px-6 py-4">{appointment.service}</td>
                    <td className="px-6 py-4">{appointment.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        appointment.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={appointment.status}
                        onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                        className="px-3 py-1 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded text-sm"
                      >
                        <option value="pending">{t('dashboard.pending')}</option>
                        <option value="confirmed">{t('dashboard.confirmed')}</option>
                        <option value="completed">{t('dashboard.completed')}</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
