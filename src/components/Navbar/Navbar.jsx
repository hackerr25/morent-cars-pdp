import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import morent from "../../assets/morent.png"
import filter from "../../assets/filter.png";
const Navbar = () => {
    return (
        <div>
            <div className="container d-flex justify-content-between align-items-center py-2 px-2">
                <div className="d-flex align-items-center">
                    <NavLink to={'/'}>
                        <div>
                            <img src={morent} alt="Logo" style={{ width: "100px" }} />
                        </div>
                    </NavLink>
                    <div className="input-container align-items-center position-relative ms-3">
                        <SearchIcon style={{ marginRight: "1px", position: "absolute", left: "90px", bottom: "8px", color: "#596780" }} />
                        <input type="text" placeholder='Search..' style={{
                            height: "40px",
                            width: "400px",
                            borderRadius: "70px",
                            borderColor: "#C3D4E966",
                            paddingLeft: "50px",
                            paddingRight: "40px"
                        }} />
                        <img style={{
                            marginLeft: "10px", position: "absolute", right: "18px", bottom: "8px", color: "#596780", cursor: "pointer"
                        }} src={filter} alt="filter" />
                    </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <NavLink to={"/likedCars"} style={{ color: "black" }}>
                        {({ isActive }) => (
                            <button className={isActive ? "active" : "bg-#596780"} style={{ position: "relative", borderRadius: "50%", padding: "5px", border: "1px solid #C3D4E966" }}>
                                <FavoriteIcon sx={{
                                    width: '25px', height: "25px", color: "#596780"
                                }} />
                            </button>
                        )}
                    </NavLink>
                    <NavLink to={"/notification"} style={{ color: "" }}>
                        {({ isActive }) => (
                            <button className={isActive ? "active" : "bg-#596780"} style={{ position: "relative", borderRadius: "50%", padding: "5px", border: "1px solid #C3D4E966" }}>
                                <NotificationsIcon sx={{ width: '25px', height: "25px", color: "#596780" }} />
                            </button>
                        )}
                    </NavLink>
                    <NavLink to={"/settings"} style={{ color: "black" }}>
                        {({ isActive }) => (
                            <button className={isActive ? "active" : ""} style={{ position: "relative", borderRadius: "50%", padding: "5px", border: "1px solid #C3D4E966" }}>
                                <SettingsIcon sx={{ width: '25px', height: "25px", color: "#596780" }} />
                            </button>
                        )}
                    </NavLink>
                    <NavLink to={"/profile"} style={{ color: "black" }}>
                        {({ isActive }) => (
                            <button className={isActive ? "active" : ""} style={{ position: "relative", borderRadius: "50%", padding: "5px", border: "1px solid #C3D4E966" }}>
                                <PersonIcon sx={{ width: '25px', height: "25px", color: "#596780" }} />
                            </button>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar