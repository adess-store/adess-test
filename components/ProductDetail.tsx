'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/lib/products'
import { FiArrowLeft, FiHeart, FiShare2 } from 'react-icons/fi'
import { useCart } from '@/components/CartProvider'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const { addItem } = useCart()
  const [isSharing, setIsSharing] = useState(false)
  const [shareMessage, setShareMessage] = useState<string | null>(null)

  const handleShare = async () => {
    if (typeof window === 'undefined' || isSharing) return

    const shareUrl = window.location.href
    const shareText = `${product.name} · $${product.price}`

    try {
      setIsSharing(true)
      setShareMessage(null)

      // Try Web Share API first (works on mobile and some desktop browsers)
      if (navigator.share && navigator.canShare && navigator.canShare({ title: product.name, text: shareText, url: shareUrl })) {
        await navigator.share({
          title: product.name,
          text: shareText,
          url: shareUrl,
        })
        setShareMessage('Shared successfully!')
        setTimeout(() => setShareMessage(null), 3000)
        return
      }

      // Fallback to clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(shareUrl)
          setShareMessage('Link copied to clipboard!')
          setTimeout(() => setShareMessage(null), 3000)
        } catch (clipboardError) {
          // Clipboard failed, show URL in a way user can copy manually
          fallbackShare(shareUrl)
        }
      } else {
        // No clipboard API, use fallback
        fallbackShare(shareUrl)
      }
    } catch (error: any) {
      // User cancelled share or other error
      if (error?.name !== 'AbortError') {
        // Only show error if it wasn't user cancellation
        const shareUrl = window.location.href
        fallbackShare(shareUrl)
      }
    } finally {
      setIsSharing(false)
    }
  }

  const fallbackShare = (url: string) => {
    // Create a temporary textarea to copy from
    const textarea = document.createElement('textarea')
    textarea.value = url
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    textarea.style.left = '-999999px'
    document.body.appendChild(textarea)
    textarea.select()
    textarea.setSelectionRange(0, 99999) // For mobile devices
    
    try {
      const successful = document.execCommand('copy')
      if (successful) {
        setShareMessage('Link copied to clipboard!')
        setTimeout(() => setShareMessage(null), 3000)
      } else {
        // Last resort: show the URL
        setShareMessage(`Share this link: ${url}`)
        setTimeout(() => setShareMessage(null), 5000)
      }
    } catch (err) {
      // Show the URL as last resort
      setShareMessage(`Share this link: ${url}`)
      setTimeout(() => setShareMessage(null), 5000)
    } finally {
      document.body.removeChild(textarea)
    }
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <div className="max-w-[1920px] mx-auto container-fluid px-4 sm:px-6 animate-fade-in">
      <Link
        href="/products"
        className="inline-flex items-center text-fluid-xs sm:text-fluid-sm text-charcoal/50 hover:text-charcoal mb-[clamp(2rem,5vw,4rem)] transition-all duration-500 group font-light tracking-wider uppercase hover:translate-x-[-4px]"
      >
        <FiArrowLeft className="mr-2 sm:mr-3 w-3 h-3 group-hover:-translate-x-1 transition-transform duration-500" />
        Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,8rem)]">
        {/* Product Display */}
        <div className="animate-fade-in-left">
          <div className="relative aspect-[3/4] mb-4 sm:mb-6 bg-beige-100 flex items-center justify-center rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-500">
            <div className="text-center" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
              <div className="mx-auto mb-4 sm:mb-8 border border-charcoal/10 flex items-center justify-center rounded-xl" style={{ width: 'clamp(4rem, 10vw, 7rem)', height: 'clamp(4rem, 10vw, 7rem)' }}>
                <span className="text-fluid-3xl sm:text-fluid-4xl font-display text-charcoal/15 font-light">A</span>
              </div>
              <div className="text-charcoal/25 text-fluid-xs uppercase tracking-[0.2em] font-light">
                {product.category}
              </div>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative flex-shrink-0 border transition-all duration-500 rounded-[20px] ${
                  selectedImage === idx 
                    ? 'border-charcoal/30 bg-beige-100' 
                    : 'border-charcoal/5 bg-stone hover:border-charcoal/15'
                }`}
                style={{ width: 'clamp(3.5rem, 8vw, 5rem)', height: 'clamp(4.5rem, 10vw, 7rem)' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-fluid-lg sm:text-fluid-xl font-display text-charcoal/10 font-light">A</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4 sm:pt-8 animate-fade-in-right">
          <div className="mb-4 sm:mb-6">
            <span className="text-fluid-xs text-charcoal/45 uppercase tracking-[0.2em] font-light">
              {product.category}
            </span>
          </div>
          <h1 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl font-display font-light text-charcoal mb-4 sm:mb-8 tracking-tight leading-tight">
            {product.name}
          </h1>
          <p className="text-fluid-xl sm:text-fluid-2xl font-display font-light text-charcoal mb-6 sm:mb-12 tracking-wide">
            ${product.price}
          </p>
          <p className="text-fluid-sm text-charcoal/60 mb-8 sm:mb-12 leading-relaxed font-light max-w-lg">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-8 sm:mb-12">
            <label className="block text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-3 sm:mb-4">
              Size
            </label>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border transition-all duration-500 font-light tracking-wide rounded-[20px] ${
                    selectedSize === size
                      ? 'border-charcoal bg-charcoal text-stone'
                      : 'border-charcoal/12 bg-stone text-charcoal/65 hover:border-charcoal/25'
                  }`}
                  style={{ width: 'clamp(2.5rem, 6vw, 3rem)', height: 'clamp(2.5rem, 6vw, 3rem)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <button
              className="w-full py-3 sm:py-4 bg-charcoal text-stone hover:bg-charcoal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-light text-fluid-xs sm:text-fluid-sm tracking-wider uppercase border border-charcoal rounded-[20px] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedSize}
              onClick={() => {
                if (!selectedSize) return
                addItem(product, { size: selectedSize })
              }}
            >
              {selectedSize ? 'Add to Cart' : 'Select Size to Add to Cart'}
            </button>
            <div className="flex gap-3 sm:gap-4">
              <button className="group flex-1 py-3 sm:py-4 border border-charcoal/12 bg-stone text-charcoal/65 hover:bg-beige-100 hover:border-charcoal/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-light text-fluid-xs tracking-wider uppercase flex items-center justify-center gap-2 rounded-[20px] backdrop-blur-sm">
                <FiHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
                Save
              </button>
              <button
                className="group flex-1 py-3 sm:py-4 border border-charcoal/12 bg-stone text-charcoal/65 hover:bg-beige-100 hover:border-charcoal/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-light text-fluid-xs tracking-wider uppercase flex items-center justify-center gap-2 rounded-[20px] backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleShare}
                disabled={isSharing}
              >
                <FiShare2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
                {isSharing ? 'Sharing…' : 'Share'}
              </button>
            </div>
            {shareMessage && (
              <div className="mt-3 animate-fade-in">
                <p className="text-fluid-xs text-charcoal/70 bg-beige-100 border border-charcoal/10 rounded-[20px] px-4 py-2 inline-block">
                  {shareMessage}
                </p>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="border-t border-charcoal/8 pt-8 sm:pt-12">
            <h3 className="text-fluid-xs sm:text-fluid-sm font-display font-light text-charcoal mb-4 sm:mb-6 uppercase tracking-wider">
              Details
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-fluid-xs sm:text-fluid-sm text-charcoal/60 font-light leading-relaxed">
              <li>Premium quality materials</li>
              <li>Classic design with modern comfort</li>
              <li>Care instructions included</li>
              <li>Free shipping on orders over $100</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

