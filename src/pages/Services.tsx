import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Cta, PageHeader } from '../components/ui'
import { ArrowRight } from '../components/Icons'
import { services } from '../data/services'
import { useSeo } from '../hooks/useSeo'

export default function Services() {
  useSeo('Services', 'Brand development, marketing, media & PR, digital branding, events, experiences, international strategy, management and more from BG Sports Enterprises.')
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything a career needs <span className="text-brand">off the field.</span>
          </>
        }
        text="Customized and evolving strategies for athletes, teams, brands and agencies. Pick a discipline, or let us build the whole game plan."
      />
      <section className="bg-paper py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80} className="bg-paper">
                <Link to={`/services/${s.slug}`} className="group flex h-full flex-col p-6 transition-colors duration-500 hover:bg-ink hover:text-white sm:p-8">
                  <div className="img-zoom aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-6 font-display text-sm font-semibold tracking-[0.2em] text-brand">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="display mt-2 text-3xl">{s.title}</h2>
                  <p className="mt-3 flex-1 text-muted transition-colors group-hover:text-white/70">{s.short}</p>
                  <span className="link-arrow mt-5 text-sm uppercase tracking-[0.14em] group-hover:text-brand">
                    Explore <ArrowRight width={16} height={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
