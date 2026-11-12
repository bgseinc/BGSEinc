import { useState } from 'react'
import { Play } from './Icons'
import { ytThumb } from '../data/videos'

export default function YouTube({ id, title, className = '' }: { id: string; title: string; className?: string }) {
  const [play, setPlay] = useState(false)
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-ink ${className}`}>
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group absolute inset-0 h-full w-full text-left"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={ytThumb(id)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-ink shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <Play width={30} height={30} className="ml-1" />
          </span>
          <span className="absolute inset-x-0 bottom-0 p-4 font-display text-lg font-bold uppercase leading-tight text-white sm:p-6 sm:text-xl">
            {title}
          </span>
        </button>
      )}
    </div>
  )
}
