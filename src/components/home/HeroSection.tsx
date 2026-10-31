import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero.jpg'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">GLOBAL B2B TRADE PLATFORM</span>
          <h1>
            Global sourcing, AI-led pricing, and high-performance logistics for
            modern trade.
          </h1>
          <p>
            Connecting manufacturers and buyers across 42 countries with
            real-time trade infrastructure and premium wholesale inventory.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/services">
              Explore marketplace <ArrowRight size={17} />
            </Link>
            <Link className="button button-outline" to="/contact-us">
              View supplier network
            </Link>
          </div>
          <ul className="feature-list">
            {[
              '247 supplier network',
              'AI driven pricing',
              'Global logistics',
            ].map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Global trade operations" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
