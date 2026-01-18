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
import WorkInProgress from './pages/WorkInProgress.tsx'

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
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route index element={<WorkInProgress />} />
              <Route path="*" element={<WorkInProgress />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  </StrictMode>
)
