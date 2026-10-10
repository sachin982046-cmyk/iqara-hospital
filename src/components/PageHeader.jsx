/**
 * Shared page header for interior pages (Services, Login, Register).
 */
export default function PageHeader({ eyebrow, title, description, children, align = 'left' }) {
  return (
    <header
      className={`container-page pt-10 sm:pt-14 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <div className={align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'}>
        {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-navy-300 sm:text-lg">{description}</p>
        )}
      </div>
      {children && <div className="mt-8">{children}</div>}
    </header>
  )
}
