import { ArrowRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ServiceCards from '../components/services/ServiceCards'
import { aiServices, findService, tradeServices } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = findService(slug)
  if (!service) return <section className="section"><div className="container"><h1>Service not found</h1><Link className="button button-dark" to="/services">Back to services</Link></div></section>
  const related = service.eyebrow === 'AI service' ? aiServices : tradeServices
  return <>
    <section className="shared-hero service-detail-hero"><div className="container shared-hero-grid"><div><span className="hero-eyebrow">{service.eyebrow.toUpperCase()} · {service.number}</span><h1>{service.title}</h1><p>{service.description}</p><Link className="button button-gold" to="/contact-us">Talk to our trade desk <ArrowRight size={17} /></Link></div><div className="shared-hero-visual"><img src={service.image} alt="" /></div></div></section>
    <section className="section detail-content"><div className="container detail-grid"><div><span className="eyebrow">WHAT YOU GET</span><h2>A clearer path from decision to delivery.</h2></div><div className="detail-points">{service.points.map((point) => <div key={point}><Check size={18} /><span>{point}</span></div>)}</div></div></section>
    <section className="section related-services"><div className="container"><div className="section-heading"><div><span className="eyebrow">KEEP EXPLORING</span><h2>More {service.eyebrow === 'AI service' ? 'AI services' : 'trade services'}.</h2></div></div><ServiceCards services={related.filter((item) => item.slug !== service.slug)} compact /></div></section>
  </>
}
