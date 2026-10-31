import { ChevronDown, Globe2, Search } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { aiServices, tradeServices } from '../../data/services'
import { navigation } from '../../data/navigation'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="brand" to="/" aria-label="Nora Trade home">
          <span className="brand-mark">N</span>
          <span>NORA TRADE</span>
        </Link>
        <nav className="nav-list" aria-label="Main navigation">
          {navigation.map((item) => {
            const options =
              item.label === 'SERVICES'
                ? tradeServices
                : item.label === 'AI SOLUTIONS'
                  ? aiServices
                  : []
            return (
              <div
                className={options.length ? 'nav-dropdown' : ''}
                key={item.to}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? 'active nav-parent' : 'nav-parent'
                  }
                >
                  {item.label}
                  {options.length > 0 && <ChevronDown size={13} />}
                </NavLink>
                {options.length > 0 && (
                  <div className="nav-dropdown-menu">
                    {options.map((option) => (
                      <Link key={option.slug} to={`/services/${option.slug}`}>
                        <span>{option.number}</span>
                        {option.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
        <div className="nav-actions">
          <label className="search-box">
            <Search size={16} />
            <span className="sr-only">Search products</span>
            <input placeholder="Search products..." />
          </label>
          <button className="language-button" type="button">
            <Globe2 size={16} /> EN
          </button>
          <Link className="button button-gold nav-cta" to="/contact-us">
            Request quote
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
