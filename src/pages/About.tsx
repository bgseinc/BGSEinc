import Reveal from '../components/Reveal'
import { Button, Cta, Eyebrow, PageHeader, SectionHead } from '../components/ui'
import { clients, team } from '../data/people'
import { pillars, site } from '../data/site'
import { useSeo } from '../hooks/useSeo'

export default function About() {
  useSeo('About', 'Paving the way in sports marketing and international branding since 2007. Founded by former pro snowboarder Brittany Gilman, BGSE elevates athletes and sports organizations on the global stage.')
  return (
    <>
      <PageHeader eyebrow="About BGSE" title={<>Paving the way in sports branding <span className="text-brand">since 2007.</span></>} text="BG Sports Enterprises Inc. was founded in 2007 by former pro snowboarder Brittany Gilman, M.Ed, as one of the first sports-specific marketing agencies of its kind." />

      <section className="bg-paper py-16 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="prose-bg">
              <p>
                Since 2007 BGSE Inc. has led the way in the business of national and international sports branding. We elevate athletes and
                sports organizations to new heights on the global stage.
              </p>
              <p>
                With a unique blend of creativity, strategic insight and industry expertise, we craft powerful strategies that resonate with
                audiences worldwide. From professional athletes to sports franchises, we are committed to delivering innovative branding
                solutions that drive engagement, foster loyalty and create lasting legacies in the world of sports.
              </p>
              <p>
                Beyond individual talent, BGSE has partnered with professional sports teams, agencies, leagues and brands across the NFL,
                Premier League, Serie A, MLS and the global sports industry, creating impactful campaigns, international partnerships and
                high-profile experiences that connect sport with culture, fashion and entertainment.
              </p>
              <p>
                As the sports industry has evolved, so has BGSE. We have consistently anticipated where the industry is headed, developing
                forward-thinking marketing strategies, global partnerships, experiential activations and brand-building opportunities that
                have helped redefine how athletes, brands and organizations connect with audiences around the world.
              </p>
              <p>Trust us to turn your vision into a winning brand strategy that captivates and inspires.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={100} className="grid gap-px bg-line">
              {[
                ['2007', 'Founded in Los Angeles'],
                ['600+', 'Athletes & personalities'],
                ['2', 'Global hubs: LA & London'],
                ['20+', 'Years of relationships'],
              ].map(([v, l]) => (
                <div key={l} className="bg-paper py-6">
                  <p className="display text-5xl text-brand">{v}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-muted">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHead light eyebrow="How we work" title={<>Family first. <span className="text-brand">Global always.</span></>} text="Integrity, transparency and long-term relationships are the foundation of everything we do." />
          </Reveal>
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="bg-ink p-8">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-brand">{p.n}</p>
                <h3 className="display mt-6 text-3xl">{p.title}</h3>
                <p className="mt-4 text-white/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Leadership" title="The team." text="Please contact us for the full team." />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="img-zoom aspect-[4/5] overflow-hidden bg-paper-2">
                  <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">{m.role}</p>
                <h3 className="display mt-1 text-3xl">{m.name}</h3>
                <p className="mt-4 text-muted">{m.bio}</p>
                {m.socials.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {m.socials.map((s) => (
                      <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="eyebrow text-ink/70 transition-colors hover:text-brand">
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="scroll-mt-24 bg-paper-2 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Clients & talent" title="Some of the names we’ve worked with." text="BGSE has worked with top professional sports teams and over 600 athletes and celebrities globally in a multitude of capacities." />
          </Reveal>
          <Reveal delay={100} className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="font-display text-2xl font-semibold uppercase tracking-wide text-ink/75 sm:text-3xl">
                {c}
              </span>
            ))}
            <span className="font-display text-2xl font-semibold uppercase tracking-wide text-brand sm:text-3xl">and many others</span>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <Eyebrow>Follow along</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-3">
              {site.socials.map((s) => (
                <Button key={s.href} href={s.href} variant="ghost">
                  {s.label}
                </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  )
}
