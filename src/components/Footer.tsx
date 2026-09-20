import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { services } from '../data/services'
import { socialIcon } from '../lib/socialIcons'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img src="/images/logo/logo-light.webp" alt="BG Sports Enterprises" width={419} height={279} className="h-16 w-auto" />
          <p className="mt-6 max-w-sm text-white/60">
            {site.tagline}. {site.slogan} Building globally since {site.founded} from {site.hubs.join(' and ')}.
          </p>
          <div className="mt-8 flex items-center gap-4 text-white/60">
            {site.socials.map((s) => {
              const Icon = socialIcon[s.icon]
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/15 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon width={20} height={20} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/50">Agency</p>
          <ul className="mt-5 space-y-3">
            {[{ label: 'Home', to: '/' }, ...site.nav].map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/80 transition-colors hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-white/50">Services</p>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-white/80 transition-colors hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/50">Offices</p>
          <ul className="mt-5 space-y-3 text-white/80">
            <li>Los Angeles, CA</li>
            <li>London, UK</li>
          </ul>
          <p className="eyebrow mt-8 text-white/50">Contact</p>
          <a href={`mailto:${site.contactEmail}`} className="mt-4 inline-block text-white/80 transition-colors hover:text-brand">
            {site.contactEmail}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs uppercase tracking-[0.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BG Sports Enterprises Inc. All rights reserved.</p>
          <p>International Sports Branding Agency · Est. {site.founded}</p>
        </div>
      </div>
    </footer>
  )
}
