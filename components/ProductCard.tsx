'use client'

import Link from 'next/link'
import { Product } from '@/lib/products'
import { useLanguage } from '@/components/LanguageProvider'
import { getLocalizedProduct } from '@/lib/i18n/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { locale } = useLanguage()
  const localized = getLocalizedProduct(product, locale)

  return (
    <Link href={`/products/${product.id}`} className="group block animate-fade-in-scale">
      <div className="overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-beige-100 via-beige-50 to-beige-100 flex items-center justify-center rounded-2xl shadow-sm group-hover:shadow-xl transition-shadow duration-500">
          <div className="text-center" style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}>
            <div className="mx-auto mb-[clamp(1rem, 2.5vw, 1.5rem)] border border-charcoal/12 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-charcoal/25 group-hover:rotate-3 rounded-2xl bg-beige-100/80 backdrop-blur-sm" style={{ width: 'clamp(3rem, 8vw, 5rem)', height: 'clamp(3rem, 8vw, 5rem)' }}>
              <span className="text-fluid-3xl font-display text-charcoal/25 font-light transition-all duration-500 group-hover:text-charcoal/35">A</span>
            </div>
            <div className="text-charcoal/35 text-fluid-xs uppercase tracking-[0.2em] font-light transition-colors duration-500 group-hover:text-charcoal/45">
              {localized.categoryLabel}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div style={{ paddingTop: 'clamp(1.5rem, 3vw, 2rem)', paddingBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
          <h3 className="text-fluid-xl font-display font-light text-charcoal mb-[clamp(0.5rem, 1.5vw, 0.75rem)] group-hover:text-charcoal/75 transition-colors duration-300 tracking-wide">
            {localized.name}
          </h3>
          <p className="text-fluid-sm text-charcoal/55 mb-[clamp(1rem, 2.5vw, 1.5rem)] line-clamp-2 leading-relaxed font-light">
            {localized.description}
          </p>
          <div className="flex items-center justify-between border-t border-charcoal/8" style={{ paddingTop: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
            <span className="text-fluid-lg font-display font-light text-charcoal tracking-wide">
              ${product.price}
            </span>
            <span className="text-fluid-xs text-charcoal/45 uppercase tracking-wider font-light rounded-full bg-charcoal/8" style={{ padding: 'clamp(0.25rem, 0.8vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)' }}>
              {localized.categoryLabel}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
