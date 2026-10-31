import { ArrowUpRight } from 'lucide-react'
import { chartBars } from '../../data/products'

const stats = [['TOTAL TRADE VOLUME', '$128.4M', '+12.4% year over year'], ['ACTIVE SUPPLIERS', '3,842', '+48 added this quarter'], ['ON-TIME DELIVERY', '98.4%', '12.7 avg lead time (days)']]

function AnalyticsSection() {
  return <section className="section analytics-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">AI-POWERED ANALYTICS</span><h2>Market momentum, supplier performance, and delivery quality in one view</h2></div><ArrowUpRight className="gold-arrow" size={30} /></div><div className="stats-grid">{stats.map(([label, value, note]) => <article className="stat-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}</div><div className="chart-card"><div className="chart-head"><div><h3>Weekly GMV trend</h3><p>7 days · +12.4% vs prior week</p></div><span className="chart-status">LIVE</span></div><div className="bar-chart" aria-label="Weekly gross merchandise volume trend">{chartBars.map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>MON</span><span>WED</span><span>FRI</span><span>SUN</span></div></div></div></section>
}

export default AnalyticsSection
