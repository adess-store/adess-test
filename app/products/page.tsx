import ProductGrid from '@/components/ProductGrid'
import { getAllProducts } from '@/lib/products'

export default function ProductsPage() {
  const products = getAllProducts()
  
  return (
    <div className="bg-gradient-to-b from-stone via-beige-50 to-stone min-h-screen" style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div className="max-w-[1920px] mx-auto container-fluid">
        <div className="text-center mb-[clamp(3rem, 8vw, 6rem)] animate-fade-in-up">
          <h1 className="text-fluid-5xl md:text-fluid-6xl lg:text-fluid-7xl font-display font-light text-charcoal mb-[clamp(1rem, 2.5vw, 1.5rem)] tracking-tight">
            Our <span className="bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal bg-clip-text text-transparent">Collection</span>
          </h1>
          <p className="text-fluid-sm text-charcoal/60 max-w-[clamp(20rem, 50vw, 36rem)] mx-auto leading-relaxed font-light tracking-wide animate-fade-in delay-200">
            Discover timeless pieces that blend classic elegance with modern comfort
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  )
}

