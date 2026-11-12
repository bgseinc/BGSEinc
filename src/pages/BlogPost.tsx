import Img from '../components/Img'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import YouTube from '../components/YouTube'
import PostCard from '../components/PostCard'
import Reveal from '../components/Reveal'
import { Button, Cta, Eyebrow } from '../components/ui'
import { formatDate } from '../lib/format'
import { ArrowUpRight } from '../components/Icons'
import { getPost, sortedPosts, type Block } from '../data/posts'
import { useSeo } from '../hooks/useSeo'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const post = getPost(slug)
  useSeo(post?.title ?? 'Journal', post?.excerpt)
  const [lb, setLb] = useState<{ imgs: { src: string; alt: string }[]; i: number } | null>(null)
  if (!post) return <Navigate to="/blog" replace />

  const idx = sortedPosts.findIndex((p) => p.slug === post.slug)
  const related = [sortedPosts[idx + 1], sortedPosts[idx + 2], sortedPosts[idx - 1]].filter(Boolean).slice(0, 3)
  const coverIsRemote = post.cover?.startsWith('http')

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-ink pt-36 pb-16 text-white sm:pt-44">
          <div className="container-x">
            <Link to="/blog" className="eyebrow text-white/60 transition-colors hover:text-brand">
              ← Journal
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/60">
              <span className="bg-brand px-3 py-1 font-display text-xs font-bold text-ink">{post.category}</span>
              <span>{formatDate(post.date)}</span>
              {post.location && <span>· {post.location}</span>}
            </div>
            <h1 className="display mt-6 max-w-5xl text-[clamp(2.6rem,6.5vw,5.5rem)]">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">{post.excerpt}</p>
          </div>
        </header>

        {post.cover && !coverIsRemote && (
          <div className="bg-ink">
            <div className="container-x">
              <Img src={post.cover} alt={post.coverAlt ?? ''} loading="eager" sizes="100vw" className="max-h-[80vh] w-full object-cover" />
            </div>
          </div>
        )}

        <div className="container-x grid gap-14 py-16 lg:grid-cols-12 sm:py-24">
          <div className="prose-bg lg:col-span-8 lg:col-start-3">
            {post.blocks.map((b, i) => (
              <BlockView key={i} block={b} onOpen={(imgs, j) => setLb({ imgs, i: j })} />
            ))}
            {post.tags && (
              <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-6">
                {post.tags.map((t) => (
                  <span key={t} className="bg-paper-2 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      <Lightbox images={lb?.imgs ?? []} index={lb ? lb.i : null} onClose={() => setLb(null)} onIndex={(i) => lb && setLb({ ...lb, i })} />

      {related.length > 0 && (
        <section className="bg-paper-2 py-20 sm:py-28">
          <div className="container-x">
            <Reveal className="flex items-end justify-between gap-6">
              <div>
                <Eyebrow>Keep reading</Eyebrow>
                <h2 className="display mt-4 text-5xl">More stories</h2>
              </div>
              <Button to="/blog" variant="ghost">
                Journal
              </Button>
            </Reveal>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      <Cta />
    </>
  )
}

function BlockView({ block, onOpen }: { block: Block; onOpen: (imgs: { src: string; alt: string }[], i: number) => void }) {
  switch (block.type) {
    case 'p':
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />
    case 'h2':
      return <h2>{block.text}</h2>
    case 'h3':
      return <h3>{block.text}</h3>
    case 'ul':
      return (
        <ul>
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote>
          “{block.text}”{block.cite && <footer className="mt-3 font-sans text-sm font-normal uppercase tracking-[0.16em] text-muted">{block.cite}</footer>}
        </blockquote>
      )
    case 'img':
      return (
        <figure>
          <button type="button" onClick={() => onOpen([{ src: block.src, alt: block.alt }], 0)} className="img-zoom block w-full overflow-hidden bg-paper-2">
            <Img src={block.src} alt={block.alt} sizes="(max-width: 1024px) 100vw, 66vw" className="max-h-[80vh] w-full object-contain" />
          </button>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'gallery':
      return (
        <figure className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {block.images.map((im, i) => (
            <button key={im.src} type="button" onClick={() => onOpen(block.images, i)} className="img-zoom aspect-[4/5] overflow-hidden bg-paper-2">
              <Img src={im.src} alt={im.alt} loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </figure>
      )
    case 'video':
      return (
        <figure>
          <YouTube id={block.id} title={block.title} />
        </figure>
      )
    case 'cta':
      return (
        <p className="mt-8">
          <a href={block.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-brand px-6 py-3 font-display text-base font-bold uppercase tracking-[0.08em] !text-ink !no-underline transition-colors hover:bg-brand-dark">
            {block.label}
            <ArrowUpRight width={18} height={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </p>
      )
  }
}
