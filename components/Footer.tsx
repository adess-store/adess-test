'use client'

import Link from 'next/link'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { useLanguage } from '@/components/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-stone border-t border-charcoal/8 text-charcoal" style={{ paddingTop: 'clamp(3rem, 6vw, 6rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div className="max-w-[1920px] mx-auto container-fluid px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          <div className="animate-fade-in-up">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-fluid-lg sm:text-fluid-xl font-display font-light tracking-wider">Adess</h3>
              <p className="text-fluid-xs text-charcoal/45 tracking-[0.15em] uppercase">EST 2025</p>
            </div>
            <p className="text-fluid-xs sm:text-fluid-sm text-charcoal/60 font-light leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h4 className="font-display font-light text-fluid-xs sm:text-fluid-sm mb-6 sm:mb-8 text-charcoal uppercase tracking-wider">{t('footer.shop')}</h4>
            <ul className="space-y-3 sm:space-y-4 text-fluid-xs sm:text-fluid-sm">
              <li>
                <Link href="/products" className="text-charcoal/55 hover:text-charcoal transition-all duration-500 font-light hover:translate-x-1 inline-block">
                  {t('footer.allProducts')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=classic" className="text-charcoal/55 hover:text-charcoal transition-all duration-500 font-light hover:translate-x-1 inline-block">
                  {t('footer.classicCollection')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=casual" className="text-charcoal/55 hover:text-charcoal transition-all duration-500 font-light hover:translate-x-1 inline-block">
                  {t('footer.casualCollection')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-400">
            <h4 className="font-display font-light text-fluid-xs sm:text-fluid-sm mb-6 sm:mb-8 text-charcoal uppercase tracking-wider">{t('footer.company')}</h4>
            <ul className="space-y-3 sm:space-y-4 text-fluid-xs sm:text-fluid-sm">
              <li>
                <Link href="/about" className="text-charcoal/55 hover:text-charcoal transition-all duration-500 font-light hover:translate-x-1 inline-block">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal/55 hover:text-charcoal transition-all duration-500 font-light hover:translate-x-1 inline-block">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-charcoal/55 hover:text-charcoal transition-all duration-500 font-light hover:translate-x-1 inline-block">
                  {t('footer.shipping')}
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-charcoal/55 hover:text-charcoal transition-all duration-500 font-light hover:translate-x-1 inline-block">
                  {t('footer.returns')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-600">
            <h4 className="font-display font-light text-fluid-xs sm:text-fluid-sm mb-6 sm:mb-8 text-charcoal uppercase tracking-wider">{t('footer.connect')}</h4>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-charcoal/45 hover:text-charcoal transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-charcoal/45 hover:text-charcoal transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <FiFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-charcoal/45 hover:text-charcoal transition-all duration-300 hover:scale-110 hover:rotate-3" aria-label="Twitter">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475 4.92 4.92 0 002.19 4.096 4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal/8 pt-8 sm:pt-12 text-center animate-fade-in delay-800">
          <p className="text-fluid-xs text-charcoal/45 font-light tracking-wider">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
