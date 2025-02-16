import whiteCar from "../../assets/car.png";
import grayCar from "../../assets/black-car.png";
import { useState } from "react";
import ImportExportIcon from '@mui/icons-material/ImportExport';

const Main = () => {
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    return <div className="container" style={{ paddingTop: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "30px" }} className="main">
            <div style={{ backgroundColor: "#54A6FF", width: "650px", height: "350px", borderRadius: "10px" }} className="left_card">
                <div style={{ width: "595px", paddingTop: "30px", paddingLeft: "30px" }} className="card_text">
                    <h1 style={{ fontFamily: "Plus Jakarta Sans", fontSize: "35px", color: "#ffff" }}>The Best Platform <br /> for Car Rental</h1>
                    <p style={{ color: "#ffff", fontSize: "15px", fontFamily: "Plus Jakarta Sans" }}>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
                    <button style={{ padding: "10px 20px", backgroundColor: "#3563E9", fontFamily: "Plus Jakarta Sans", fontSize: "22px", color: "#ffff", borderRadius: "10px" }}>Rental Car</button>
                </div>
                <img style={{ width: "360px", height: "130px", paddingBottom: "20px", marginLeft: "200px" }} src={whiteCar} alt="car_1" />
            </div>
            <div style={{ backgroundColor: "#3563E9", width: "650px", height: "350px", borderRadius: "10px" }} className="right_card">
                <div style={{ width: "595px", paddingTop: "30px", paddingLeft: "30px" }} className="card_text">
                    <h1 style={{ fontFamily: "Plus Jakarta Sans", fontSize: "35px", color: "#ffff" }}>Easy way to rent a <br /> car at a low price</h1>
                    <p style={{ color: "#ffff", fontSize: "15px", fontFamily: "Plus Jakarta Sans" }}>Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
                    <button style={{ padding: "10px 20px", backgroundColor: "#54A6FF", fontFamily: "Plus Jakarta Sans", fontSize: "22px", color: "#ffff", borderRadius: "10px" }}>Rental Car</button>
                </div>
                <img style={{ width: "340px", height: "120px", marginLeft: '200px', paddingBottom: "20px" }} src={grayCar} alt="car_2" />
            </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "30px" }}>
            <div
                style={{
                    padding: "16px",
                    marginTop: "16px",
                    background: "white",
                    borderRadius: "16px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    width: "562px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <input type="radio" id="pickup" name="service" defaultChecked style={{ accentColor: "blue" }} />
                    <label htmlFor="pickup" style={{ fontWeight: "600", color: "#111" }}>
                        Pick - Up
                    </label>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 8px 1fr 8px 1fr", gap: "16px", alignItems: "center" }}>
                    {/* Location Dropdown */}
                    <div>
                        <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Locations</label>
                        <select
                            style={{
                                marginTop: "4px",
                                width: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "8px",
                                color: "#555",
                                border: "none",
                                outline: "none",
                            }}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select your city</option>
                            <option value="Tashkent">Tashkent</option>
                            <option value="Samarkand">Samarkand</option>
                        </select>
                    </div>

                    {/* Separator */}
                    <div style={{ width: "2px", backgroundColor: "#C3D4E966", height: "50px", marginTop: "10px" }}></div>


                    {/* Date Picker */}
                    <div>
                        <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Date</label>
                        <select
                            style={{
                                marginTop: "4px",
                                width: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "8px",
                                color: "#555",
                                border: "none",
                                outline: "none",
                            }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        >
                            <option value="">Select your date</option>
                            <option value="2024-01-01">2024-01-01</option>
                            <option value="2024-01-02">2024-01-02</option>
                        </select>
                    </div>

                    {/* Separator */}
                    <div style={{ width: "2px", backgroundColor: "#C3D4E966", height: "50px", marginTop: "10px" }}></div>

                    {/* Time Picker */}
                    <div>
                        <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Time</label>
                        <select
                            style={{
                                marginTop: "4px",
                                width: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "8px",
                                color: "#555",
                                border: "none",
                                outline: "none",
                            }}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value="">Select your time</option>
                            <option value="07:00">07:00</option>
                            <option value="08:00">08:00</option>
                        </select>
                    </div>
                </div>
            </div>
            <button style={{ padding: "10px 10px", backgroundColor: "#3563E9", width: "60px", height: "60px", marginTop: "50px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}>
                <ImportExportIcon style={{ fontSize: "24px", color: "#ffff" }} />
            </button>
            <div
                style={{
                    padding: "16px",
                    marginTop: "16px",
                    background: "white",
                    borderRadius: "16px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    width: "562px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <input type="radio" id="pickup" name="service" defaultChecked style={{ accentColor: "blue" }} />
                    <label htmlFor="pickup" style={{ fontWeight: "600", color: "#111" }}>
                        Drop - Off
                    </label>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 8px 1fr 8px 1fr", gap: "16px", alignItems: "center" }}>
                    {/* Location Dropdown */}
                    <div>
                        <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Locations</label>
                        <select
                            style={{
                                marginTop: "4px",
                                width: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "8px",
                                color: "#555",
                                border: "none",
                                outline: "none",
                            }}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select your city</option>
                            <option value="Tashkent">Tashkent</option>
                            <option value="Samarkand">Samarkand</option>
                        </select>
                    </div>

                    {/* Separator */}
                    <div style={{ width: "2px", backgroundColor: "#C3D4E966", height: "50px", marginTop: "10px" }}></div>


                    {/* Date Picker */}
                    <div>
                        <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Date</label>
                        <select
                            style={{
                                marginTop: "4px",
                                width: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "8px",
                                color: "#555",
                                border: "none",
                                outline: "none",
                            }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        >
                            <option value="">Select your date</option>
                            <option value="2024-01-01">2024-01-01</option>
                            <option value="2024-01-02">2024-01-02</option>
                        </select>
                    </div>

                    {/* Separator */}
                    <div style={{ width: "2px", backgroundColor: "#C3D4E966", height: "50px", marginTop: "10px" }}></div>

                    {/* Time Picker */}
                    <div>
                        <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Time</label>
                        <select
                            style={{
                                marginTop: "4px",
                                width: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "8px",
                                color: "#555",
                                border: "none",
                                outline: "none",
                            }}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value="">Select your time</option>
                            <option value="07:00">07:00</option>
                            <option value="08:00">08:00</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Main



