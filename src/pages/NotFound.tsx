import { Button } from '../components/ui'
import { useSeo } from '../hooks/useSeo'

export default function NotFound() {
  useSeo('Page not found')
  return (
    <section className="flex min-h-[80vh] items-center bg-ink pt-32 text-white">
      <div className="container-x">
        <p className="eyebrow text-brand">404</p>
        <h1 className="display mt-4 text-[clamp(3rem,10vw,9rem)]">Out of bounds.</h1>
        <p className="mt-6 max-w-md text-white/70">The page you’re looking for has moved or never existed. Let’s get you back in the game.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/">Home</Button>
          <Button to="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}
