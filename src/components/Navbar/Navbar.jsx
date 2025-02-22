import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import morent from "../../assets/morent.png";
import filter from "../../assets/filter.png";
import { CarContext } from '../../utils/context/CarContext';
import { ThemeContext } from '../../utils/context/ThemeContext';
import cars from "../../utils/data/data.json"
import "./Navbar.css";

const Navbar = () => {
    const { toggleSidebar, cartCount, carsData } = useContext(CarContext);
    const [search, setSearch] = useState("");
    const [filteredCars, setFilteredCars] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);
    // carsData o'zgarganda filteredCarsni yangilash
    useEffect(() => {
        if (carsData.length > 0) {
            setFilteredCars(carsData);
        }
    }, [carsData]);

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredCars(carsData); // Bo'sh qidiruvda barcha mashinalar
            setShowDropdown(false); // Dropdownni yopamiz
        } else {
            const filtered = carsData.filter(car =>
                car.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredCars(filtered);
            setShowDropdown(true); // Dropdownni ochamiz
        }
    }, [search, carsData]);

    // Qidiruv tugmasi bosilganda navigatsiya
    const handleSearch = () => {
        if (filteredCars.length > 0 && search.trim() !== "") {
            navigate(`/searched-cars?search=${encodeURIComponent(search)}`);
            setShowDropdown(false); // Qidiruvdan keyin dropdown yopiladi
        }
    };

    // Dropdown elementini tanlash
    const handleSelectCar = (carName) => {
        setSearch(carName);
        setShowDropdown(false);
        navigate(`/searched-cars?search=${encodeURIComponent(carName)}`);
    };


    return (
        <div className={`navbar-container ${theme === "dark" ? "dark" : ""}`}>
            <div className="container d-flex justify-content-between align-items-center py-2 px-2">
                <div className="d-flex align-items-center">
                    <NavLink to={'/'}>
                        <img src={morent} alt="Logo" style={{ width: "100px" }} />
                    </NavLink>
                    <div className={`input-container position-relative ms-3 ${theme} `}>
                        <SearchIcon
                            onClick={handleSearch}
                            style={{
                                position: "absolute",
                                left: "90px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: theme === "dark" ? "white" : "#596780",
                                cursor: "pointer"
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => search.trim() !== "" && setShowDropdown(true)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            style={{
                                height: "40px",
                                width: "400px",
                                borderRadius: "70px",
                                border: "1px solid #C3D4E966",
                                paddingLeft: "40px",
                                paddingRight: "40px",
                                backgroundColor: theme === "dark" ? "#1E1E1E" : "#FFFFFF",
                                color: theme === "dark" ? "#FFFFFF" : "#000000"
                            }}
                        />
                        {showDropdown && filteredCars.length > 0 && (
                            <ul
                                className="list-group position-absolute shadow mt-1"
                                style={{
                                    borderRadius: "10px",
                                    background: theme === "dark" ? "#2D2D2D" : "#FFFFFF",
                                    zIndex: "10",
                                    maxHeight: "300px",
                                    width: "100%",
                                    overflowY: "auto",
                                    textAlign: "left"
                                }}
                            >
                                {filteredCars.map((car) => (
                                    <li
                                        key={car.id}
                                        className="list-group-item list-group-item-action cursor-pointer"
                                        onClick={() => handleSelectCar(car.name)}
                                        style={{
                                            paddingLeft: "20px",
                                            background: theme === "dark" ? "#2D2D2D" : "#FFFFFF",
                                            color: theme === "dark" ? "#FFFFFF" : "#000000",
                                            borderBottom: theme === "dark" ? "1px solid #444" : "1px solid #ddd",
                                            cursor: "pointer",
                                            webkitScrollbar: {
                                                width: "10px"
                                            }
                                        }}
                                    >
                                        {car.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button
                            onClick={toggleSidebar}
                            style={{
                                border: "none",
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)"
                            }}
                        >
                            <img src={filter} alt="filter" style={{ cursor: "pointer" }} />
                        </button>
                    </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <NavLink to={"/likedCars"} style={{ color: "black" }}>
                        {({ isActive }) => (
                            <button
                                className={isActive ? "active" : ""}
                                style={{
                                    position: "relative",
                                    borderRadius: "50%",
                                    padding: "5px",
                                    border: "1px solid #C3D4E966"
                                }}

                            >
                                <FavoriteIcon sx={{ width: '25px', height: "25px", color: "#596780" }} />
                                {cartCount > 0 && (
                                    <span
                                        className="badge"
                                        style={{
                                            background: "#FF4423",
                                            position: "absolute",
                                            top: "-5px",
                                            right: "-10px",
                                            borderRadius: "10px",
                                            fontSize: "10px"
                                        }}
                                    >
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        )}
                    </NavLink>
                    <NavLink to={"/notification"} style={{ color: "black" }}>
                        {({ isActive }) => (
                            <button
                                className={isActive ? "active" : ""}
                                style={{
                                    position: "relative",
                                    borderRadius: "50%",
                                    padding: "5px",
                                    border: "1px solid #C3D4E966"
                                }}
                            >
                                <NotificationsIcon sx={{ width: '25px', height: "25px", color: "#596780" }} />
                                {cars.newCars && (
                                    <span
                                        className="badge"
                                        style={{
                                            position: "absolute",
                                            top: "-5px",
                                            right: "-10px",
                                            borderRadius: "10px",
                                            background: "#FF4423",
                                            fontSize: "10px"
                                        }}
                                    >
                                        {cars.newCars.length}
                                    </span>

                                )}
                            </button>
                        )}
                    </NavLink>
                    <NavLink to={"/profile"} style={{ color: "black" }}>
                        {({ isActive }) => (
                            <button
                                className={isActive ? "active" : ""}
                                style={{
                                    borderRadius: "50%",
                                    padding: "5px",
                                    border: "1px solid #C3D4E966"
                                }}
                            >
                                <PersonIcon sx={{ width: '25px', height: "25px", color: "#596780" }} />
                            </button>
                        )}
                    </NavLink>
                    <button onClick={toggleTheme} style={{
                        padding: "5px",
                        fontSize: "16px",
                        backgroundColor: theme === "dark" ? "#fff" : "#333",
                        color: theme === "dark" ? "#333" : "#fff",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer"
                    }}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
