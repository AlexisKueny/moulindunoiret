import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import { createTheme, CssBaseline, ThemeProvider, useTheme } from '@mui/material'
import Home from './pages/Home.tsx'
import Header from './common/Header.tsx'
import Footer from './common/Footer.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f6f6f6'  
    },
    secondary: {
      main: '#303030'  
    },
  },

})

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.primary.main
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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </CssBaseline>
  </StrictMode>
)
