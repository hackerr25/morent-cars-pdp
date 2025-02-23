
import { useContext, useState } from "react";
import { CarContext } from "../../utils/context/CarContext";
import { ThemeContext } from './../../utils/context/ThemeContext';

const Sidebar = () => {
    const { isSidebarOpen, setIsReplaced } = useContext(CarContext);
    const { theme } = useContext(ThemeContext);
    const isDarkMode = theme === "dark";

    const [filters, setFilters] = useState({
        type: {
            Sport: false,
            SUV: false,
            MPV: false,
            Sedan: false,
            Coupe: false,
            Hatchback: false,
        },
        capacity: {
            "2 Person": false,
            "4 Person": false,
            "6 Person": false,
            "8 or More": false,
        },
    })
    const [price, setPrice] = useState(100)

    // Handle checkbox changes
    const handleCheckboxChange = (category, item) => {
        setFilters((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [item]: !prev[category][item],
            },
        }))
    }

    if (!isSidebarOpen) return null;

    const handleReplace = () => {
        setIsReplaced((prev) => !prev)
    }

    const sidebarStyle = {
        position: "absolute",
        top: "0",
        left: isSidebarOpen ? "-20px" : "-400px",
        width: "270px",
        height: "100%",
        background: isDarkMode ? "#1A202C" : "white",
        color: isDarkMode ? "white" : "black",
        boxShadow: "-2px 0px 5px rgba(0,0,0,0.2)",
        transition: "left 0.3s ease",
        padding: "30px",
        zIndex: 3,
        display: isSidebarOpen ? "block" : "none",
    }

    const sectionTitleStyle = {
        fontSize: "12px",
        color: "#90A3BF",
        marginBottom: "18px",
        fontWeight: "600",
        letterSpacing: "0.5px",
    }

    const checkboxGroupStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginBottom: "32px",
    }

    const checkboxLabelStyle = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        fontSize: "14px",
        color: "#596780",
        cursor: "pointer",
    }

    const countStyle = {
        color: "#90A3BF",
        marginLeft: "4px",
    }

    const sliderContainerStyle = {
        width: "150px",
        marginTop: "16px",
    }

    const sliderStyle = {
        width: "100%",
        height: "4px",
        WebkitAppearance: "none",
        background: "linear-gradient(to right, #3563E9 0%, #3563E9 50%, #E0E9F4 50%, #E0E9F4 100%)",
        borderRadius: "4px",
        outline: "none",
    }

    const priceTextStyle = {
        fontSize: "14px",
        color: "#596780",
        marginTop: "8px",
    }

    const buttonContainerStyle = {
        width: "95px",
        marginTop: "35px",
        backgroundColor: "#3563E9",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        color: "#fff",
    }

    return (
        <div style={sidebarStyle}>
            <div>
                <h3 className="mt-3" style={sectionTitleStyle}>TYPE</h3>
                <div style={checkboxGroupStyle}>
                    {[
                        ["Sport", "10"],
                        ["SUV", "12"],
                        ["MPV", "16"],
                        ["Sedan", "20"],
                        ["Coupe", "14"],
                        ["Hatchback", "14"],
                    ].map(([type, count]) => (
                        <label key={type} style={checkboxLabelStyle}>
                            <input
                                type="checkbox"
                                checked={filters.type[type]}
                                onChange={() => handleCheckboxChange("type", type)}
                                style={{ width: "20px", height: "20px", accentColor: "#3563E9" }}
                            />
                            {type} <span style={countStyle}>({count})</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Capacity Section */}
            <div>
                <h3 style={sectionTitleStyle}>CAPACITY</h3>
                <div style={checkboxGroupStyle}>
                    {[
                        ["2 Person", "10"],
                        ["4 Person", "14"],
                        ["6 Person", "12"],
                        ["8 or More", "16"],
                    ].map(([capacity, count]) => (
                        <label key={capacity} style={checkboxLabelStyle}>
                            <input
                                type="checkbox"
                                checked={filters.capacity[capacity]}
                                onChange={() => handleCheckboxChange("capacity", capacity)}
                                style={{ width: "20px", height: "20px", accentColor: "#3563E9" }}
                            />
                            {capacity} <span style={countStyle}>({count})</span>
                        </label>
                    ))}
                </div>
            </div>


            {/* Price Section */}
            <div>
                <h3 style={sectionTitleStyle}>PRICE</h3>
                <div style={sliderContainerStyle}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={sliderStyle}
                    />
                    <p style={priceTextStyle}>Max. ${price}.00</p>
                </div>
            </div>
            <div style={buttonContainerStyle} className="replace_btn">
                <button style={{ color: "#fff" }} onClick={handleReplace}>Replace</button>
            </div>
        </div>
    );
};

export default Sidebar;

