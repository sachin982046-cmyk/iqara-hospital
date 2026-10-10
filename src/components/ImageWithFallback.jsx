import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * Image with a graceful fallback. If a remote photo fails to load
 * (offline dev, blocked CDN, expired asset), we render a neutral
 * placeholder instead of a broken image icon.
 */
export default function ImageWithFallback({ src, alt, className = '', imgClassName = '', ...props }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-teal-50 to-mint text-teal-600 ${className}`}
      >
        <ImageOff className="h-7 w-7" aria-hidden="true" />
        <span className="px-4 text-center text-xs font-medium">Image unavailable</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`}
      {...props}
    />
  )
}
