import { Product } from '@/lib/products'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: 'clamp(2rem, 5vw, 5rem)' }}>
      {products.map((product, index) => (
        <div key={product.id} className="animate-fade-in-scale hover:scale-[1.02] transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

