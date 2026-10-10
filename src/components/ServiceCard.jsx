import { ArrowRight, CalendarPlus, Check } from 'lucide-react'
import Button from './Button.jsx'
import Icon from './Icon.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'

/**
 * Medical service / department card.
 */
export default function ServiceCard({ service, onViewDetails }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-40 w-full overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={`${service.name} department at Iqara Hospital`}
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-teal-600 shadow-soft">
          <Icon name={service.icon} className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-300">{service.description}</p>

        <ul className="mt-4 space-y-1.5">
          {service.services.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-navy-400">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Button variant="ghost" size="sm" onClick={() => onViewDetails?.(service)} className="!px-2">
            View Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button to="/services#appointment" variant="mint" size="sm" className="ml-auto">
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Button>
        </div>
      </div>
    </article>
  )
}
