'use client'

import { useState } from 'react'
import { SUPPORT_EMAIL } from '@/lib/support'
import { useLanguage } from '@/components/LanguageProvider'

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const { t } = useLanguage()

  const displayRating = hoverRating || rating

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) return

    const subject = encodeURIComponent(t('review.emailSubject', { rating }))
    const body = encodeURIComponent(
      `${t('review.emailRating', { rating })}\n\n${t('review.emailComment')}\n${comment.trim() || t('review.noComment')}`
    )
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
      <div className="text-center">
        <p className="text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-4">
          {t('review.yourRating')}
        </p>
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => {
                setRating(star)
                if (status === 'sent') setStatus('idle')
              }}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="text-[clamp(2rem,5vw,2.75rem)] leading-none text-charcoal/25 hover:scale-110 transition-transform duration-200 focus:outline-none"
              aria-label={t('review.rateStars', { n: star })}
            >
              <span className={star <= displayRating ? 'text-charcoal' : ''}>
                {star <= displayRating ? '★' : '☆'}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="review-comment" className="block text-fluid-xs text-charcoal/55 uppercase tracking-wider font-light mb-3">
          {t('review.yourComment')}
        </label>
        <textarea
          id="review-comment"
          name="comment"
          rows={5}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value)
            if (status === 'sent') setStatus('idle')
          }}
          className="w-full px-4 py-3 border border-charcoal/20 focus:outline-none focus:border-charcoal/40 transition-colors duration-300 bg-transparent text-charcoal/75 font-light placeholder:text-charcoal/35 resize-none text-fluid-sm sm:text-fluid-base rounded-none"
          placeholder={t('review.commentPlaceholder')}
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={rating === 0}
          className="px-8 sm:px-12 py-3 sm:py-4 bg-charcoal text-stone hover:bg-charcoal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-light text-fluid-xs sm:text-fluid-sm tracking-wider uppercase border border-charcoal rounded-[20px] shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {t('review.send')}
        </button>
      </div>

      {status === 'sent' && (
        <p className="text-center text-fluid-xs sm:text-fluid-sm text-charcoal/60 font-light">
          {t('review.sent')} {SUPPORT_EMAIL}.
        </p>
      )}
    </form>
  )
}
