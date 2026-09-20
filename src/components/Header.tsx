import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site'
import { Close, Menu } from './Icons'
import { socialIcon } from '../lib/socialIcons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    // NOTE: no filter/transform/backdrop-filter on this element. Any of those would turn the
    // header into the containing block for the fixed mobile overlay and clip it to the bar.
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div
        className={`relative z-50 transition-all duration-500 ${
          open ? 'bg-ink' : scrolled ? 'bg-ink/85 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
          <Link to="/" onClick={close} className="flex items-center" aria-label="BG Sports Enterprises home">
            <img
              src="/images/logo/logo-light.webp"
              alt="BG Sports Enterprises"
              width={419}
              height={279}
              className={`w-auto transition-all duration-500 ${scrolled ? 'h-10' : 'h-12 sm:h-14'}`}
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {site.nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `eyebrow relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 ${
                    isActive ? 'text-white after:scale-x-100' : 'text-white/70'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="font-display bg-brand px-5 py-2.5 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:bg-white hover:text-ink"
            >
              Let’s talk
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <Close width={26} height={26} /> : <Menu width={26} height={26} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay: sibling of the blurred bar, so it is positioned against the viewport. */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-ink px-6 pt-28 pb-10 transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {[{ label: 'Home', to: '/' }, ...site.nav].map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              onClick={close}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              className={({ isActive }) =>
                `display border-b border-white/10 py-4 text-5xl transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${isActive ? 'text-brand' : 'text-white'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-5 pt-10 text-white/70">
          {site.socials.map((s) => {
            const Icon = socialIcon[s.icon]
            return (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} tabIndex={open ? 0 : -1} className="hover:text-brand">
                <Icon width={22} height={22} />
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
