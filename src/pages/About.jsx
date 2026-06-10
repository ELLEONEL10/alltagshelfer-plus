import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="section-title text-center">{t('site.about.headline')}</h1>

        <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-200">
          <section className="rounded-3xl border border-gold-primary/15 dark:border-slate-700 bg-gradient-to-br from-brand-cream/25 via-white to-brand-cream/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 md:p-8 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark dark:text-brand-cream mb-3">
              Expertise in Notfallmedizin, Prävention & qualifizierter Begleitung
            </h2>

            <p className="text-lg leading-relaxed">
              Mein Name ist Kasem Alzuabi. Als freiberuflicher Spezialist auf Honorarbasis biete ich Unternehmen und anspruchsvollen Privatkunden eine Symbiose aus medizinischer Handlungssicherheit, pädagogischer Vermittlungskompetenz und kaufmännischer Zuverlässigkeit.
            </p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6">
              <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-3">🛡️ Medizinische Fachautorität</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Rettungssanitäter</p>
                    <p className="text-sm">Über 6 Jahre Erfahrung in der aktiven Notfallrettung garantieren höchste Souveränität in kritischen Situationen.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Zertifizierter Erste-Hilfe-Ausbilder</p>
                    <p className="text-sm">Fachliche Autorität in der Wissensvermittlung und Implementierung betrieblicher Notfallstrukturen.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Pharmazeutische Sachkunde</p>
                    <p className="text-sm">Fundierte Expertise für freiverkäufliche Arzneimittel zur qualifizierten Beratung in der Gesundheitsvorsorge.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6">
              <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-3">🤝 Pädagogik & Soziale Verantwortung</h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Pädagogische Führungskompetenz (Juleica)</p>
                    <p className="text-sm">Geprüfte Qualifikation in Gruppendynamik und Konfliktmanagement für eine verantwortungsbewusste Begleitung auf Augenhöhe.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Zertifizierter Alltagsbegleiter (§ 45a SGB XI)</p>
                    <p className="text-sm">Professionelle Unterstützung zur Förderung der Lebensqualität unter Einhaltung höchster Qualitätsstandards.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-3">📊 Strategische Professionalität</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold-primary shrink-0" />
                <p>
                  <span className="font-semibold">Kaufmännische Fundierung</span>: Garant für strukturierte Projektabwicklung, transparente Honorargestaltung und absolute administrative Integrität.
                </p>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-gold-primary/15 dark:border-slate-700 bg-gradient-to-br from-brand-cream/25 via-white to-brand-cream/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy-dark dark:text-brand-cream mb-2">Mein Versprechen:</h3>
            <p className="text-lg leading-relaxed">
              Ich biete Ihnen keine Standardlösungen, sondern eine auf Ihre Bedürfnisse zugeschnittene Expertise. Ob als medizinischer Schutzschild für Ihr Event oder als Ausbilder für Ihr Team – ich stehe für Qualität, Erfahrung und Verantwortungsbewusstsein.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

