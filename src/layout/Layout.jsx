import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import "./Layout.css"
import { ThemeContext } from '../utils/context/ThemeContext'
const Layout = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme === "dark" ? "dark-mode" : ""}>
            <nav>
                <Navbar />
            </nav>
            <main className='container layout-main'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout