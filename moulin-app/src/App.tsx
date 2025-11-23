import Header from './common/Header.tsx'
import Footer from './common/Footer.tsx'
import { Outlet } from 'react-router'

const App = () => {

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        /* new gradient applied to the app root so Header/Footer transparency reveals it */
        background: 'linear-gradient(90deg, rgba(234, 227, 217, 1.000) 0.000%, rgba(237, 227, 217, 1.000) 16.667%, rgba(233, 220, 209, 1.000) 33.333%, rgba(223, 207, 196, 1.000) 50.000%, rgba(208, 191, 180, 1.000) 66.667%, rgba(192, 174, 163, 1.000) 83.333%, rgba(177, 160, 149, 1.000) 100.000%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;