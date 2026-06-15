export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: 'classic' | 'casual'
  image: string
  featured?: boolean
}
// Mock product data with high-quality clothing images
export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White Button-Down Shirt',
    description: 'A timeless essential crafted from premium cotton. Perfect for both office and casual settings, this shirt features a tailored fit and elegant details.',
    price: 89,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1594938291221-94f98832c8c2?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    name: 'Navy Blue Blazer',
    description: 'Sophisticated single-breasted blazer in rich navy. Made from fine wool blend, this versatile piece elevates any outfit.',
    price: 249,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    name: 'Casual Linen Trousers',
    description: 'Comfortable and breathable linen trousers in a relaxed fit. Perfect for warm weather and casual occasions.',
    price: 79,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    featured: true,
  },
  {
    id: 4,
    name: 'Cashmere Sweater',
    description: 'Luxurious cashmere crew neck sweater in soft beige. Exceptionally soft and warm, perfect for layering.',
    price: 199,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    name: 'Denim Jacket',
    description: 'Classic denim jacket with a modern fit. Made from premium denim, this versatile piece works year-round.',
    price: 129,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    name: 'Wool Trench Coat',
    description: 'Elegant double-breasted trench coat in camel. A timeless outerwear piece that never goes out of style.',
    price: 349,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    featured: true,
  },
  {
    id: 7,
    name: 'Cotton T-Shirt',
    description: 'Essential crew neck t-shirt in organic cotton. Soft, comfortable, and perfect for everyday wear.',
    price: 39,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    name: 'Pleated Midi Skirt',
    description: 'Elegant pleated midi skirt in charcoal. Flattering silhouette that pairs beautifully with any top.',
    price: 119,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    featured: false,
  },
  {
    id: 9,
    name: 'Chino Pants',
    description: 'Classic chino pants in khaki. Versatile and comfortable, suitable for both casual and smart-casual occasions.',
    price: 69,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    featured: false,
  },
  {
    id: 10,
    name: 'Silk Blouse',
    description: 'Luxurious silk blouse with delicate details. Perfect for special occasions or elevating your everyday look.',
    price: 159,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    featured: true,
  },
  {
    id: 11,
    name: 'Oversized Cardigan',
    description: 'Cozy oversized cardigan in soft knit. Perfect for layering and adding comfort to any outfit.',
    price: 89,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    featured: false,
  },
  {
    id: 12,
    name: 'Tailored Trousers',
    description: 'Sharp tailored trousers in navy. Professional and polished, perfect for the office or formal events.',
    price: 139,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1594938291221-94f98832c8c2?w=800&q=80',
    featured: false,
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}

export function getProductsByCategory(category: 'classic' | 'casual'): Product[] {
  return products.filter(product => product.category === category)
}

