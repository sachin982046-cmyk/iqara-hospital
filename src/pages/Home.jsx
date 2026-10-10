import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarPlus,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Star,
} from 'lucide-react'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import ImageWithFallback from '../components/ImageWithFallback.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import AppointmentEnquiry from '../components/AppointmentEnquiry.jsx'
import {
  careApproach,
  careJourney,
  departments,
  doctors,
  highlights,
  hospital,
  stats,
  testimonials,
} from '../data/hospitalData.js'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80'
const CARE_IMAGE =
  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80'

export default function Home() {
  const featuredDepartments = departments.slice(0, 4)
  const featuredDoctors = doctors.slice(0, 3)

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mint/70 via-offwhite to-offwhite">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl"
        />
        <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
              Trusted, patient-first healthcare
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              Your Health. <span className="text-teal-600">Our Priority.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-300 sm:text-lg">
              Compassionate care, experienced doctors, and modern healthcare services for you and your
              family.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/services" size="lg">
                Explore Our Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/login" variant="outline" size="lg">
                Patient Login
              </Button>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                { icon: Clock3, label: 'Emergency support', value: '24/7' },
                { icon: ShieldCheck, label: 'Safety protocols', value: 'Strict' },
                { icon: MapPin, label: 'Riverside District', value: 'On-site' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <item.icon className="h-5 w-5 text-teal-500" aria-hidden="true" />
                  <dd className="text-lg font-bold text-navy">{item.value}</dd>
                  <dt className="text-xs text-navy-300">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-in">
            <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-card">
              <ImageWithFallback
                src={HERO_IMAGE}
                alt="Iqara Hospital modern reception and care environment"
                className="h-[22rem] w-full object-cover sm:h-[26rem]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-navy-100/70 bg-white/95 p-4 shadow-card backdrop-blur sm:left-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint text-teal-600">
                <CalendarPlus className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-navy">Same-week enquiries</p>
                <p className="text-xs text-navy-300">Sample availability · illustrative only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Highlights */}
      <section className="section" aria-labelledby="highlights-title">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Iqara"
            title="Care built around people, backed by modern facilities"
            subtitle="From your first enquiry to follow-up care, every part of the Iqara experience is designed to feel calm, clear and dependable."
          />
          <h2 id="highlights-title" className="sr-only">
            Hospital highlights
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-teal-600">
                  <Icon name={item.icon} className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Illustrative statistics */}
          <div className="mt-8 grid gap-4 rounded-2xl bg-navy-500 p-6 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center sm:text-left">
                <p className="text-3xl font-extrabold text-mint">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-navy-100">{stat.label}</p>
                <p className="text-[11px] uppercase tracking-wider text-navy-100/60">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Departments */}
      <section className="section bg-white" aria-labelledby="departments-title">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured departments"
              title="Specialist care across our core departments"
              subtitle="Explore a selection of our medical departments. Each is supported by dedicated clinicians and modern diagnostic facilities."
            />
            <Button to="/services" variant="outline">
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <h2 id="departments-title" className="sr-only">
            Featured departments
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDepartments.map((dept) => (
              <ServiceCard key={dept.id} service={dept} onViewDetails={() => {}} />
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Your Care Journey */}
      <section className="section" aria-labelledby="journey-title">
        <div className="container-page">
          <SectionHeading
            eyebrow="Your Care Journey"
            title="Three simple steps to the care you need"
            subtitle="A clear, guided path — no guesswork, no dead ends."
          />
          <h2 id="journey-title" className="sr-only">
            Your care journey
          </h2>

          <ol className="relative mt-14 grid gap-6 lg:grid-cols-3">
            {/* Connecting line for larger screens */}
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 lg:block"
            />
            {careJourney.map((step) => (
              <li key={step.step} className="relative">
                <div className="card group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal-500 text-lg font-extrabold text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                      {step.step}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint text-teal-600">
                      <Icon name={step.icon} className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-300">{step.text}</p>
                  <Link
                    to={step.to}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-600"
                  >
                    {step.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------- Featured doctors */}
      <section className="section bg-white" aria-labelledby="doctors-title">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Meet the team"
              title="Experienced specialists, ready to help"
              subtitle="Sample profiles shown for demonstration. All names, credentials and availability are fictional."
            />
            <Button to="/services#doctors" variant="outline">
              Browse all doctors
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <h2 id="doctors-title" className="sr-only">
            Featured doctors
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} onViewDetails={() => {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Patient care approach */}
      <section className="section" aria-labelledby="approach-title">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-card">
            <ImageWithFallback
              src={CARE_IMAGE}
              alt="A healthcare professional talking with a patient at Iqara Hospital"
              className="h-80 w-full object-cover lg:h-[28rem]"
            />
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Patient-focused care"
              title="Healthcare that listens, explains and supports"
              subtitle="We believe great care starts with being heard. Our approach keeps you informed and involved at every step."
            />
            <h2 id="approach-title" className="sr-only">
              Our patient-care approach
            </h2>

            <ul className="mt-8 space-y-5">
              {careApproach.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-teal-600">
                    <Icon name={item.icon} className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-300">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button to="/services" variant="secondary">
                Find the right care
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Appointment CTA */}
      <section className="section pt-0">
        <div className="container-page">
          <AppointmentEnquiry />
        </div>
      </section>

      {/* --------------------------------------------------------- Testimonials */}
      <section className="section bg-white" aria-labelledby="testimonials-title">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient voices"
            title="What patients say about their experience"
            subtitle="Sample testimonials shown for demonstration purposes only."
          />
          <h2 id="testimonials-title" className="sr-only">
            Sample testimonials
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.id} className="card flex h-full flex-col p-6">
                <Quote className="h-7 w-7 text-teal-200" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-400">
                  “{t.quote}”
                </blockquote>
                <div className="mt-5 flex items-center gap-1 text-teal-500" aria-label="Five out of five stars (sample)">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <figcaption className="mt-3 border-t border-navy-100/70 pt-3">
                  <span className="block text-sm font-bold text-navy">{t.name}</span>
                  <span className="block text-xs text-navy-300">{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Contact strip */}
      <section className="section pt-0" aria-labelledby="contact-title">
        <div className="container-page">
          <div className="grid gap-6 rounded-[2rem] bg-gradient-to-br from-teal-600 to-navy-500 p-8 text-white lg:grid-cols-3 lg:p-10">
            <div className="lg:col-span-2">
              <h2 id="contact-title" className="text-2xl font-extrabold sm:text-3xl text-white">
                Need to reach us right away?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">
                Our emergency line is staffed around the clock. For general enquiries, reach us by phone
                or email and our team will help you find the right department.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${hospital.emergency.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-mint" aria-hidden="true" />
                Emergency: {hospital.emergency}
              </a>
              <a
                href={`mailto:${hospital.email}`}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
              >
                <MapPin className="h-4 w-4 text-mint" aria-hidden="true" />
                {hospital.address}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
