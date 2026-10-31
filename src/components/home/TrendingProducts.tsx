import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import smartwatch from '../../assets/product-smartwatch.jpg'
import handbag from '../../assets/product-handbag.jpg'
import cnc from '../../assets/product-cnc.jpg'

const productImages = { smartwatch, handbag, machine: cnc }

function TrendingProducts() {
  return (
    <section className="section products-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TRENDING PRODUCTS</span>
            <h2>
              International wholesale products with restrained gold action
            </h2>
          </div>
          <Link className="text-link" to="/services">
            View marketplace <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <img
                src={
                  productImages[
                    product.tone === 'searchlight'
                      ? 'smartwatch'
                      : (product.tone as keyof typeof productImages)
                  ]
                }
                alt={product.name}
                className={`product-image ${product.tone}`}
              />
              <div className="product-body">
                <div>
                  <h3>
                    {product.tone === 'searchlight'
                      ? 'Premium Smartwatch'
                      : product.name}
                  </h3>
                  <p>
                    <strong>{product.price}</strong> / {product.unit}
                  </p>
                </div>
                <span className="verified">● Verified supplier</span>
                <div className="product-actions">
                  <button className="button button-dark" type="button">
                    Details
                  </button>
                  <button className="button button-outline" type="button">
                    Supplier
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingProducts
