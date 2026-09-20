import { useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Close } from './Icons'

export type LightboxImage = { src: string; alt: string; caption?: string }

export default function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[]
  index: number | null
  onClose: () => void
  onIndex: (i: number) => void
}) {
  const open = index !== null
  const prev = useCallback(() => index !== null && onIndex((index - 1 + images.length) % images.length), [index, images.length, onIndex])
  const next = useCallback(() => index !== null && onIndex((index + 1) % images.length), [index, images.length, onIndex])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, prev, next])

  if (index === null) return null
  const img = images[index]
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-10 p-3 text-white/80 hover:text-white" aria-label="Close">
        <Close width={28} height={28} />
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-3 text-white/70 hover:text-white sm:left-6"
            aria-label="Previous"
          >
            <ChevronLeft width={36} height={36} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-3 text-white/70 hover:text-white sm:right-6"
            aria-label="Next"
          >
            <ChevronRight width={36} height={36} />
          </button>
        </>
      )}
      <figure className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-h-[82vh] w-auto max-w-full object-contain" />
        {img.caption && <figcaption className="mt-4 text-center text-sm text-white/70">{img.caption}</figcaption>}
      </figure>
    </div>
  )
}
