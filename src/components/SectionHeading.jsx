/**
 * Consistent section heading used across pages.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: Heading = 'h2',
  className = '',
}) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`flex max-w-2xl flex-col gap-0 ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="text-2xl sm:text-3xl lg:text-4xl">{title}</Heading>
      {subtitle && <p className="text-base leading-relaxed text-navy-300 sm:text-lg">{subtitle}</p>}
    </div>
  )
}
