import { NavLink } from 'react-router-dom'
import {
  Share2 as Linkedin,
  AtSign as Twitter,
  Mail,
  Phone,
} from 'lucide-react'
import { contactInfo, serviceOptions } from '../../data/contact'
import { navigation as navigationItems } from '../../data/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand-col">
          <div className="footer-brand">
            <span className="brand-mark">N</span>
            <span>NORA TRADE</span>
          </div>
          <p className="footer-description">
            Global sourcing, AI-led pricing, and high-performance logistics for
            modern trade across 42 countries.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn" className="footer-social-link">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="footer-social-link">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="footer-link">
                  {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            {serviceOptions.map((service) => (
              <li key={service}>
                <span className="footer-link footer-link-static">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-links footer-contact-list">
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="footer-link footer-contact-item"
              >
                <Phone size={14} />
                <span>{contactInfo.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="footer-link footer-contact-item"
              >
                <Mail size={14} />
                <span>{contactInfo.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} NORA TRADE. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">
              Privacy Policy
            </a>
            <span className="footer-legal-sep">·</span>
            <a href="#" className="footer-legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
