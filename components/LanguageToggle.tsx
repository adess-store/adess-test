'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="text-charcoal/65 hover:text-charcoal transition-all duration-300 hover:scale-105 px-[clamp(0.5rem,1vw,0.65rem)] py-[clamp(0.35rem,0.8vw,0.45rem)] rounded-full border border-charcoal/20 hover:border-charcoal/35 hover:bg-charcoal/8 text-fluid-xs font-semibold tracking-wide min-w-[2.5rem]"
      aria-label={locale === 'en' ? t('nav.switchToArabic') : t('nav.switchToEnglish')}
    >
      {locale === 'en' ? 'عربي' : 'EN'}
    </button>
  )
}
