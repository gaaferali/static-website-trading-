import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceCards from '../services/ServiceCards'
import { aiServices, tradeServices } from '../../data/services'

export default function ServiceShowcase() {
  return (
    <section className="section service-showcase">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SERVICES & AI</span>
            <h2>Choose the intelligence your next shipment needs.</h2>
          </div>
          <Link className="text-link" to="/services">
            View all services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="showcase-group">
          <div className="showcase-label">
            <span>01</span>
            <div>
              <h3>Trade services</h3>
              <p>Practical support from sourcing to final-mile delivery.</p>
            </div>
          </div>
          <ServiceCards services={tradeServices} />
        </div>
        <div className="showcase-group">
          <div className="showcase-label">
            <span>02</span>
            <div>
              <h3>AI services</h3>
              <p>Sharper decisions powered by live trade intelligence.</p>
            </div>
          </div>
          <ServiceCards services={aiServices} />
        </div>
      </div>
    </section>
  )
}
