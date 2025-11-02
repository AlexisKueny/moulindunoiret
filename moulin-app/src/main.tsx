import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import { CssBaseline } from '@mui/material'
import Home from './pages/Home.tsx'
import Header from './common/Header.tsx'
import Footer from './common/Footer.tsx'

const App = () => {
  const brickBackgroundURL = 'url("data:image/svg+xml,%3Csvg width=\'42\' height=\'44\' viewBox=\'0 0 42 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg id=\'Page-1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'brick-wall\' fill=\'%23be9954\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#e7dfca',
      backgroundImage: brickBackgroundURL,
    }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="historique" element={<h1>Historique</h1>} />
            <Route path="projet" element={<h1>Projet</h1>} />
            <Route path="travaux" element={<h1>Travaux</h1>} />
            <Route path="*" element={<h1>Page non trouvée</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  </StrictMode>
)
