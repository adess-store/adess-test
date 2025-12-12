export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16 bg-stone min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-charcoal mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal bg-clip-text text-transparent">Adess</span>
          </h1>
        </div>
        
        <div className="space-y-16">
          <div className="max-w-3xl mx-auto animate-fade-in delay-200">
            <p className="text-base text-charcoal/60 leading-relaxed font-light mb-8 transition-all duration-500 hover:text-charcoal/75 hover:scale-[1.01]">
              Established in 2025, Adess represents a return to timeless elegance in everyday wear. 
              We believe that clothing should be both beautiful and comfortable, classic yet contemporary.
            </p>
            
            <p className="text-base text-charcoal/60 leading-relaxed font-light mb-8 transition-all duration-500 hover:text-charcoal/75 hover:scale-[1.01]">
              Our collection is carefully curated to offer pieces that transcend trends, 
              focusing on quality craftsmanship, premium materials, and designs that stand the test of time.
            </p>
            
            <p className="text-base text-charcoal/60 leading-relaxed font-light transition-all duration-500 hover:text-charcoal/75 hover:scale-[1.01]">
              Every garment in our collection is chosen with care, ensuring that each piece 
              becomes a cherished part of your wardrobe for years to come.
            </p>
          </div>
          
          <div className="border-t border-charcoal/5 pt-16 animate-fade-in delay-400">
            <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mb-8 tracking-tight">
              Our Philosophy
            </h2>
            <p className="text-base text-charcoal/60 leading-relaxed font-light max-w-3xl transition-all duration-500 hover:text-charcoal/75">
              At Adess, we believe in the power of well-made clothing. Our pieces are designed 
              to be versatile, durable, and always in style. We focus on creating a wardrobe 
              that works together, where every item can be mixed and matched to create countless 
              elegant combinations.
            </p>
          </div>
          
          <div className="border-t border-charcoal/5 pt-16 animate-fade-in delay-600">
            <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mb-8 tracking-tight">
              Quality & Craftsmanship
            </h2>
            <p className="text-base text-charcoal/60 leading-relaxed font-light max-w-3xl transition-all duration-500 hover:text-charcoal/75">
              We partner with trusted manufacturers who share our commitment to quality. 
              Each piece is made with attention to detail, using premium materials that 
              feel as good as they look. From the finest cottons to luxurious cashmere, 
              we select only the best for our collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

