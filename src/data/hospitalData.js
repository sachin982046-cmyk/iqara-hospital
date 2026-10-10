/**
 * Iqara Hospital — sample data
 * ------------------------------------------------------------------
 * IMPORTANT: Every doctor, credential, statistic and testimonial below
 * is FICTIONAL sample content created for this frontend demonstration.
 * None of it represents real medical professionals or verified claims.
 * ------------------------------------------------------------------
 */

export const hospital = {
  name: 'Iqara Hospital',
  tagline: 'Your Health. Our Priority.',
  phone: '+1 (555) 012-4400',
  emergency: '+1 (555) 012-9111',
  email: 'care@iqarahospital.example',
  address: '24 Wellness Avenue, Riverside District, Springfield 54321',
  hours: 'Outpatient: Mon–Sat, 8:00 AM – 8:00 PM · Emergency: 24/7',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/services#doctors' },
  { label: 'Patient Portal', to: '/login' },
]

export const highlights = [
  {
    id: 'doctors',
    icon: 'Stethoscope',
    title: 'Experienced Doctors',
    text: 'A multidisciplinary team of specialists across eight core departments.',
  },
  {
    id: 'care',
    icon: 'HeartHandshake',
    title: 'Patient-Focused Care',
    text: 'Care plans built around you, with clear communication at every step.',
  },
  {
    id: 'facilities',
    icon: 'Building2',
    title: 'Modern Facilities',
    text: 'Contemporary diagnostics, imaging and comfortable patient rooms.',
  },
  {
    id: 'safety',
    icon: 'ShieldCheck',
    title: 'Clean & Safe',
    text: 'Strict hygiene and safety protocols across every ward and clinic.',
  },
]

/** Illustrative statistics only — not verified real-world figures. */
export const stats = [
  { id: 'departments', value: '8', label: 'Medical departments', note: 'Illustrative' },
  { id: 'specialists', value: '40+', label: 'Sample specialists', note: 'Illustrative' },
  { id: 'support', value: '24/7', label: 'Emergency support', note: 'Illustrative' },
  { id: 'satisfaction', value: '4.9/5', label: 'Patient experience score', note: 'Illustrative' },
]

export const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: 'HeartPulse',
    description:
      'Heart and vascular care including consultations, ECG, echocardiography and ongoing cardiac monitoring.',
    image:
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=900&q=80',
    services: ['Cardiac consultation', 'ECG & echocardiography', 'Blood pressure management', 'Heart-health screening'],
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: 'Brain',
    description:
      'Diagnosis and management of conditions affecting the brain, spine and nervous system.',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
    services: ['Headache & migraine clinic', 'EEG diagnostics', 'Stroke risk assessment', 'Neuro consultation'],
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: 'Bone',
    description:
      'Care for bones, joints and muscles, from sports injuries to joint replacement consultations.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
    services: ['Fracture care', 'Joint pain clinic', 'Sports injury rehab', 'Post-operative follow-up'],
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: 'Baby',
    description:
      'Gentle, family-centred healthcare for infants, children and adolescents.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    services: ['Well-child visits', 'Immunisation advice', 'Growth monitoring', 'Childhood illness care'],
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    icon: 'Sparkles',
    description:
      'Diagnosis and treatment for skin, hair and nail conditions with a focus on comfort.',
    image:
      'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&q=80',
    services: ['Acne & eczema care', 'Skin screening', 'Allergy-related skin issues', 'Minor skin procedures'],
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    icon: 'Stethoscope',
    description:
      'Your first point of care for everyday concerns, chronic conditions and health check-ups.',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
    services: ['Routine consultation', 'Chronic disease management', 'Preventive health checks', 'Referrals'],
  },
  {
    id: 'dentistry',
    name: 'Dentistry',
    icon: 'Smile',
    description:
      'Preventive, restorative and cosmetic dental care in a calm, modern clinic.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    services: ['Check-ups & cleaning', 'Fillings & restorations', 'Root canal consultation', 'Whitening advice'],
  },
  {
    id: 'diagnostics',
    name: 'Diagnostic Services',
    icon: 'ScanLine',
    description:
      'Reliable laboratory and imaging services that support fast, accurate clinical decisions.',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80',
    services: ['Pathology laboratory', 'X-ray & ultrasound', 'Health screening panels', 'Sample collection'],
  },
]

export const doctors = [
  {
    id: 'd1',
    name: 'Dr. Amara Okafor',
    specialty: 'Cardiology',
    departmentId: 'cardiology',
    qualification: 'MD, DM (Cardiology) — sample credential',
    experience: '14 years (sample)',
    availability: 'Mon, Wed, Fri · 9:00 AM – 1:00 PM',
    languages: 'English, French',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd2',
    name: 'Dr. Daniel Reyes',
    specialty: 'Neurology',
    departmentId: 'neurology',
    qualification: 'MD, DM (Neurology) — sample credential',
    experience: '11 years (sample)',
    availability: 'Tue, Thu · 10:00 AM – 3:00 PM',
    languages: 'English, Spanish',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd3',
    name: 'Dr. Priya Nair',
    specialty: 'Orthopedics',
    departmentId: 'orthopedics',
    qualification: 'MS (Orthopedics) — sample credential',
    experience: '12 years (sample)',
    availability: 'Mon–Thu · 8:30 AM – 12:30 PM',
    languages: 'English, Hindi',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd4',
    name: 'Dr. Hannah Brooks',
    specialty: 'Pediatrics',
    departmentId: 'pediatrics',
    qualification: 'MD (Pediatrics) — sample credential',
    experience: '9 years (sample)',
    availability: 'Mon–Fri · 9:00 AM – 12:00 PM',
    languages: 'English',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd5',
    name: 'Dr. Leo Marchetti',
    specialty: 'Dermatology',
    departmentId: 'dermatology',
    qualification: 'MD (Dermatology) — sample credential',
    experience: '8 years (sample)',
    availability: 'Wed, Fri · 1:00 PM – 5:00 PM',
    languages: 'English, Italian',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd6',
    name: 'Dr. Sofia Alvarez',
    specialty: 'General Medicine',
    departmentId: 'general-medicine',
    qualification: 'MBBS, MD (Internal Medicine) — sample credential',
    experience: '10 years (sample)',
    availability: 'Mon–Sat · 8:00 AM – 11:00 AM',
    languages: 'English, Spanish',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd7',
    name: 'Dr. Omar Haddad',
    specialty: 'Dentistry',
    departmentId: 'dentistry',
    qualification: 'BDS, MDS (Prosthodontics) — sample credential',
    experience: '13 years (sample)',
    availability: 'Tue, Thu, Sat · 10:00 AM – 2:00 PM',
    languages: 'English, Arabic',
    image:
      'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd8',
    name: 'Dr. Mei Lin',
    specialty: 'Diagnostic Services',
    departmentId: 'diagnostics',
    qualification: 'MD (Radiology) — sample credential',
    experience: '15 years (sample)',
    availability: 'Mon–Fri · 11:00 AM – 4:00 PM',
    languages: 'English, Mandarin',
    image:
      'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=80',
  },
]

/** The memorable "Your Care Journey" steps. */
export const careJourney = [
  {
    step: 1,
    title: 'Explore medical services',
    text: 'Browse our departments and treatments to understand the care that fits your needs.',
    icon: 'Compass',
    to: '/services',
    cta: 'Browse services',
  },
  {
    step: 2,
    title: 'Find a suitable doctor',
    text: 'Search and filter specialists by department, experience and availability.',
    icon: 'UserRoundSearch',
    to: '/services#doctors',
    cta: 'Find a doctor',
  },
  {
    step: 3,
    title: 'Contact the hospital',
    text: 'Reach out to enquire about an appointment — our team will guide you through the next steps.',
    icon: 'CalendarCheck',
    to: '/#appointment',
    cta: 'Enquire now',
  },
]

export const testimonials = [
  {
    id: 't1',
    quote:
      'The care team explained every step clearly and made a stressful visit feel calm and manageable.',
    name: 'Sample Patient A',
    detail: 'General Medicine · sample testimonial',
  },
  {
    id: 't2',
    quote:
      'Booking was simple and the staff were warm and attentive from the moment we arrived.',
    name: 'Sample Patient B',
    detail: 'Pediatrics · sample testimonial',
  },
  {
    id: 't3',
    quote:
      'Modern facilities and a genuinely patient-first approach. I felt looked after throughout.',
    name: 'Sample Patient C',
    detail: 'Orthopedics · sample testimonial',
  },
]

export const careApproach = [
  {
    id: 'listen',
    icon: 'Ear',
    title: 'We listen first',
    text: 'Every visit starts with understanding your concerns, history and goals — not just symptoms.',
  },
  {
    id: 'plan',
    icon: 'ClipboardList',
    title: 'A clear care plan',
    text: 'You receive a plain-language plan with next steps, so you always know what happens next.',
  },
  {
    id: 'support',
    icon: 'HeartHandshake',
    title: 'Support that continues',
    text: 'From follow-ups to family guidance, our team stays alongside you through the journey.',
  },
]
