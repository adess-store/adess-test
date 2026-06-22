'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiShoppingBag, FiSearch } from 'react-icons/fi'
import { useCart } from '@/components/CartProvider'
import { useLanguage } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-xl border-b border-cream/10 shadow-sm animate-fade-in">
      <div className="max-w-[1920px] mx-auto container-fluid">
        <div className="flex items-center justify-between" style={{ height: 'clamp(3.5rem, 8vw, 6rem)' }}>
          {/* Logo */}
          <Link href="/" className="group transition-all duration-300 hover:scale-105 animate-fade-in-left">
            <h1 className="text-fluid-2xl font-seasons font-semibold text-charcoal tracking-wide">Adess</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-fluid-lg">
            <Link href="/" className="text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-500 font-semibold tracking-wider uppercase relative group animate-fade-in delay-200">
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal/30 transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <Link href="/products" className="text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-500 font-semibold tracking-wider uppercase relative group animate-fade-in delay-400">
              {t('nav.browse')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal/30 transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <Link href="/support" className="text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-500 font-semibold tracking-wider uppercase relative group animate-fade-in delay-600">
              {t('nav.support')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal/30 transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <Link href="/review" className="text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-500 font-semibold tracking-wider uppercase relative group animate-fade-in delay-800">
              {t('nav.review')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal/30 transition-all duration-700 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-fluid-md">
            <LanguageToggle />
            <button className="text-charcoal/65 hover:text-charcoal transition-all duration-300 hover:scale-110 p-[clamp(0.5rem,1vw,0.75rem)] rounded-full hover:bg-charcoal/8" aria-label={t('nav.search')}>
              <FiSearch className="w-[clamp(0.875rem,1.5vw,1rem)] h-[clamp(0.875rem,1.5vw,1rem)]" />
            </button>
            <Link
              href="/cart"
              className="text-charcoal/65 hover:text-charcoal transition-all duration-300 hover:scale-110 p-[clamp(0.5rem,1vw,0.75rem)] rounded-full hover:bg-charcoal/8 relative flex items-center justify-center"
            >
              <FiShoppingBag className="w-[clamp(0.875rem,1.5vw,1rem)] h-[clamp(0.875rem,1.5vw,1rem)]" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[1.1rem] h-[1.1rem] bg-charcoal text-stone text-[0.6rem] rounded-full flex items-center justify-center font-semibold tracking-tight">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-charcoal/65 hover:text-charcoal transition-all duration-300 p-[clamp(0.5rem,1vw,0.75rem)] rounded-full hover:bg-charcoal/8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)]" /> : <FiMenu className="w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-cream/10 bg-dark backdrop-blur-md animate-slide-in">
          <div className="container-fluid py-[clamp(1.5rem,3vw,2rem)] space-y-[clamp(1.25rem,2.5vw,1.5rem)]">
            <Link
              href="/"
              className="block text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-300 font-semibold tracking-wider uppercase py-2 animate-fade-in-left delay-200 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/products"
              className="block text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-300 font-semibold tracking-wider uppercase py-2 animate-fade-in-left delay-400 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.browse')}
            </Link>
            <Link
              href="/support"
              className="block text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-300 font-semibold tracking-wider uppercase py-2 animate-fade-in-left delay-600 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.support')}
            </Link>
            <Link
              href="/review"
              className="block text-fluid-sm text-charcoal/75 hover:text-charcoal transition-all duration-300 font-semibold tracking-wider uppercase py-2 animate-fade-in-left delay-800 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.review')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

