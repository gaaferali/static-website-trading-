import { Route, Routes } from 'react-router-dom'

import AISolutions from '../pages/AISolutions'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'
import ServiceDetail from '../pages/ServiceDetail'
import Services from '../pages/Services'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/ai-solutions" element={<AISolutions />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  )
}

export default AppRoutes
