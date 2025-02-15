import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main className='container' style={{ backgroundColor: "#F6F7F9" }}>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout