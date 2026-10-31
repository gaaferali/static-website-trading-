import { categories } from '../../data/products'
import electronics from '../../assets/category-electronics.jpg'
import industrial from '../../assets/category-industrial.jpg'
import fashion from '../../assets/category-fashion.jpg'
import home from '../../assets/category-home.jpg'

const categoryImages = { electronics, industrial, fashion, home }

function FeaturedCategories() {
  return (
    <section className="section categories-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FEATURED CATEGORIES</span>
            <h2>Curated wholesale categories for premium sourcing teams</h2>
          </div>
          <span className="section-index">01 / 04</span>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.title}>
              <img
                src={
                  categoryImages[category.tone as keyof typeof categoryImages]
                }
                alt={category.title}
                className={`category-image ${category.tone}`}
              />
              <div className="category-body">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span>{category.suppliers}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
