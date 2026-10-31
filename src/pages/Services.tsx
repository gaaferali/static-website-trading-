import ServiceCards from '../components/services/ServiceCards'
import { tradeServices } from '../data/services'

function Services() {
  return (
    <>
      <section className="shared-hero">
        <div className="container shared-hero-grid">
          <div>
            <span className="hero-eyebrow">OUR SERVICES</span>
            <h1>Every moving part of trade, moving together.</h1>
            <p>
              From the first supplier brief to the final mile, our team helps
              you buy with confidence.
            </p>
          </div>
          <div className="shared-hero-visual shared-hero-visual-collage">
            <img src={tradeServices[0].image} alt="Global sourcing network" />
            <img src={tradeServices[2].image} alt="Trade fulfillment" />
          </div>
        </div>
      </section>
      <section className="section text-page">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TRADE SERVICES</span>
              <h2>Practical expertise for every stage of your operation.</h2>
            </div>
          </div>
          <ServiceCards services={tradeServices} />
        </div>
      </section>
    </>
  )
}

export default Services
