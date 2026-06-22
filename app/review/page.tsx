'use client'

import ReviewForm from '@/components/ReviewForm'
import { useLanguage } from '@/components/LanguageProvider'

export default function ReviewPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-stone min-h-screen" style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div className="max-w-4xl mx-auto container-fluid px-4 sm:px-6">
        <div className="text-center mb-[clamp(3rem, 6vw, 4rem)] animate-fade-in-up">
          <h1 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-display font-light text-charcoal tracking-tight">
            {t('review.title')}
          </h1>
        </div>

        <div className="animate-fade-in delay-200">
          <ReviewForm />
        </div>
      </div>
    </div>
  )
}
