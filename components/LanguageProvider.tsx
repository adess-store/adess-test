'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n/translations'
import { translate } from '@/lib/i18n/translations'

type LanguageContextValue = {
  locale: Locale
  toggleLocale: () => void
  t: (key: string, vars?: Record<string, string | number>) => string
  isArabic: boolean
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'adess-locale'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'ar' || stored === 'en') {
      setLocale(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const toggleLocale = () => {
    setLocale((current) => (current === 'en' ? 'ar' : 'en'))
  }

  const t = (key: string, vars?: Record<string, string | number>) => translate(locale, key, vars)

  const value: LanguageContextValue = {
    locale,
    toggleLocale,
    t,
    isArabic: locale === 'ar',
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
