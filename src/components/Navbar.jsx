import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { hospital, navLinks } from '../data/hospitalData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // Add a subtle elevation/shadow once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
      isActive ? 'text-teal-700' : 'text-navy-400 hover:text-teal-600'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-navy-100/70 bg-offwhite/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      {/* Utility strip */}
      <div className="hidden bg-navy-500 text-white lg:block">
        <div className="container-page flex items-center justify-between py-1.5 text-xs">
          <span className="text-navy-100">{hospital.hours}</span>
          <a
            href={`tel:${hospital.emergency.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center gap-1.5 font-semibold text-mint hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            24/7 Emergency: {hospital.emergency}
          </a>
        </div>
      </div>

      <nav className="container-page flex items-center justify-between gap-4 py-3" aria-label="Primary">
        <Logo />

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/login" variant="outline" size="sm">
            Login
          </Button>
          <Button to="/register" size="sm">
            Register
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-navy-100 bg-white p-2.5 text-navy-500 shadow-soft lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-100/70 bg-white lg:hidden ${
          open ? 'max-h-[32rem] animate-fade-in' : 'max-h-0'
        } transition-all duration-300`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-3 text-base font-semibold ${
                    isActive ? 'bg-mint text-teal-700' : 'text-navy-400 hover:bg-offwhite'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2 grid grid-cols-2 gap-2">
            <Button to="/login" variant="outline" size="md">
              Login
            </Button>
            <Button to="/register" size="md">
              Register
            </Button>
          </li>
          <li className="mt-3">
            <a
              href={`tel:${hospital.emergency.replace(/[^+\d]/g, '')}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-navy-500 px-3 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              24/7 Emergency: {hospital.emergency}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
