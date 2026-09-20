import Img from './Img'
import { Link } from 'react-router-dom'
import type { Post } from '../data/posts'
import { formatDate } from '../lib/format'
import { ArrowRight } from './Icons'

export default function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className={`img-zoom relative overflow-hidden bg-ink-3 ${large ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
        {post.cover ? (
          <Img src={post.cover} alt={post.coverAlt ?? ''} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-ink p-6">
            <img src="/images/logo/logo-light.webp" alt="" className="h-10 w-auto self-start opacity-80" />
            <p className="display text-4xl text-white/90">{post.category}</p>
          </div>
        )}
        <span className="absolute left-4 top-4 bg-brand px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
          {post.category}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {formatDate(post.date)}
          {post.location ? ` · ${post.location}` : ''}
        </p>
        <h3 className={`display mt-2 text-ink transition-colors group-hover:text-brand ${large ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[1.7rem]'}`}>
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-muted">{post.excerpt}</p>
        <span className="link-arrow mt-4 text-sm uppercase tracking-[0.14em] text-ink group-hover:text-brand">
          Read story <ArrowRight width={16} height={16} />
        </span>
      </div>
    </Link>
  )
}
