import AboutSection from '../components/home/AboutSection'
import AnalyticsSection from '../components/home/AnalyticsSection'
import FeaturedCategories from '../components/home/FeaturedCategories'
import HeroSection from '../components/home/HeroSection'
import ServiceShowcase from '../components/home/ServiceShowcase'
import TrendingProducts from '../components/home/TrendingProducts'

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceShowcase />
      <FeaturedCategories />
      <AnalyticsSection />
      <TrendingProducts />
    </>
  )
}

export default Home
