import { notFound } from 'next/navigation'
import { getProductById, getAllProducts } from '@/lib/products'
import ProductDetail from '@/components/ProductDetail'

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(parseInt(params.id))
  
  if (!product) {
    notFound()
  }
  
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16 bg-gradient-to-b from-stone via-beige-50 to-stone min-h-screen">
      <div className="animate-fade-in-scale">
        <ProductDetail product={product} />
      </div>
    </div>
  )
}

