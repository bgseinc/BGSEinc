import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import PostCard from '../components/PostCard'
import { Cta, Eyebrow, PageHeader } from '../components/ui'
import { formatDate } from '../lib/format'
import { archive, sortedPosts } from '../data/posts'
import { useSeo } from '../hooks/useSeo'

export default function Blog() {
  useSeo('Journal', 'News, events, activations and media from BG Sports Enterprises: Super Bowl weeks, the ESPYS, Paris Fashion Week, Monaco and more.')
  const cats = useMemo(() => ['All', ...Array.from(new Set(sortedPosts.map((p) => p.category)))], [])
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? sortedPosts : sortedPosts.filter((p) => p.category === cat)
  const [lead, ...rest] = list

  return (
    <>
      <PageHeader eyebrow="Journal" title={<>Stories from <span className="text-brand">beyond the game.</span></>} text="News, events, activations and media appearances from the BGSE family around the world." />

      <section className="bg-paper py-12 sm:py-20">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`font-display px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
                  cat === c ? 'bg-ink text-white' : 'bg-paper-2 text-ink hover:bg-ink/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {lead && (
            <Reveal className="mt-12">
              <PostCard post={lead} large />
            </Reveal>
          )}
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>From the archive</Eyebrow>
              <h2 className="display mt-4 text-5xl">2013 – 2020</h2>
              <p className="mt-5 text-muted">A decade of headlines from the BGSE family. Ask us about any of them.</p>
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-8">
            <ul className="divide-y divide-line border-y border-line">
              {archive.map((a) => (
                <li key={a.title + a.date} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-muted sm:w-40">{formatDate(a.date)}</span>
                  <span className="text-ink/80">{a.title}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  )
}
