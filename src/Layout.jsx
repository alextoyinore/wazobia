import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <main style={mainStyle}>
            {/* Main content will be rendered here */}
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

const mainStyle = {
  minHeight: '100vh',
  padding: '20px'
}

export default Layout  
