import { getFeaturedProducts } from '@/lib/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="bg-gradient-to-b from-stone via-beige-50 to-stone" style={{ paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' }}>
      <div className="max-w-[1920px] mx-auto container-fluid">
        <div className="text-center mb-[clamp(3rem, 8vw, 6rem)] animate-fade-in-up">
          <h2 className="text-fluid-5xl md:text-fluid-6xl lg:text-fluid-7xl font-display font-light text-charcoal mb-[clamp(1.5rem, 4vw, 2rem)] tracking-tight">
            Featured <span className="bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal bg-clip-text text-transparent animate-pulse">Collection</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 'clamp(2rem, 5vw, 5rem)' }}>
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in-scale hover:scale-[1.02] transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

