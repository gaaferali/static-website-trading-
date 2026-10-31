import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './app/AppRoutes'
import PageShell from './components/layout/PageShell'
import ScrollToTop from './components/layout/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageShell>
        <AppRoutes />
      </PageShell>
    </BrowserRouter>
  )
}

export default App
