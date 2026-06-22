'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-32 pb-24 px-8 lg:px-16 bg-stone min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-charcoal mb-6 tracking-tight">
            {t('aboutPage.about')} <span className="bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal bg-clip-text text-transparent">Adess</span>
          </h1>
        </div>
        
        <div className="space-y-16">
          <div className="max-w-3xl mx-auto animate-fade-in delay-200">
            <p className="text-base text-charcoal/60 leading-relaxed font-light mb-8 transition-all duration-500 hover:text-charcoal/75 hover:scale-[1.01]">
              {t('aboutSection.p1')}
            </p>
            <p className="text-base text-charcoal/60 leading-relaxed font-light mb-8 transition-all duration-500 hover:text-charcoal/75 hover:scale-[1.01]">
              {t('aboutSection.p2')}
            </p>
            <p className="text-base text-charcoal/60 leading-relaxed font-light transition-all duration-500 hover:text-charcoal/75 hover:scale-[1.01]">
              {t('aboutSection.p3')}
            </p>
          </div>
          
          <div className="border-t border-charcoal/5 pt-16 animate-fade-in delay-400">
            <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mb-8 tracking-tight">
              {t('aboutPage.philosophy')}
            </h2>
            <p className="text-base text-charcoal/60 leading-relaxed font-light max-w-3xl transition-all duration-500 hover:text-charcoal/75">
              {t('aboutPage.philosophyText')}
            </p>
          </div>
          
          <div className="border-t border-charcoal/5 pt-16 animate-fade-in delay-600">
            <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mb-8 tracking-tight">
              {t('aboutPage.quality')}
            </h2>
            <p className="text-base text-charcoal/60 leading-relaxed font-light max-w-3xl transition-all duration-500 hover:text-charcoal/75">
              {t('aboutPage.qualityText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
