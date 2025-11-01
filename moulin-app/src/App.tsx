import Header from './common/Header'
import Footer from './common/Footer'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
