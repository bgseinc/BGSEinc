import Img from '../components/Img'
import { useState } from 'react'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import YouTube from '../components/YouTube'
import PostCard from '../components/PostCard'
import { Button, Cta, Eyebrow, PageHeader, SectionHead } from '../components/ui'
import { gallery, internationalEvents, moments, portfolioIntro } from '../data/portfolio'
import { channelUrl, videos } from '../data/videos'
import { sortedPosts } from '../data/posts'
import { useSeo } from '../hooks/useSeo'

export default function Portfolio() {
  useSeo('Work', 'From Cannes to Monaco, Milan to Paris: how BGSE takes athletes beyond the playing field. Gallery, international events, case studies and videos.')
  const [lb, setLb] = useState<number | null>(null)
  const [lb2, setLb2] = useState<number | null>(null)
  const cases = sortedPosts.filter((p) => ['Events', 'International', 'Activations', 'Culture', 'Brand Launch'].includes(p.category)).slice(0, 6)

  return (
    <>
      <PageHeader eyebrow="Our work" title={<>Our work is <span className="text-brand">global.</span></>} text={portfolioIntro.lead} />

      {/* Gallery */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted">{portfolioIntro.body[0]}</p>
          </Reveal>
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 60}>
                <button type="button" onClick={() => setLb(i)} className="img-zoom group relative block w-full overflow-hidden text-left">
                  <Img src={g.src} alt={g.alt} loading="lazy" width={g.w} height={g.h} className="w-full object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 font-display text-lg font-bold uppercase leading-tight text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.caption}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Lightbox images={gallery} index={lb} onClose={() => setLb(null)} onIndex={setLb} />

      {/* International events */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead light eyebrow="International events" title={<>From Cannes to Monaco, <span className="text-brand">Milan to Paris.</span></>} text={portfolioIntro.body[1]} />
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {internationalEvents.map((e, i) => (
                <li key={e.event} className="flex items-baseline gap-6 py-4">
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-white/40">{String(i + 1).padStart(2, '0')}</span>
                  <span className="display w-32 shrink-0 text-2xl text-brand">{e.place}</span>
                  <span className="text-white/80">{e.event}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHead eyebrow="Case studies" title="Moments we built." />
            </Reveal>
            <Reveal delay={100}>
              <Button to="/blog" variant="ghost">
                All stories
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Moments strip */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="On the ground" title="Radio rows, red carpets and locker rooms." />
          </Reveal>
        </div>
        <div className="mt-12 flex gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12 [scrollbar-width:thin]">
          {moments.map((m, i) => (
            <button key={m.src} type="button" onClick={() => setLb2(i)} className="img-zoom group relative w-[260px] shrink-0 overflow-hidden sm:w-[320px]">
              <Img src={m.src} alt={m.alt} loading="lazy" width={m.w} height={m.h} className="aspect-[4/5] w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-12 text-left font-display text-base font-bold uppercase text-white">
                {m.caption}
              </span>
            </button>
          ))}
        </div>
      </section>
      <Lightbox images={moments} index={lb2} onClose={() => setLb2(null)} onIndex={setLb2} />

      {/* Videos */}
      <section id="videos" className="scroll-mt-24 bg-ink py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHead light eyebrow="Video" title="Watch." text="Highlights from the BGSE YouTube channel: ESPYS red carpets, brand launches, community events and behind the scenes." />
            </Reveal>
            <Reveal delay={100}>
              <Button href={channelUrl} variant="outline">
                YouTube channel
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 60}>
                {v.tag && <Eyebrow light className="mb-3">{v.tag}</Eyebrow>}
                <YouTube id={v.id} title={v.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta light />
    </>
  )
}
