import { BadgeCheck, CalendarPlus, Clock3, Globe2 } from 'lucide-react'
import Button from './Button.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'

/**
 * Doctor profile card with sample credentials and availability.
 */
export default function DoctorCard({ doctor, onViewDetails }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-56 w-full overflow-hidden bg-teal-50">
        <ImageWithFallback
          src={doctor.image}
          alt={`Portrait placeholder for ${doctor.name}`}
          className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-teal-700 shadow-soft">
          {doctor.specialty}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy">{doctor.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-navy-300">
          <BadgeCheck className="h-3.5 w-3.5 text-teal-500" aria-hidden="true" />
          {doctor.qualification}
        </p>

        <dl className="mt-4 space-y-2 text-sm text-navy-400">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
            <dt className="sr-only">Experience</dt>
            <dd>{doctor.experience}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
            <dt className="sr-only">Languages</dt>
            <dd>{doctor.languages}</dd>
          </div>
        </dl>

        <p className="mt-4 rounded-xl bg-mint/70 px-3 py-2 text-xs font-semibold text-teal-700">
          Available: {doctor.availability}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Button variant="ghost" size="sm" onClick={() => onViewDetails?.(doctor)} className="!px-2">
            View Details
          </Button>
          <Button to="/services#appointment" variant="primary" size="sm" className="ml-auto">
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Button>
        </div>
      </div>
    </article>
  )
}
