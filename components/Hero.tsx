import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF', minHeight: 'clamp(85vh, 100vh, 100vh)' }}>
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-[clamp(4rem,12vw,8rem)] bg-charcoal/3 rounded-full blur-3xl animate-float" style={{ width: 'clamp(20rem, 50vw, 31.25rem)', height: 'clamp(20rem, 50vw, 31.25rem)' }}></div>
          <div className="absolute bottom-1/4 -right-[clamp(4rem,12vw,8rem)] bg-charcoal/3 rounded-full blur-3xl animate-float delay-1000" style={{ width: 'clamp(24rem, 60vw, 37.5rem)', height: 'clamp(24rem, 60vw, 37.5rem)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-charcoal/2 rounded-full blur-3xl animate-pulse" style={{ width: 'clamp(16rem, 40vw, 25rem)', height: 'clamp(16rem, 40vw, 25rem)' }}></div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
          backgroundSize: 'clamp(2rem, 5vw, 3.125rem) clamp(2rem, 5vw, 3.125rem)'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-fluid max-w-fluid mx-auto px-4 sm:px-6" style={{ paddingTop: 'clamp(5rem, 12vw, 8rem)', paddingBottom: 'clamp(2rem, 5vw, 4rem)' }}>
        {/* Main Heading */}
        <div className="mb-[clamp(1rem,3vw,1.5rem)] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-fluid-5xl sm:text-fluid-5xl md:text-fluid-6xl lg:text-fluid-7xl font-display font-light text-charcoal mb-[clamp(0.5rem,1vw,0.75rem)] leading-[0.95] tracking-tight px-2">
            Timeless
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal bg-clip-text text-transparent">
                Elegance
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-charcoal/30 to-transparent"></span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-[clamp(2rem,5vw,2.5rem)] animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl text-charcoal/75 mb-[clamp(0.5rem,1.5vw,0.75rem)] font-light tracking-wide max-w-[clamp(18rem,55vw,40rem)] mx-auto leading-relaxed px-2">
            Classic & Casual Clothing for the Modern Wardrobe
          </p>
          <p className="text-fluid-sm sm:text-fluid-base text-charcoal/55 font-light tracking-wide max-w-[clamp(16rem,45vw,32rem)] mx-auto leading-relaxed px-2">
            Discover timeless pieces that blend sophistication with everyday comfort
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
          <Link
            href="/products"
            className="inline-flex items-center gap-[clamp(0.5rem,0.8vw,0.5rem)] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1rem,1.8vw,1rem)] bg-charcoal text-white hover:bg-charcoal/90 hover:scale-105 active:scale-95 transition-all duration-300 font-light text-fluid-sm sm:text-fluid-base tracking-wider uppercase border border-charcoal rounded-[20px] group shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">Explore Collection</span>
            <svg className="w-[clamp(1rem,1.2vw,1rem)] h-[clamp(1rem,1.2vw,1rem)] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

