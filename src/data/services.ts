import heroImage from '../assets/hero.jpg'
import heroTwo from '../assets/hero-2.jpg'
import heroThree from '../assets/hero-3.jpg'
import industrialImage from '../assets/category-industrial.jpg'
import electronicsImage from '../assets/category-electronics.jpg'
import homeImage from '../assets/category-home.jpg'
import type { ServiceOption } from '../types/service'

export const tradeServices: ServiceOption[] = [
  {
    slug: 'global-sourcing',
    number: '01',
    title: 'Global sourcing',
    eyebrow: 'Trade service',
    shortDescription:
      'Find capable production partners in the markets that fit your brief.',
    description:
      'From first brief to final shortlist, our sourcing team combines category knowledge with a verified global network so every introduction is commercially useful.',
    image: industrialImage,
    points: [
      'Verified manufacturers and production capacity',
      'Category-specific supplier shortlists',
      'Commercial terms and sample coordination',
    ],
  },
  {
    slug: 'supplier-verification',
    number: '02',
    title: 'Supplier verification',
    eyebrow: 'Trade service',
    shortDescription:
      'Make supplier decisions with a clear view of quality, credentials, and fit.',
    description:
      'We turn supplier due diligence into a practical decision system, surfacing the operational signals that matter before you commit to an order.',
    image: electronicsImage,
    points: [
      'Credential and quality-system review',
      'Capacity, compliance, and risk checks',
      'Performance history and fit assessment',
    ],
  },
  {
    slug: 'logistics-fulfillment',
    number: '03',
    title: 'Logistics & fulfillment',
    eyebrow: 'Trade service',
    shortDescription:
      'Move every shipment across borders with dependable planning and visibility.',
    description:
      'Coordinate documentation, freight, milestones, and delivery handoffs through one responsive trade desk built for international movement.',
    image: homeImage,
    points: [
      'Multimodal freight planning',
      'Documentation and customs coordination',
      'Milestone visibility through delivery',
    ],
  },
]

export const aiServices: ServiceOption[] = [
  {
    slug: 'predictive-pricing',
    number: '01',
    title: 'Predictive pricing',
    eyebrow: 'AI service',
    shortDescription:
      'Benchmark quotes against live market movement before you commit.',
    description:
      'Nora Intelligence brings current market signals into the pricing conversation, helping teams separate a competitive quote from a costly one.',
    image: heroImage,
    points: [
      'Quote benchmarking and price bands',
      'Market movement signals',
      'Scenario planning before commitment',
    ],
  },
  {
    slug: 'supplier-intelligence',
    number: '02',
    title: 'Supplier intelligence',
    eyebrow: 'AI service',
    shortDescription:
      'See supplier quality, capacity, and risk signals in one decision view.',
    description:
      'Turn a large supplier network into a focused operating picture with AI-assisted signals that help your team prioritize the right conversations.',
    image: heroTwo,
    points: [
      'Network health monitoring',
      'Risk signal prioritization',
      'Shortlist recommendations for each brief',
    ],
  },
  {
    slug: 'trade-forecasting',
    number: '03',
    title: 'Trade forecasting',
    eyebrow: 'AI service',
    shortDescription:
      'Build resilient trade plans from the signals changing around your shipment.',
    description:
      'Forecast demand, timing, and delivery pressure with a clearer view of the conditions that can change a trade plan between order and arrival.',
    image: heroThree,
    points: [
      'Demand and timing scenarios',
      'Delivery pressure indicators',
      'Actionable planning recommendations',
    ],
  },
]

export const allServiceOptions = [...tradeServices, ...aiServices]

export function findService(slug?: string) {
  return allServiceOptions.find((service) => service.slug === slug)
}
