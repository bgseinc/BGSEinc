import type { ImgHTMLAttributes } from 'react'
import { imageSizes } from '../data/imageSizes'

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string }

const DEFAULT_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'

/** Serves -640 / -1000 variants via srcset when they exist; falls back to a plain <img>. */
export default function Img({ src, sizes, alt = '', loading = 'lazy', decoding = 'async', ...rest }: Props) {
  const widths = imageSizes[src]
  if (!widths) return <img src={src} alt={alt} loading={loading} decoding={decoding} {...rest} />
  const base = src.replace(/\.webp$/, '')
  const srcSet = widths
    .map((w, i) => (i === widths.length - 1 ? `${src} ${w}w` : `${base}-${w}.webp ${w}w`))
    .join(', ')
  return <img src={src} srcSet={srcSet} sizes={sizes ?? DEFAULT_SIZES} alt={alt} loading={loading} decoding={decoding} {...rest} />
}
