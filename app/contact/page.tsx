'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-stone min-h-screen" style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div className="max-w-4xl mx-auto container-fluid px-4 sm:px-6">
        <div className="text-center mb-[clamp(3rem, 6vw, 6rem)] animate-fade-in-up">
          <h1 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl lg:text-fluid-7xl font-display font-light text-charcoal mb-4 sm:mb-6 tracking-tight">
            {t('contact.getIn')}{' '}
            <span className="bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal bg-clip-text text-transparent">
              {t('contact.touch')}
            </span>
          </h1>
          <p className="text-fluid-xs sm:text-fluid-sm text-charcoal/60 font-light tracking-wide animate-fade-in delay-200">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(2rem, 4vw, 4rem)]">
          <div className="lg:col-span-2 animate-fade-in-left delay-400">
            <form className="space-y-6 sm:space-y-8">
              <div>
                <label htmlFor="name" className="block text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-2 sm:mb-3">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-0 py-3 sm:py-4 border-0 border-b border-charcoal/12 focus:outline-none focus:border-charcoal/35 transition-all duration-500 bg-transparent text-charcoal/75 font-light placeholder:text-charcoal/35 text-fluid-sm sm:text-fluid-base"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-2 sm:mb-3">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-0 py-3 sm:py-4 border-0 border-b border-charcoal/12 focus:outline-none focus:border-charcoal/35 transition-all duration-500 bg-transparent text-charcoal/75 font-light placeholder:text-charcoal/35 text-fluid-sm sm:text-fluid-base"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-2 sm:mb-3">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-0 py-3 sm:py-4 border-0 border-b border-charcoal/12 focus:outline-none focus:border-charcoal/35 transition-all duration-500 bg-transparent text-charcoal/75 font-light placeholder:text-charcoal/35 text-fluid-sm sm:text-fluid-base"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-2 sm:mb-3">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-0 py-3 sm:py-4 border-0 border-b border-charcoal/12 focus:outline-none focus:border-charcoal/35 transition-all duration-500 bg-transparent text-charcoal/75 font-light placeholder:text-charcoal/35 resize-none text-fluid-sm sm:text-fluid-base"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              
              <button
                type="submit"
                className="mt-6 sm:mt-8 px-8 sm:px-12 py-3 sm:py-4 bg-charcoal text-stone hover:bg-charcoal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-light text-fluid-xs sm:text-fluid-sm tracking-wider uppercase border border-charcoal rounded-[20px] shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>
          
          <div className="border-t lg:border-t-0 lg:border-l border-charcoal/8 pt-8 sm:pt-12 lg:pt-0 lg:pl-8 xl:pl-12 animate-fade-in-right delay-400">
            <h3 className="text-fluid-xs sm:text-fluid-sm font-display font-light text-charcoal mb-6 sm:mb-8 uppercase tracking-wider">
              {t('contact.contactInfo')}
            </h3>
            <div className="space-y-5 sm:space-y-6 text-fluid-xs sm:text-fluid-sm text-charcoal/60 font-light leading-relaxed">
              <div className="transition-all duration-300 hover:text-charcoal/75 hover:translate-x-1">
                <p className="text-fluid-xs text-charcoal/45 uppercase tracking-wider mb-1">{t('contact.emailLabel')}</p>
                <p>hello@adess.com</p>
              </div>
              <div className="transition-all duration-300 hover:text-charcoal/75 hover:translate-x-1">
                <p className="text-fluid-xs text-charcoal/45 uppercase tracking-wider mb-1">{t('contact.phoneLabel')}</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="transition-all duration-300 hover:text-charcoal/75 hover:translate-x-1">
                <p className="text-fluid-xs text-charcoal/45 uppercase tracking-wider mb-1">{t('contact.addressLabel')}</p>
                <p>123 Fashion Street<br />Style City, SC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
