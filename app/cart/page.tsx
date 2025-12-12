'use client'

import { useCart } from '@/components/CartProvider'
import Link from 'next/link'

export default function CartPage() {
  const { items, total, clearCart, removeItem } = useCart()

  const hasItems = items.length > 0

  return (
    <div className="bg-gradient-to-b from-stone via-beige-50 to-stone min-h-screen" style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div className="max-w-[960px] mx-auto container-fluid animate-fade-in" style={{ animationDuration: '0.7s' }}>
        <div className="mb-[clamp(2rem,5vw,3rem)] flex items-center justify-between gap-4">
          <div className="transition-transform duration-500 ease-out">
            <h1 className="text-fluid-4xl md:text-fluid-5xl font-display font-light text-charcoal tracking-tight mb-2">
              Your Cart
            </h1>
            <p className="text-fluid-sm text-charcoal/60">
              {hasItems ? 'Review your selected pieces before checkout.' : 'Your cart is currently empty.'}
            </p>
          </div>
          <Link
            href="/products"
            className="text-fluid-xs sm:text-fluid-sm text-charcoal/70 hover:text-charcoal transition-colors uppercase tracking-wider border border-charcoal/15 rounded-[20px] px-4 py-2 bg-stone hover:bg-beige-100"
          >
            Continue Shopping
          </Link>
        </div>

        {hasItems ? (
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-charcoal/10 p-6 sm:p-8 shadow-sm space-y-4 transform transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-0.5">
              {items.map((item, index) => (
                <div
                  key={`${item.id}-${item.size ?? 'nosize'}`}
                  className="flex items-start justify-between gap-4 border-b border-charcoal/5 pb-4 last:border-0 last:pb-0 opacity-0 translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div>
                    <h2 className="text-fluid-base font-display text-charcoal mb-1">{item.name}</h2>
                    {item.size && (
                      <p className="text-fluid-xs text-charcoal/60 uppercase tracking-[0.15em] mb-1">
                        Size: {item.size}
                      </p>
                    )}
                    <p className="text-fluid-xs text-charcoal/55">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-fluid-base font-display text-charcoal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="text-fluid-xs text-charcoal/60 underline underline-offset-4 hover:text-charcoal transition-colors hover:translate-x-0.5 transform"
                      onClick={() => removeItem(item.id, item.size ?? null)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <p className="text-fluid-xs text-charcoal/55 uppercase tracking-[0.18em] mb-1">
                  Estimated Total
                </p>
                <p className="text-fluid-2xl font-display text-charcoal">
                  ${total.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="text-fluid-xs sm:text-fluid-sm tracking-wider uppercase border border-charcoal/15 rounded-[20px] px-4 py-3 bg-stone text-charcoal/75 hover:bg-beige-100 hover:text-charcoal transition-all duration-300 hover:-translate-y-0.5"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <button
                  className="text-fluid-xs sm:text-fluid-sm tracking-wider uppercase border border-charcoal rounded-[20px] px-6 py-3 bg-charcoal text-stone opacity-70 cursor-not-allowed hover:opacity-80 transition-opacity duration-300"
                  type="button"
                >
                  Checkout (Demo Only)
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-[clamp(3rem,8vw,5rem)] text-center animate-fade-in" style={{ animationDuration: '0.7s' }}>
            <p className="text-fluid-sm text-charcoal/60 mb-4">
              When you add items to your cart, they will appear here.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-stone rounded-[20px] text-fluid-xs tracking-wider uppercase border border-charcoal hover:bg-charcoal/90 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Collection
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}


