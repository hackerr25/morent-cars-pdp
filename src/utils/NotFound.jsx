import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='text-center justify-content-center' style={{ backgroundColor: "none", marginBottom: "10px", marginTop: "10px", padding: "80px" }}>
            <h3 className='text-primary mb-4'>Sorry this routes could not find :)</h3>
            <NavLink to={"/"} style={{
                textDecoration: "none",
                marginBottom: "100px",
                fontSize: "24px",
                backgroundColor: "#3563E9",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                color: "white",
            }}>Back to Home</NavLink>
        </div>
    )
}

export default NotFound