import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Siren } from 'lucide-react'
import Logo from './Logo.jsx'
import { hospital, departments } from '../data/hospitalData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-navy-100/70 bg-navy-500 text-navy-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-100/80">
            Compassionate care, experienced doctors and modern healthcare services for you and your
            family.
          </p>
          <p className="mt-4 rounded-lg bg-navy-600/60 p-3 text-xs leading-relaxed text-navy-100/70">
            Demonstration website. Doctors, credentials and statistics are fictional sample content.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-mint" to="/">Home</Link></li>
            <li><Link className="hover:text-mint" to="/services">Services &amp; Doctors</Link></li>
            <li><Link className="hover:text-mint" to="/services#doctors">Find a Doctor</Link></li>
            <li><Link className="hover:text-mint" to="/login">Patient Portal</Link></li>
            <li><Link className="hover:text-mint" to="/register">Create Account</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Departments</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {departments.slice(0, 5).map((d) => (
              <li key={d.id}>
                <Link className="hover:text-mint" to="/services">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <span>{hospital.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <a className="hover:text-mint" href={`tel:${hospital.phone.replace(/[^+\d]/g, '')}`}>
                {hospital.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Siren className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <a className="hover:text-mint" href={`tel:${hospital.emergency.replace(/[^+\d]/g, '')}`}>
                Emergency: {hospital.emergency}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <a className="hover:text-mint" href={`mailto:${hospital.email}`}>
                {hospital.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-400/40">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-100/70 sm:flex-row">
          <p>© {year} Iqara Hospital. Frontend demonstration — not a real medical service.</p>
          <p>{hospital.hours}</p>
        </div>
      </div>
    </footer>
  )
}
