import { Mail, Phone } from 'lucide-react'
import { contactInfo } from '../../data/contact'

export default function ContactInfo() {
  return (
    <aside className="contact-info">
      <div className="contact-info-item">
        <Mail size={18} className="contact-info-icon" />
        <div>
          <div className="contact-info-label">EMAIL</div>
          <a href={`mailto:${contactInfo.email}`} className="contact-info-value">
            {contactInfo.email}
          </a>
        </div>
      </div>

      <div className="contact-info-item">
        <Phone size={18} className="contact-info-icon" />
        <div>
          <div className="contact-info-label">PHONE</div>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-info-value">
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </aside>
  )
}
