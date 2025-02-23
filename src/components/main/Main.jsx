
import whiteCar from "../../assets/car.png";
import grayCar from "../../assets/black-car.png";
import { useState } from "react";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import "./Main.css"

const Main = () => {
  const [isSwapped, setIsSwapped] = useState(false)
  const [pickupLocation, setPickupLocation] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [pickupTime, setPickupTime] = useState("")
  const [dropoffLocation, setDropoffLocation] = useState("")
  const [dropoffDate, setDropoffDate] = useState("")
  const [dropoffTime, setDropoffTime] = useState("")

  const handleSwap = () => {
    setIsSwapped(!isSwapped)
  }

  const LocationComponent = ({ type, location, setLocation, date, setDate, time, setTime }) => (
    <div
      style={{
        padding: "16px",
        marginTop: "14px",
        borderRadius: "16px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        width: "562px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        marginBottom: "5px"
      }}
      className={type.toLowerCase()}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <input className="labelDiv" type="radio" id={type.toLowerCase()} name="service" defaultChecked style={{ accentColor: "blue" }} />
        <label htmlFor={type.toLowerCase()} style={{ fontWeight: "600", color: "#596780", marginBottom: "0px" }}>
          {type}
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 8px 1fr 8px 1fr", gap: "16px", alignItems: "center" }}>
        {/* Location Dropdown */}
        <div className="labelDiv">
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Locations</label>
          <select
            style={{
              marginTop: "4px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              padding: "8px",
              color: "#555",
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
        <div className="labelDiv">
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Date</label>
          <select
            style={{
              marginTop: "4px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              padding: "4px",
              color: "#555",
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
        <div className="labelDiv">
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>Time</label>
          <select
            style={{
              marginTop: "4px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              padding: "4px",
              color: "#555",
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
  )
  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "30px", paddingTop: "25px" }} className="main">
        <div style={{ width: "650px", height: "350px", borderRadius: "10px" }} className="left_card">
          <div style={{ width: "595px", paddingTop: "30px", paddingLeft: "30px" }} className="card_text">
            <h1 style={{ fontFamily: "Plus Jakarta Sans", fontSize: "35px", color: "#ffff" }}>The Best Platform <br /> for Car Rental</h1>
            <p style={{ color: "#ffff", fontSize: "15px", fontFamily: "Plus Jakarta Sans" }}>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
          </div>
          <img style={{ width: "360px", height: "130px", paddingBottom: "20px", marginLeft: "200px", marginTop: "45px" }} src={whiteCar} alt="car_1" />
        </div>
        <div style={{ width: "650px", height: "350px", borderRadius: "10px" }} className="right_card">
          <div style={{ width: "595px", paddingTop: "30px", paddingLeft: "30px" }} className="card_text">
            <h1 style={{ fontFamily: "Plus Jakarta Sans", fontSize: "35px", color: "#ffff" }}>Easy way to rent a <br /> car at a low price</h1>
            <p style={{ color: "#ffff", fontSize: "15px", fontFamily: "Plus Jakarta Sans" }}>Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
          </div>
          <img style={{ width: "340px", height: "120px", marginLeft: '200px', paddingBottom: "20px", marginTop: "45px" }} src={grayCar} alt="car_2" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "30px" }}>
        {isSwapped ? (
          <LocationComponent
            type="Drop - Off"
            location={dropoffLocation}
            setLocation={setDropoffLocation}
            date={dropoffDate}
            setDate={setDropoffDate}
            time={dropoffTime}
            setTime={setDropoffTime}
          />
        ) : (
          <LocationComponent
            type="Pick - Up"
            location={pickupLocation}
            setLocation={setPickupLocation}
            date={pickupDate}
            setDate={setPickupDate}
            time={pickupTime}
            setTime={setPickupTime}
          />
        )}
        <button
          onClick={handleSwap}
          style={{
            padding: "10px 10px",
            backgroundColor: "#3563E9",
            width: "60px",
            height: "60px",
            marginTop: "50px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <ImportExportIcon style={{ fontSize: "24px", color: "#ffff" }} />
        </button>
        {isSwapped ? (
          <LocationComponent
            type="Pick - Up"
            location={pickupLocation}
            setLocation={setPickupLocation}
            date={pickupDate}
            setDate={setPickupDate}
            time={pickupTime}
            setTime={setPickupTime}
          />
        ) : (
          <LocationComponent
            type="Drop - Off"
            location={dropoffLocation}
            setLocation={setDropoffLocation}
            date={dropoffDate}
            setDate={setDropoffDate}
            time={dropoffTime}
            setTime={setDropoffTime}
          />
        )}
      </div>
    </div>
  )
}

export default Main



