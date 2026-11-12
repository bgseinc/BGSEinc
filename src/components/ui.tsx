import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

type ButtonProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'white'
  className?: string
  size?: 'md' | 'lg'
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variants = {
  primary: 'bg-brand text-ink hover:bg-brand-dark',
  outline: 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink',
  ghost: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white',
  white: 'bg-white text-ink hover:bg-ink hover:text-white',
}

export function Button({ to, href, children, variant = 'primary', className = '', size = 'md', type = 'button', disabled }: ButtonProps) {
  const cls = `group inline-flex items-center justify-center gap-3 font-display text-base font-bold uppercase tracking-[0.08em] transition-all duration-300 disabled:opacity-60 ${
    size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'
  } ${variants[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href)
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  return (
    <button type={type} className={cls} disabled={disabled}>
      {inner}
    </button>
  )
}

export function Eyebrow({ children, className = '', light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return <p className={`eyebrow-tick ${light ? 'text-white/70' : 'text-muted'} ${className}`}>{children}</p>
}

export function SectionHead({
  eyebrow,
  title,
  text,
  light = false,
  align = 'left',
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  text?: string
  light?: boolean
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow light={light} className={align === 'center' ? 'justify-center' : ''}>{eyebrow}</Eyebrow>}
      <h2 className={`display mt-4 text-[clamp(2.4rem,5.2vw,4.5rem)] ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}

export function PageHeader({ eyebrow, title, text, children }: { eyebrow: string; title: ReactNode; text?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-16 text-white sm:pt-44 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="container-x relative">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="display mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)]">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{text}</p>}
        {children}
      </div>
    </section>
  )
}

export function Cta({ light = false }: { light?: boolean }) {
  return (
    <section className={`${light ? 'bg-paper-2 text-ink' : 'bg-brand text-ink'} relative overflow-hidden`}>
      <div className="container-x flex flex-col items-start justify-between gap-10 py-20 sm:py-28 lg:flex-row lg:items-end">
        <div>
          <p className={`eyebrow ${light ? 'text-muted' : 'text-ink/70'}`}>Ready to do this?</p>
          <h2 className="display mt-4 text-[clamp(3rem,9vw,8rem)]">
            Let’s get <br className="hidden sm:block" /> to work.
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button to="/contact" variant={light ? 'primary' : 'white'} size="lg">
            Contact us
          </Button>
          <Button to="/services" variant="ghost" size="lg">
            Our services
          </Button>
        </div>
      </div>
    </section>
  )
}

export function Marquee({ items, className = '', duration = 40 }: { items: string[]; className?: string; duration?: number }) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden>
      <div className="marquee-track" style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}>
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-6 text-[clamp(1.6rem,3vw,2.6rem)] whitespace-nowrap">{it}</span>
            <span className="h-2 w-2 rounded-full bg-brand" />
          </span>
        ))}
      </div>
    </div>
  )
}

