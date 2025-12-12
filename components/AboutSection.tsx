export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-stone via-beige-50 to-stone border-t border-charcoal/8" style={{ paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' }}>
      <div className="max-w-[clamp(20rem, 90vw, 56rem)] mx-auto text-center container-fluid px-4 sm:px-6">
        <h2 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl lg:text-fluid-7xl font-display font-light text-charcoal mb-[clamp(2rem, 6vw, 4rem)] tracking-tight px-2 animate-fade-in-up">
          Our <span className="bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal bg-clip-text text-transparent">Story</span>
        </h2>
        <div className="text-fluid-sm sm:text-fluid-base text-charcoal/65 leading-relaxed font-light max-w-[clamp(18rem, 50vw, 32rem)] mx-auto" style={{ gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <p className="transition-all duration-500 hover:text-charcoal/75 mb-[clamp(1.5rem, 3vw, 2rem)] px-2 animate-fade-in delay-200 hover:scale-[1.02]">
            Established in 2025, Adess represents a return to timeless elegance in everyday wear. 
            We believe that clothing should be both beautiful and comfortable, classic yet contemporary.
          </p>
          <p className="transition-all duration-500 hover:text-charcoal/75 mb-[clamp(1.5rem, 3vw, 2rem)] px-2 animate-fade-in delay-400 hover:scale-[1.02]">
            Our collection is carefully curated to offer pieces that transcend trends, 
            focusing on quality craftsmanship, premium materials, and designs that stand the test of time.
          </p>
          <p className="transition-all duration-500 hover:text-charcoal/75 px-2 animate-fade-in delay-600 hover:scale-[1.02]">
            Every garment in our collection is chosen with care, ensuring that each piece 
            becomes a cherished part of your wardrobe for years to come.
          </p>
        </div>
      </div>
    </section>
  )
}

