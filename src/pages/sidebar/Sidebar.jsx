// import { useContext, useState, useEffect } from "react";
// import { CarContext } from "../../utils/context/CarContext";

// const Sidebar = ({ recentcars, isSideBar, setIsSidebar }) => {
//     const { isSidebarOpen } = useContext(CarContext);
//     const [data, setData] = useState([])
//     const [selectedCarType, setSelectedCarType] = useState(null);
//     const [selectedCapacity, setSelectedCapacity] = useState(null);
//     const [filters, setFilters] = useState({
//         type: {
//             Sport: false,
//             SUV: false,
//             MPV: false,
//             Sedan: false,
//             Coupe: false,
//             Hatchback: false,
//         },
//         capacity: {
//             "2 Person": false,
//             "4 Person": false,
//             "6 Person": false,
//             "8 or More": false,
//         },
//     })
//     const [price, setPrice] = useState(450)

//     useEffect(() => {
//         fetch(`https://912964747b35f950.mokky.dev/cars`)
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(err => console.error("Error", err.message))

//     }, [])
//     console.log(data);


//     // Handle checkbox changes
//     const handleCheckboxChange = (category, item) => {
//         setFilters((prev) => ({
//             ...prev,
//             [category]: {
//                 ...prev[category],
//                 [item]: !prev[category][item],
//             },
//         }))
//     }
//     const handleCarTypeChange = e => {
//         setFilters(prev => ({ ...prev, carType: e.target.value }));
//         setSelectedCarType(e.target.value)
//     }

//     const handleCapacityChange = (e) => {
//         setSelectedCapacity(e.target.value);
//         setFilters(prev => ({ ...prev, capacity: e.target.value }));
//     };

//     const applyFilters = () => {
//         const queryParams = new URLSearchParams();
//         if (filters.type.length) queryParams.set("type", filters.type.join(","));
//         if (filters.capacity.length) queryParams.set("capacity", filters.capacity.join(","));
//         queryParams.set("price", filters.price);
//     };

//     const sidebarStyle = {
//         position: "absolute",
//         padding: "24px",
//         top: "0",
//         left: isSidebarOpen ? "-20px" : "-400px",
//         width: "270px",
//         height: "100%",
//         background: "#fff",
//         boxShadow: "2px 0px 5px rgba(0,0,0,0.2)",
//         transition: "left 0.3s ease",
//         zIndex: 3,
//     }

//     const sectionTitleStyle = {
//         fontSize: "12px",
//         color: "#90A3BF",
//         marginBottom: "18px",
//         fontWeight: "600",
//         letterSpacing: "0.5px",
//     }

//     const checkboxGroupStyle = {
//         display: "flex",
//         flexDirection: "column",
//         gap: "12px",
//         marginBottom: "32px",
//     }

//     const checkboxLabelStyle = {
//         display: "flex",
//         alignItems: "center",
//         gap: "12px",
//         fontSize: "14px",
//         color: "#596780",
//         cursor: "pointer",
//     }

//     const countStyle = {
//         color: "#90A3BF",
//         marginLeft: "4px",
//     }

//     const sliderContainerStyle = {
//         width: "150px",
//         marginTop: "16px",
//     }

//     const sliderStyle = {
//         width: "100%",
//         height: "4px",
//         WebkitAppearance: "none",
//         background: "linear-gradient(to right, #3563E9 0%, #3563E9 50%, #E0E9F4 50%, #E0E9F4 100%)",
//         borderRadius: "4px",
//         outline: "none",
//     }

//     const priceTextStyle = {
//         fontSize: "14px",
//         color: "#596780",
//         marginTop: "8px",
//     }

//     const buttonContainerStyle = {
//         width: "95px",
//         marginTop: "35px",
//         backgroundColor: "#3563E9",
//         padding: "10px 20px",
//         borderRadius: "10px",
//         cursor: "pointer",
//         color: "#fff",
//         fontFamily: "Plus Jakarta Sans"
//     }

//     return (
//         <div style={sidebarStyle}>
//             <div>
//                 <h3 style={sectionTitleStyle}>TYPE</h3>
//                 <div style={checkboxGroupStyle}>
//                     {data.map((item) => (
//                         item?.type?.map((type) => (
//                             <label key={type.name} style={checkboxLabelStyle} onChange={(handleCarTypeChange)} value={selectedCarType} >
//                                 <input
//                                     type="checkbox"
//                                     checked={filters.type[type.name]}
//                                     onChange={() => handleCheckboxChange("type", type.name)}
//                                     style={{ width: "20px", height: "20px", accentColor: "#3563E9" }}
//                                 />
//                                 {type.name} <span style={countStyle}>({type.count})</span>
//                             </label>
//                         ))
//                     ))}
//                 </div>
//             </div>
//             <div>
//                 <h3 style={sectionTitleStyle}>CAPACITY</h3>
//                 <div style={checkboxGroupStyle}>
//                     {data.map((item) => (
//                         item?.person?.map((capacity) => (
//                             <label key={capacity.person} style={checkboxLabelStyle} onChange={handleCapacityChange} value={selectedCapacity}>
//                                 <input
//                                     type="checkbox"
//                                     checked={filters.capacity[capacity.person]}
//                                     onChange={() => handleCheckboxChange("capacity", capacity.person)}
//                                     style={{ width: "20px", height: "20px", accentColor: "#3563E9" }}
//                                 />
//                                 {capacity.person} <span style={countStyle}>({capacity.cars})</span>
//                             </label>
//                         ))
//                     ))}
//                 </div>
//             </div>

//             <div>
//                 <h3 style={sectionTitleStyle}>PRICE</h3>
//                 <div style={sliderContainerStyle}>
//                     <input
//                         type="range"
//                         min="0"
//                         max="450"
//                         value={price}
//                         onChange={e => setPrice(e.target.value, price)}
//                         style={sliderStyle}
//                     />
//                     <p style={priceTextStyle}>Max. ${price}.00</p>
//                 </div>
//             </div>
//             <div style={buttonContainerStyle} className="replace_btn">
//                 <button style={{ color: "#fff" }} onClick={applyFilters}>Replace</button>
//             </div>
//         </div >
//     );
// };



// export default Sidebar;
import { useContext, useState } from "react";
import { CarContext } from "../../utils/context/CarContext";
import { ThemeContext } from './../../utils/context/ThemeContext';

const Sidebar = () => {
    const { isSidebarOpen } = useContext(CarContext);
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
                <button style={{ color: "#fff" }}>Replace</button>
            </div>
        </div>
    );
};

export default Sidebar;

