import { ArrowRight, Clock3 } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

function ContactUs() { return <section className="shared-hero contact-hero"><div className="container contact-grid"><div className="contact-copy"><span className="hero-eyebrow">CONTACT THE TRADE DESK</span><h1>Let’s make your next move more certain.</h1><p>Tell us what you are sourcing, where it needs to go, and what success looks like. Our team will come back with a practical next step.</p><div className="contact-meta"><ContactInfo /><div className="contact-detail"><Clock3 size={18} /><div><span>AVAILABILITY</span><strong>Mon–Fri · 9AM–6PM EST</strong></div></div></div></div><ContactForm /></div><div className="container contact-hero-note"><span>READY WHEN YOU ARE</span><strong>Share a brief. Start a better trade conversation.</strong><ArrowRight size={18} /></div></section> }

export default ContactUs
