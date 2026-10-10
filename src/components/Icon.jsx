import {
  Baby,
  Bone,
  Brain,
  Building2,
  CalendarCheck,
  ClipboardList,
  Compass,
  Ear,
  HeartHandshake,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  UserRoundSearch,
} from 'lucide-react'

/**
 * Maps the string icon names used in hospitalData.js to Lucide
 * components, keeping the data file free of JSX/imports.
 */
const iconMap = {
  Baby,
  Bone,
  Brain,
  Building2,
  CalendarCheck,
  ClipboardList,
  Compass,
  Ear,
  HeartHandshake,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  UserRoundSearch,
}

export default function Icon({ name, ...props }) {
  const Component = iconMap[name] ?? Stethoscope
  return <Component {...props} />
}
