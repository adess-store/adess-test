'use client'

import { useState } from 'react'
import { SUPPORT_EMAIL } from '@/lib/support'
import { useLanguage } from '@/components/LanguageProvider'

export default function SupportForm() {
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!comment.trim()) return

    const subject = encodeURIComponent(t('support.emailSubject'))
    const body = encodeURIComponent(comment.trim())
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
      <div>
        <label htmlFor="comment" className="block text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-2 sm:mb-3">
          {t('support.yourComment')}
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={6}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value)
            if (status === 'sent') setStatus('idle')
          }}
          className="w-full px-4 py-3 sm:py-4 border border-charcoal/12 focus:outline-none focus:border-charcoal/35 transition-all duration-500 bg-transparent text-charcoal/75 font-light placeholder:text-charcoal/35 resize-none text-fluid-sm sm:text-fluid-base rounded-[20px]"
          placeholder={t('support.commentPlaceholder')}
          required
        />
      </div>

      <button
        type="submit"
        disabled={!comment.trim()}
        className="px-8 sm:px-12 py-3 sm:py-4 bg-charcoal text-stone hover:bg-charcoal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-light text-fluid-xs sm:text-fluid-sm tracking-wider uppercase border border-charcoal rounded-[20px] shadow-lg hover:shadow-xl w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {t('support.send')}
      </button>

      {status === 'sent' && (
        <p className="text-fluid-xs sm:text-fluid-sm text-charcoal/60 font-light">
          {t('support.sent')} {SUPPORT_EMAIL}.
        </p>
      )}
    </form>
  )
}
