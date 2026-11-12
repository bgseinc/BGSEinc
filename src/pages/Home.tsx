import Img from '../components/Img'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import YouTube from '../components/YouTube'
import PostCard from '../components/PostCard'
import { Button, Cta, Eyebrow, Marquee, SectionHead } from '../components/ui'
import { ArrowRight, ArrowUpRight } from '../components/Icons'
import { arenas, pillars, site, stats } from '../data/site'
import { services } from '../data/services'
import { sortedPosts } from '../data/posts'
import { clients, testimonials } from '../data/people'
import { channelUrl, featuredVideo } from '../data/videos'
import { useSeo } from '../hooks/useSeo'
import { useEffect, useState } from 'react'

export default function Home() {
  useSeo('', undefined)
  const featured = services.filter((s) => s.featured)
  const rest = services.filter((s) => !s.featured)
  const recent = sortedPosts.slice(0, 4)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden className="pointer-events-none absolute -top-48 left-[-10%] h-[620px] w-[620px] rounded-full bg-brand/25 blur-[160px]" />
        <div className="container-x relative grid gap-12 pt-36 pb-16 sm:pt-44 lg:grid-cols-12 lg:items-end lg:pb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light>
                {site.tagline} · Est. {site.founded} · Los Angeles + London
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[clamp(3.4rem,9.5vw,9rem)]">
                Creating <br />
                opportunities <br />
                <span className="text-brand">beyond the game.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
                BG Sports Enterprises builds global brands, partnerships and experiences for athletes, teams and the brands that
                want to reach them. Branding, marketing, PR, events and access, from the Super Bowl to Cannes.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" size="lg">
                Let’s talk
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                See the work
              </Button>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={200} className="grid grid-cols-12 gap-3">
              <div className="img-zoom col-span-7 overflow-hidden">
                <Img
                  src="/images/portfolio/p10.webp"
                  alt="Chris Olave holding his Saints jersey at Parc des Princes"
                  width={1600}
                  height={1600}
                  className="aspect-[4/5] h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 58vw, 24vw"
                />
              </div>
              <div className="col-span-5 grid gap-3">
                <div className="img-zoom overflow-hidden">
                  <Img src="/images/portfolio/p04.webp" alt="Kamaru Usman and Brittany Gilman on the ESPYS red carpet" width={1280} height={1600} loading="eager" sizes="(max-width: 1024px) 40vw, 16vw" className="aspect-[4/5] h-full w-full object-cover" />
                </div>
                <div className="img-zoom overflow-hidden">
                  <Img src="/images/portfolio/p09.webp" alt="Odell Beckham Jr. at the amfAR Gala in Cannes" width={408} height={612} loading="eager" sizes="(max-width: 1024px) 40vw, 16vw" className="aspect-[4/5] h-full w-full object-cover" />
                </div>
              </div>
            </Reveal>
            <p className="mt-3 text-right text-[11px] uppercase tracking-[0.2em] text-white/40">Paris · Los Angeles · Cannes</p>
          </div>
        </div>

        {/* STATS */}
        <div className="border-t border-white/10">
          <div className="container-x grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <p className="display text-5xl text-white sm:text-6xl">{s.value}</p>
                <p className="mt-2 max-w-[220px] text-sm text-white/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-line bg-paper py-5 text-ink">
        <Marquee items={arenas} duration={55} />
      </div>

      {/* WHY BGSE */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                eyebrow="Why choose BGSE"
                title={
                  <>
                    Integrity, transparency and <span className="text-brand">long-term relationships.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Since 2007, BGSE has been at the forefront of global sports branding, strategic partnerships, public relations,
                marketing and talent management. We have worked with a roster of more than 600 athletes and personalities, including
                NFL players, global footballers, UFC athletes, boxers, Olympians, snowboarders, basketball players, NIL athletes,
                influencers and entertainers, as well as professional teams, brands and media.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We treat our clients like family, placing their goals at the center of every strategy while delivering a level of
                service that extends far beyond traditional representation. We don’t simply create opportunities. We build global
                brands, meaningful partnerships and lasting legacies.
              </p>
              <Link to="/about" className="link-arrow mt-8 text-ink hover:text-brand">
                Our story <ArrowRight />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="group bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-white sm:p-10">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-brand">{p.n}</p>
                <h3 className="display mt-6 text-3xl">{p.title}</h3>
                <p className="mt-4 text-muted transition-colors group-hover:text-white/70">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHead
                light
                eyebrow="What we do"
                title={
                  <>
                    You’re not just an athlete. <span className="text-brand">You’re a brand.</span>
                  </>
                }
                text="From one-off campaigns to multi-level global strategies, BGSE specializes in developing and implementing customized, evolving strategies across every discipline that builds a career off the field."
              />
            </Reveal>
            <Reveal delay={120}>
              <Button to="/services" variant="outline">
                All services
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link to={`/services/${s.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                    <Img src={s.image} alt={s.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <p className="font-display text-sm font-semibold tracking-[0.2em] text-brand">0{i + 1}</p>
                      <h3 className="display mt-2 text-4xl">{s.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 line-clamp-3 text-white/60">{s.short}</p>
                  <span className="link-arrow mt-4 text-sm uppercase tracking-[0.14em] text-white group-hover:text-brand">
                    Explore <ArrowRight width={16} height={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 grid gap-px border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 border-b border-white/10 py-5 pr-2 transition-colors hover:text-brand"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-white/40">0{i + 4}</span>
                  <span className="font-display text-2xl font-bold uppercase">{s.title}</span>
                </span>
                <ArrowUpRight className="shrink-0 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHead eyebrow="Building globally since 2007" title="Recent works" />
            </Reveal>
            <Reveal delay={100}>
              <Button to="/blog" variant="ghost">
                Journal
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {recent.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROSTER + TESTIMONIALS */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="The family"
              title={
                <>
                  Trusted by champions <span className="text-brand">on and off the field.</span>
                </>
              }
              text="BGSE has worked with top professional sports teams and over 600 athletes and celebrities globally in a multitude of capacities."
            />
          </Reveal>
          <Reveal delay={100} className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="font-display text-xl font-semibold uppercase tracking-wide text-ink/70 sm:text-2xl">
                {c}
              </span>
            ))}
            <Link to="/about#clients" className="font-display text-xl font-semibold uppercase tracking-wide text-brand sm:text-2xl">
              + many more
            </Link>
          </Reveal>
        </div>
        <div className="container-x mt-16">
          <Testimonials />
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHead light eyebrow="Watch" title="BGSE in motion." text="Red carpets, radio rows, launches and the people behind them. See more on our YouTube channel." />
            </Reveal>
            <Reveal delay={100} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to="/portfolio#videos" variant="outline">
                All videos
              </Button>
              <Button href={channelUrl} variant="outline">
                YouTube
              </Button>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-8">
            <YouTube id={featuredVideo.id} title={featuredVideo.title} />
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="img-zoom relative overflow-hidden">
              <Img src="/images/team/brittany-gilman.webp" alt="Brittany Gilman with Ezekiel Elliott" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-brand px-5 py-3 text-ink">
                <p className="display text-2xl">Brittany Gilman, M.Ed</p>
                <p className="text-xs uppercase tracking-[0.18em]">Founder & CEO</p>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow>From the halfpipe to the boardroom</Eyebrow>
              <blockquote className="display mt-6 text-[clamp(2rem,4vw,3.6rem)] leading-[1] text-ink">
                “You need to position yourself as a force to be reckoned with in the industry. Your brand needs to be independent,
                brilliant, and influential.”
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                BGSE was founded in 2007 by former pro snowboarder and strength and conditioning coach Brittany Gilman as one of the
                first sports-specific marketing agencies of its kind. Two decades later she leads the agency from Los Angeles and
                London, and is the author of <em>No Stilettos on the Field</em>.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button to="/about" variant="ghost">
                  Meet the team
                </Button>
                <Button to="/blog/brittany-gilman-releases-new-sports-business-book" variant="ghost">
                  The book
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}

function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7000)
    return () => clearInterval(t)
  }, [])
  const t = testimonials[i]
  return (
    <Reveal className="grid gap-10 border-t border-line pt-12 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <Eyebrow>In their words</Eyebrow>
        <div className="mt-6 flex gap-2">
          {testimonials.map((x, idx) => (
            <button
              key={x.name}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show testimonial from ${x.name}`}
              className={`h-1 transition-all duration-300 ${idx === i ? 'w-10 bg-brand' : 'w-4 bg-ink/20 hover:bg-ink/40'}`}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-9">
        <blockquote key={t.name} className="display text-[clamp(1.8rem,3.6vw,3.2rem)] leading-[1.05] text-ink [animation:fade_.6s_ease]">
          “{t.quote}”
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <Img src={t.image} alt={t.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover grayscale" />
          <div>
            <p className="font-display text-xl font-bold uppercase">{t.name}</p>
            <p className="text-sm text-muted">{t.role}</p>
          </div>
        </div>
      </div>
      <style>{`@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </Reveal>
  )
}
