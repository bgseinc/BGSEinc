import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'
import { Button, Eyebrow, PageHeader } from '../components/ui'
import { socialIcon } from '../lib/socialIcons'
import { site } from '../data/site'
import { useSeo } from '../hooks/useSeo'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  useSeo('Contact', 'Ready to do this? Let’s get to work. Contact BG Sports Enterprises in Los Angeles and London.')
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('company_website')) return // honeypot
    const payload = Object.fromEntries(data.entries())

    if (site.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error(String(res.status))
        setStatus('sent')
        form.reset()
      } catch {
        setStatus('error')
      }
      return
    }

    // Fallback: open the visitor's email client with the message pre-filled.
    const subject = encodeURIComponent(`Website inquiry from ${payload.name}`)
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || '-'}\nCompany: ${payload.company || '-'}\nI am: ${payload.role}\n\n${payload.message}`,
    )
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Ready to do this? <span className="text-brand">Let’s get to work.</span></>} text="Athletes, teams, brands and agencies: tell us where you want to go and we’ll build the game plan to get there." />

      <section className="bg-paper py-16 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Offices</Eyebrow>
              <ul className="mt-5 space-y-6">
                <li>
                  <p className="display text-3xl">Los Angeles</p>
                  <p className="text-muted">California, USA</p>
                </li>
                <li>
                  <p className="display text-3xl">London</p>
                  <p className="text-muted">United Kingdom</p>
                </li>
              </ul>
              <Eyebrow className="mt-12">Email</Eyebrow>
              <a href={`mailto:${site.contactEmail}`} className="mt-3 block font-display text-2xl font-bold uppercase text-ink hover:text-brand">
                {site.contactEmail}
              </a>
              <Eyebrow className="mt-12">Social</Eyebrow>
              <div className="mt-4 flex flex-wrap gap-3">
                {site.socials.map((s) => {
                  const Icon = socialIcon[s.icon]
                  return (
                    <a key={s.href} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="inline-flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white">
                      <Icon width={20} height={20} />
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            {status === 'sent' ? (
              <div className="bg-ink p-10 text-white">
                <p className="eyebrow text-brand">Message on its way</p>
                <h2 className="display mt-4 text-5xl">Thank you.</h2>
                <p className="mt-4 text-white/70">
                  {site.formEndpoint
                    ? 'We received your message and will be in touch shortly.'
                    : 'Your email client should have opened with the message pre-filled. If it did not, email us directly at ' + site.contactEmail + '.'}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Company / Team" name="company" />
                <label className="sm:col-span-2">
                  <span className="eyebrow text-muted">I am</span>
                  <select name="role" className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-lg outline-none transition-colors focus:border-brand" defaultValue="Athlete">
                    {['Athlete', 'Team or league', 'Brand', 'Agency or partner', 'Media', 'Other'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="eyebrow text-muted">Message</span>
                  <textarea name="message" required rows={5} className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-lg outline-none transition-colors focus:border-brand" />
                </label>
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                <div className="sm:col-span-2 flex flex-wrap items-center gap-6">
                  <Button type="submit" size="lg" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending' : 'Send message'}
                  </Button>
                  {status === 'error' && <p className="text-sm text-brand">Something went wrong. Please email us at {site.contactEmail}.</p>}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="eyebrow text-muted">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <input name={name} type={type} required={required} className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-lg outline-none transition-colors focus:border-brand" />
    </label>
  )
}
