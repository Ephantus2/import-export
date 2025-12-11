import React from 'react'
import Header from './Header'
import LandingPage from './LandingPage'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App