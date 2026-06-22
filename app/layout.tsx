import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CartProvider } from '@/components/CartProvider'
import { LanguageProvider } from '@/components/LanguageProvider'

export const metadata: Metadata = {
  title: 'Adess - Classic & Casual Clothing',
  description: 'Timeless elegance meets modern comfort. Discover our curated collection of classic and casual clothing.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-cream">
        <LanguageProvider>
          <CartProvider>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
