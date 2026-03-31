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
        background: '#ddccc1',
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
