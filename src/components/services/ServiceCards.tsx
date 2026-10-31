import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ServiceOption } from '../../data/services'

export default function ServiceCards({ services, compact = false }: { services: ServiceOption[]; compact?: boolean }) {
  return (
    <div className={`service-cards ${compact ? 'service-cards-compact' : ''}`}>
      {services.map((service) => (
        <Link className="service-card" to={`/services/${service.slug}`} key={service.slug}>
          <div className="service-card-image"><img src={service.image} alt="" /><span>{service.number}</span></div>
          <div className="service-card-body"><div><span className="service-card-kicker">{service.eyebrow}</span><h3>{service.title}</h3><p>{service.shortDescription}</p></div><ArrowUpRight size={18} /></div>
        </Link>
      ))}
    </div>
  )
}
