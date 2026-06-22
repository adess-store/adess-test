'use client'

import ProductGrid from '@/components/ProductGrid'
import { getAllProducts } from '@/lib/products'
import { useLanguage } from '@/components/LanguageProvider'

export default function ProductsPage() {
  const products = getAllProducts()
  const { t } = useLanguage()
  
  return (
    <div className="bg-gradient-to-b from-stone via-beige-50 to-stone min-h-screen" style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div className="max-w-[1920px] mx-auto container-fluid">
        <div className="text-center mb-[clamp(3rem, 8vw, 6rem)] animate-fade-in-up">
          <h1 className="text-fluid-5xl md:text-fluid-6xl lg:text-fluid-7xl font-display font-light text-charcoal tracking-tight">
            {t('products.our')}{' '}
            {t('products.products') && (
              <span className="bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal bg-clip-text text-transparent">
                {t('products.products')}
              </span>
            )}
          </h1>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
