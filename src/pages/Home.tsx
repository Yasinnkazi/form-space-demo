import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../sections/Hero'
import Philosophy from '../sections/Philosophy'
import Projects from '../sections/Projects'
import Features from '../sections/Features'
import Team from '../sections/Team'
import Services from '../sections/Services'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Projects', href: '#projects' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  return (
    <main className="bg-ink-950 text-white overflow-hidden">
      <Navbar brandName="Form + Space" links={navLinks} cta={{ label: 'Inquire', href: '#contact' }} />
      <Hero />
      <Philosophy />
      <Projects />
      <Features />
      <Team />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer
        brandName="Form + Space"
        tagline="Architecture and interior design studio crafting spaces that inspire."
        columns={[
          { title: 'Practice', links: [{ label: 'Philosophy', href: '#philosophy' }, { label: 'Projects', href: '#projects' }, { label: 'Studio', href: '#studio' }, { label: 'Services', href: '#services' }] },
          { title: 'Projects', links: [{ label: 'Residential', href: '#' }, { label: 'Commercial', href: '#' }, { label: 'Interiors', href: '#' }, { label: 'Urban', href: '#' }] },
          { title: 'Contact', links: [{ label: 'Lower Parel, Mumbai', href: '#' }, { label: 'Mumbai, India', href: '#' }, { label: 'buildhelix@gmail.com', href: '#' }, { label: '+91 90045 56455', href: '#' }] },
          { title: 'Connect', links: [{ label: 'Instagram', href: '#' }, { label: 'WhatsApp', href: 'https://wa.me/919004556455' }, { label: 'LinkedIn', href: '#' }, { label: 'Pinterest', href: '#' }] },
        ]}
      />
    </main>
  )
}
