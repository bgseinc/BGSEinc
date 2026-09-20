import { useEffect } from 'react'
import { site } from '../data/site'

export function useSeo(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.shortName}` : `${site.name} | ${site.tagline}`
    if (description) {
      let el = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!el) {
        el = document.createElement('meta')
        el.name = 'description'
        document.head.appendChild(el)
      }
      el.content = description
    }
  }, [title, description])
}
