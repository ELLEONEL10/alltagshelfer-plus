import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'

export default function Team() {
  const { t } = useTranslation()

  const team = [
    {
      name: 'Maria Schmidt',
      role: 'Gründerin & Geschäftsführerin',
      bio: 'Über 15 Jahre Erfahrung in der Haushaltsdienstleistung',
      email: 'maria@alltagshelfer-plus.de',
      image: 'https://via.placeholder.com/300x300?text=Maria+Schmidt'
    }
  ]

  return (
    <section id="team" className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-navy-dark dark:text-brand-cream">
          {t('team.title')}
        </h2>
        <p className="text-center text-gray-600 dark:text-slate-300 mb-12 text-lg">
          {t('team.description')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.email} className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-transparent dark:border-slate-700">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-slate-300 mb-4 text-sm">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-navy-dark text-white rounded hover:bg-navy-medium transition"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
