import Img from '../components/Img'
import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Button, Cta, Eyebrow } from '../components/ui'
import { ArrowRight } from '../components/Icons'
import { getService, services } from '../data/services'
import { useSeo } from '../hooks/useSeo'

export default function ServiceDetail() {
  const { slug = '' } = useParams()
  const s = getService(slug)
  useSeo(s?.title ?? 'Service', s?.short)
  if (!s) return <Navigate to="/services" replace />
  const idx = services.findIndex((x) => x.slug === s.slug)
  const next = services[(idx + 1) % services.length]

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-x grid gap-10 pt-36 pb-16 sm:pt-44 lg:grid-cols-12 lg:items-end lg:pb-24">
          <div className="lg:col-span-7">
            <Link to="/services" className="eyebrow text-white/60 transition-colors hover:text-brand">
              ← Services
            </Link>
            <p className="mt-6 font-display text-sm font-semibold tracking-[0.2em] text-brand">{String(idx + 1).padStart(2, '0')}</p>
            <h1 className="display mt-3 text-[clamp(3rem,8vw,7rem)]">{s.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{s.short}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="img-zoom aspect-[4/5] overflow-hidden">
              <Img src={s.image} alt={s.imageAlt} loading="eager" sizes="(max-width: 1024px) 100vw, 40vw" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {s.intro && (
              <Reveal>
                <p className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">{s.intro}</p>
              </Reveal>
            )}
            {s.body && (
              <Reveal delay={80} className="prose-bg mt-8">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            )}
            {s.quote && (
              <Reveal delay={100} className="mt-12 border-l-4 border-brand pl-6">
                <p className="display text-3xl leading-tight text-ink sm:text-4xl">“{s.quote.text}”</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted">{s.quote.cite}</p>
              </Reveal>
            )}
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            {s.bullets && (
              <Reveal delay={120} className="bg-ink p-8 text-white">
                <Eyebrow light>{s.bullets.title ?? 'What’s included'}</Eyebrow>
                <ul className="mt-6 space-y-3">
                  {s.bullets.items.map((b) => (
                    <li key={b} className="flex gap-3 text-white/80">
                      <span className="mt-2.5 h-[2px] w-4 shrink-0 bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            <Reveal delay={160} className="mt-8 border border-line p-8">
              <Eyebrow>Start a conversation</Eyebrow>
              <p className="mt-4 text-muted">Tell us about your goals and we’ll come back with a game plan.</p>
              <Button to="/contact" className="mt-6">
                Contact us
              </Button>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2">
        <Link to={`/services/${next.slug}`} className="container-x group flex items-center justify-between gap-6 py-10">
          <div>
            <p className="eyebrow text-muted">Next service</p>
            <p className="display mt-2 text-3xl text-ink transition-colors group-hover:text-brand sm:text-5xl">{next.title}</p>
          </div>
          <ArrowRight width={36} height={36} className="shrink-0 text-ink transition-all group-hover:translate-x-2 group-hover:text-brand" />
        </Link>
      </section>
      <Cta />
    </>
  )
}
