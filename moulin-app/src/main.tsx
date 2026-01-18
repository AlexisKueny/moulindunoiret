import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import 'antd/dist/reset.css'
import Home from './pages/Home.tsx'
import App from './App.tsx'
import { blueGrey, grey } from '@mui/material/colors'
import Work from './pages/Work.tsx'
import History from './pages/History.tsx'

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
    text: {
      secondary: "white"
    }
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline >
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={import.meta.env.DEV ? '/' : '/moulindunoiret/'}>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path="historique" element={<History/>} />
              <Route path="projet" element={<h1>Projet</h1>} />
              <Route path="travaux" element={<Work/>} />
              <Route path="newsletter" element={<h1>Newsletter</h1>} />
              <Route path="*" element={<h1>Page non trouvée</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  </StrictMode>
)
