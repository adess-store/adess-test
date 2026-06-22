'use client'

import SupportForm from '@/components/SupportForm'
import { useLanguage } from '@/components/LanguageProvider'

export default function SupportPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-stone min-h-screen" style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div className="max-w-4xl mx-auto container-fluid px-4 sm:px-6">
        <div className="text-center mb-[clamp(3rem, 6vw, 4rem)] animate-fade-in-up">
          <h1 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-display font-light text-charcoal tracking-tight">
            {t('support.title')}
          </h1>
        </div>

        <div className="animate-fade-in delay-200">
          <SupportForm />
        </div>
      </div>
    </div>
  )
}
