import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>HOME</h1>} />
          <Route path="historique" element={<h1>Historique</h1>} />
          <Route path="projet" element={<h1>Projet</h1>} />
          <Route path="travaux" element={<h1>Travaux</h1>} />
          <Route path="*" element={<h1>Page non trouvée</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
