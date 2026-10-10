import { useMemo, useState } from 'react'
import {
  BadgeCheck,
  CalendarPlus,
  Check,
  Clock3,
  Globe2,
  Search,
  SlidersHorizontal,
  Stethoscope,
  UserRoundSearch,
  X,
} from 'lucide-react'
import Button from '../components/Button.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import FormInput from '../components/FormInput.jsx'
import ImageWithFallback from '../components/ImageWithFallback.jsx'
import Modal from '../components/Modal.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import AppointmentEnquiry from '../components/AppointmentEnquiry.jsx'
import { departments, doctors } from '../data/hospitalData.js'

const ALL = 'all'

export default function Services() {
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState(ALL)
  const [activeService, setActiveService] = useState(null)
  const [activeDoctor, setActiveDoctor] = useState(null)

  const q = query.trim().toLowerCase()

  const filteredServices = useMemo(() => {
    return departments.filter((d) => {
      const matchesDept = department === ALL || d.id === department
      const haystack = `${d.name} ${d.description} ${d.services.join(' ')}`.toLowerCase()
      return matchesDept && (!q || haystack.includes(q))
    })
  }, [q, department])

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesDept = department === ALL || doc.departmentId === department
      const haystack = `${doc.name} ${doc.specialty} ${doc.qualification} ${doc.languages}`.toLowerCase()
      return matchesDept && (!q || haystack.includes(q))
    })
  }, [q, department])

  const noResults = filteredServices.length === 0 && filteredDoctors.length === 0
  const hasFilters = q || department !== ALL

  const clearFilters = () => {
    setQuery('')
    setDepartment(ALL)
  }

  return (
    <>
      <PageHeader
        eyebrow="Services & Doctors"
        title="Find the Right Care for You."
        description="Search our medical departments, treatments and sample specialist profiles. Filter by department to narrow your results."
      />

      {/* ------------------------------------------------ Search + filters */}
      <div className="container-page mt-8">
        <div className="card p-4 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <div className="relative">
              <label htmlFor="service-search" className="sr-only">
                Search doctors, specialties or services
              </label>
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-200"
                aria-hidden="true"
              />
              <input
                id="service-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search doctors, specialties or services…"
                className="w-full rounded-xl border border-navy-100 bg-white py-3 pl-10 pr-4 text-sm text-slateink placeholder:text-navy-200 focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
              <label htmlFor="department-filter" className="sr-only">
                Filter by department
              </label>
              <select
                id="department-filter"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full rounded-xl border border-navy-100 bg-white px-3.5 py-3 text-sm text-slateink focus:border-teal-500 focus:outline-none"
              >
                <option value={ALL}>All departments</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setDepartment(ALL)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                department === ALL ? 'bg-teal-500 text-white' : 'bg-offwhite text-navy-400 hover:bg-mint'
              }`}
            >
              All
            </button>
            {departments.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDepartment(d.id)}
                aria-pressed={department === d.id}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  department === d.id ? 'bg-teal-500 text-white' : 'bg-offwhite text-navy-400 hover:bg-mint'
                }`}
              >
                {d.name}
              </button>
            ))}

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-teal-700 hover:bg-mint"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          <p className="mt-3 text-xs text-navy-300" aria-live="polite">
            Showing {filteredServices.length} service{filteredServices.length === 1 ? '' : 's'} and{' '}
            {filteredDoctors.length} doctor{filteredDoctors.length === 1 ? '' : 's'}
            {q ? ` for “${query.trim()}”` : ''}.
          </p>
        </div>
      </div>

      {/* --------------------------------------------------- Empty state */}
      {noResults && (
        <div className="container-page mt-10">
          <div className="card flex flex-col items-center gap-4 p-10 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-mint text-teal-600">
              <Search className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-bold text-navy">No matches found</h2>
            <p className="max-w-md text-sm text-navy-300">
              We couldn&apos;t find services or doctors matching your search. Try a different term or
              clear the filters to see everything.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------ Services */}
      {filteredServices.length > 0 && (
        <section className="container-page mt-12" aria-labelledby="services-list-title">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-teal-600">
              <Stethoscope className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 id="services-list-title" className="text-xl font-bold sm:text-2xl">
              Medical services
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} onViewDetails={setActiveService} />
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------- Doctors */}
      <section id="doctors" className="container-page mt-14 scroll-mt-24" aria-labelledby="doctors-list-title">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-teal-600">
            <UserRoundSearch className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 id="doctors-list-title" className="text-xl font-bold sm:text-2xl">
              Our specialists
            </h2>
            <p className="text-xs text-navy-300">
              Sample profiles — fictional names, credentials and availability.
            </p>
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} onViewDetails={setActiveDoctor} />
            ))}
          </div>
        ) : (
          <div className="mt-6 card p-8 text-center">
            <p className="text-sm text-navy-300">
              No doctors match the current filters. Try another department or search term.
            </p>
          </div>
        )}
      </section>

      {/* ------------------------------------------------- Book appointment */}
      <section className="container-page mt-16">
        <AppointmentEnquiry compact />
      </section>

      {/* ------------------------------------------------ Service details modal */}
      <Modal
        open={Boolean(activeService)}
        onClose={() => setActiveService(null)}
        title={activeService ? `${activeService.name}` : ''}
      >
        {activeService && (
          <div>
            <div className="overflow-hidden rounded-xl">
              <ImageWithFallback
                src={activeService.image}
                alt={`${activeService.name} department`}
                className="h-44 w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-400">{activeService.description}</p>
            <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-navy">
              What this department offers
            </h3>
            <ul className="mt-3 space-y-2">
              {activeService.services.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy-400">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/services#appointment" onClick={() => setActiveService(null)}>
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </Button>
              <Button variant="ghost" onClick={() => setActiveService(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* ------------------------------------------------- Doctor details modal */}
      <Modal
        open={Boolean(activeDoctor)}
        onClose={() => setActiveDoctor(null)}
        title={activeDoctor ? activeDoctor.name : ''}
      >
        {activeDoctor && (
          <div>
            <div className="overflow-hidden rounded-xl">
              <ImageWithFallback
                src={activeDoctor.image}
                alt={`Portrait placeholder for ${activeDoctor.name}`}
                className="h-52 w-full object-cover object-top"
              />
            </div>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-teal-700">
              {activeDoctor.specialty}
            </p>
            <dl className="mt-4 space-y-3 text-sm text-navy-400">
              <div className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-navy">Qualification</dt>
                  <dd>{activeDoctor.qualification}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-navy">Experience</dt>
                  <dd>{activeDoctor.experience}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-navy">Languages</dt>
                  <dd>{activeDoctor.languages}</dd>
                </div>
              </div>
            </dl>
            <p className="mt-4 rounded-xl bg-mint/70 px-3 py-2 text-xs font-semibold text-teal-700">
              Available: {activeDoctor.availability}
            </p>
            <p className="mt-3 text-xs text-navy-300">
              This is a fictional sample profile created for a frontend demonstration.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/services#appointment" onClick={() => setActiveDoctor(null)}>
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </Button>
              <Button variant="ghost" onClick={() => setActiveDoctor(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
