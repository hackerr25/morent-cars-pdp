import { useContext, useState } from "react";
import bitcoin from "../../assets/Bitcoin.png";
import Layer from "../../assets/Layer.png";
import { toast } from "react-toastify";
import ThankYouModal from "../../utils/ThankyouModal";
import { ThemeContext } from "../../utils/context/ThemeContext";
import { useNavigate } from "react-router-dom";
import "./PayMent.css";

function CarPay() {
  const [thankYouModal, setThankYouModal] = useState(false);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const boughted = () => {
    toast.success("Mahsulot sotib olindi!", {
      position: "top-right",
      width: "100px"
    });
    setThankYouModal(true);
  };

  const handleClose = () => {
    setThankYouModal(false);
    navigate("/");
  };

  
  const handleRentNow = () => {
    if (
      !name ||
      !phone ||
      !address ||
      !city ||
      !location ||
      !date ||
      !time ||
      !selectedMethod ||
      !marketingConsent ||
      !termsConsent
    ) {
      toast.error("barcha maydonlarni to'ldiring!", {
        position: "top-center",
      });
      return;
    }

    boughted();
  };

  

  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
      <div style={{ display: "flex", gap: "10px", marginTop: "75px" }}>
        <div className="left">
          {/* Billing Info Section */}
          <div
            style={{
              width: "752px",
              height: "320px",
              padding: "24px",
              paddingBottom: "30px",
              paddingRight: "30px",
              paddingLeft: "30px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
                  Billing Info
                </h2>
                <p style={{ margin: 0, fontSize: "14px", marginBottom: "20px" }}>
                  Please enter your billing info
                </p>
              </div>
              <span style={{ fontSize: "14px" }}>Step 1 of 4</span>
            </div>

            {/* Form */}
            <form
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {/* Name */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Phone Number</label>
                <input
                  required
                  type="text"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Address */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Address</label>
                <input
                  required
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Town / City */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Town / City</label>
                <input
                  required
                  type="text"
                  placeholder="Town or city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>
            </form>
          </div>

          {/* Rental Info Section */}
          <div
            style={{
              width: "752px",
              height: "550px",
              padding: "24px",
              marginTop: "30px",
              paddingBottom: "30px",
              paddingRight: "30px",
              paddingLeft: "30px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
                  Rental Info
                </h2>
                <p style={{ margin: 0, fontSize: "14px", marginBottom: "0px" }}>
                  Please select your rental date
                </p>
              </div>
              <span style={{ fontSize: "14px" }}>Step 2 of 4</span>
            </div>

            {/* Pick - Up Section */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <input type="radio" id="pickup" name="service" defaultChecked style={{ accentColor: "blue" }} />
              <label htmlFor="pickup" style={{ fontWeight: "600", marginBottom: "0px", marginTop: "0px" }}>
                Pick - Up
              </label>
            </div>

            {/* Form */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {/* Locations Dropdown */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Locations</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "gray",
                    cursor: "pointer",
                  }}
                >
                  <option value="" style={{ color: 'gray', background: "#1E293B" }}>Select your city</option>
                  <option value="Tashkent" style={{ color: 'gray', background: "#1E293B" }}>Tashkent</option>
                  <option value="Samarkand" style={{ color: 'gray', background: "#1E293B" }}>Samarkand</option>
                </select>
              </div>

              {/* Date Dropdown */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Date</label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "gray",
                  }}
                >
                  <option value="" style={{ color: 'gray', background: "#1E293B" }}>Select your date</option>
                  <option value="2024-01-01" style={{ color: 'gray', background: "#1E293B" }}>2024-01-01</option>
                  <option value="2024-01-02" style={{ color: 'gray', background: "#1E293B" }}>2024-01-02</option>
                </select>
              </div>

              {/* Time Dropdown */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "gray",
                    width: "100%",
                    padding: "8px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                >
                  <option value="" style={{ color: 'gray', background: "#1E293B" }}>Select your time</option>
                  <option value="07:00" style={{ color: 'gray', background: "#1E293B" }}>07:00</option>
                  <option value="08:00" style={{ color: 'gray', background: "#1E293B" }}>08:00</option>
                </select>
              </div>
            </div>

            {/* Drop - Off Section */}
            <div style={{ display: "flex", marginTop: "20px", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <input type="radio" id="dropoff" name="service" style={{ accentColor: "blue" }} />
              <label htmlFor="dropoff" style={{ fontWeight: "600", marginBottom: "0px" }}>
                Drop - Off
              </label>
            </div>

            {/* Form */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {/* Locations Dropdown */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Locations</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "gray",
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                >
                  <option value="" style={{ color: 'gray', background: "#1E293B" }}>Select your city</option>
                  <option value="Tashkent" style={{ color: 'gray', background: "#1E293B" }}>Tashkent</option>
                  <option value="Samarkand" style={{ color: 'gray', background: "#1E293B" }}>Samarkand</option>
                </select>
              </div>

              {/* Date Dropdown */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Date</label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "gray",
                    width: "100%",
                    padding: "12px",
                    marginTop: "4px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                >
                  <option value="" style={{ color: 'gray', background: "#1E293B" }}>Select your date</option>
                  <option value="2024-01-01" style={{ color: 'gray', background: "#1E293B" }}>2024-01-01</option>
                  <option value="2024-01-02" style={{ color: 'gray', background: "#1E293B" }}>2024-01-02</option>
                </select>
              </div>

              {/* Time Dropdown */}
              <div className="mb-3">
                <label style={{ fontSize: "14px", fontWeight: "500" }}>Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "gray",
                    width: "100%",
                    padding: "11px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                >
                  <option value="" style={{ color: 'gray', background: "#1E293B" }}>Select your time</option>
                  <option value="07:00" style={{ color: 'gray', background: "#1E293B" }}>07:00</option>
                  <option value="08:00" style={{ color: 'gray', background: "#1E293B" }}>08:00</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div
            style={{
              width: "752px",
              height: "550px",
              padding: "24px",
              marginTop: "30px",
              paddingBottom: "30px",
              paddingRight: "30px",
              paddingLeft: "30px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
                  Payment Method
                </h2>
                <p style={{ margin: 0, fontSize: "14px" }}>
                  Please enter your payment method
                </p>
              </div>
              <span style={{ fontSize: "14px" }}>Step 3 of 4</span>
            </div>

            {/* Payment Methods */}
            <div>
              {/* Credit Card */}
              <div
                style={{
                  background: selectedMethod === "credit",
                  padding: "16px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedMethod("credit")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedMethod === "credit"}
                    onChange={() => setSelectedMethod("credit")}
                  />
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>Credit Card</span>
                  <div style={{ marginLeft: "auto" }}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                      alt="Visa"
                      style={{ height: "20px", marginRight: "5px" }}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                      alt="Mastercard"
                      style={{ height: "20px" }}
                    />
                  </div>
                </div>

                {selectedMethod === "credit" && (
                  <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500" }}>Card Number</label>
                      <input
                        type="text"
                        placeholder="Card number"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginTop: "4px",
                          borderRadius: "8px",
                          fontSize: "14px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500" }}>Expiration Date</label>
                      <input
                        type="text"
                        placeholder="DD / MM / YY"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginTop: "4px",
                          borderRadius: "8px",
                          fontSize: "14px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500" }}>Card Holder</label>
                      <input
                        type="text"
                        placeholder="Card holder"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginTop: "4px",
                          borderRadius: "8px",
                          fontSize: "14px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500" }}>CVC</label>
                      <input
                        type="text"
                        placeholder="CVC"
                        style={{
                          width: "100%",
                          padding: "12px",
                          marginTop: "4px",
                          borderRadius: "8px",
                          fontSize: "14px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* PayPal */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px",
                  borderRadius: "12px",
                  background: selectedMethod === "paypal",
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedMethod("paypal")}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "paypal"}
                  onChange={() => setSelectedMethod("paypal")}
                />
                <span style={{ fontSize: "16px", fontWeight: "500" }}>PayPal</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  style={{ height: "20px", marginLeft: "auto" }}
                />
              </div>

              {/* Bitcoin */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px",
                  borderRadius: "12px",
                  // background: selectedMethod === "bitcoin",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedMethod("bitcoin")}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "bitcoin"}
                  onChange={() => setSelectedMethod("bitcoin")}
                />
                <span style={{ fontSize: "16px", fontWeight: "500" }}>Bitcoin</span>
                <img
                  src={bitcoin}
                  alt="Bitcoin"
                  style={{ height: "17px", marginLeft: "auto", color: "black" }}
                />
              </div>
            </div>
          </div>

          {/* Confirmation Section */}
          <div
            style={{
              width: "752px",
              height: "400px",
              padding: "24px",
              marginTop: "30px",
              paddingBottom: "30px",
              paddingRight: "30px",
              paddingLeft: "30px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
                  Confirmation
                </h2>
                <p style={{ margin: 0, fontSize: "14px", marginTop: "5px" }}>
                  We are getting to the end. Just a few clicks and your rental is ready!
                </p>
              </div>
              <span style={{ fontSize: "14px", marginTop: "12px" }}>Step 4 of 4</span>
            </div>

            {/* Checkbox Options */}
            <div style={{ display: "grid", gap: "12px", marginBottom: "16px" }}>
              {/* Marketing Consent */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                <input
                  required
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={() => setMarketingConsent(!marketingConsent)}
                  style={{ marginRight: "10px", transform: "scale(1.2)" }}
                />
                <span style={{ fontSize: "14px" }}>
                  I agree with sending marketing and newsletter emails. No spam, promised!
                </span>
              </label>

              {/* Terms & Conditions Consent */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                <input
                  required
                  type="checkbox"
                  checked={termsConsent}
                  onChange={() => setTermsConsent(!termsConsent)}
                  style={{ marginRight: "10px", transform: "scale(1.2)" }}
                />
                <span style={{ fontSize: "14px" }}>
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>

            {/* Rent Now Button */}
            <button
              onClick={handleRentNow}
              style={{
                width: "100px",
                height: "56px",
                background: "#306AFF",
                color: "white",
                padding: "8px 3px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Rent Now
            </button>

            {/* Security Information */}
            <div style={{ marginTop: "20px", textAlign: "start" }}>
              <div style={{ fontSize: "24px", marginBottom: "5px" }}>
                <img src={Layer} alt="Layer" />
              </div>
              <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "600", marginTop: "10px" }}>
                All your data are safe
              </h3>
              <p style={{ fontSize: "14px" }}>
                We are using the most advanced security to provide you the best experience ever.
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}

        {/* Thank You Modal */}
        {thankYouModal && <ThankYouModal onClose={handleClose} />}
      </div>
    </div>
  );
}

export default CarPay;

// const [selectedCar, setSelectedCar] = useState(null);



// useEffect(() => {
  //   const car = JSON.parse(localStorage.getItem('selectedCar'));
  //   if (car) {
  //     setSelectedCar(car); // Tanlangan mashinani holatga o'rnatish
  //   } else {
  //     toast.error("No car selected!", { position: "bottom-center" });
  //     navigate("/"); // Agar mashina tanlanmagan bo'lsa, asosiy sahifaga qaytish
  //   }
  // }, [navigate]);

  // if (!selectedCar) {
  //   return <div>Loading...</div>;  
  // }

// const containerStyle = {
  //   width: "440px",
  //   padding: "20px",
  //   borderRadius: "16px",
  //   margin: "auto",
  // };

  // const textStyle = {
  //   fontSize: "14px",
  // };

  // const inputStyle = {
  //   border: "none",
  //   outline: "none",
  //   fontSize: "14px",
  //   width: "100%",
  //   padding: "10px 15px",
  //   background: "none",
  // };

// <div className="right" style={{
//           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//           border: "1px solid rgba(255, 255, 255, 0.1)",
//         }}>
//           <div style={containerStyle}>
//             {/* Header */}
//             <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 6px" }}>
//               Rental Summary
//             </h3>
//             <p style={textStyle}>
//               Prices may change depending on the length of the rental and the price of your rental car.
//             </p>

//             {/* Car Info */}
//             <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
//               <img
//                 src={selectedCar?.image}
//                 alt={selectedCar?.name}
//                 style={{ width: "80px", height: "80px", borderRadius: "12px", background: theme ? "#333" : "#EEF2FF" }}
//               />
//               <div>
//                 <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
//                   {selectedCar?.name}
//                 </h4>
//                 <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//                   {"⭐".repeat(4)}
//                   <span style={{ color: "#CCC", fontSize: "16px" }}>☆</span>
//                   <span style={textStyle}>{selectedCar?.reviews}+ Reviewer</span>
//                 </div>
//               </div>
//             </div>

//             {/* Subtotal and Tax */}
//             <div style={{ borderTop: `1px solid ${theme ? "#444" : "#E5E7EB"}`, paddingTop: "12px" }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
//                 <span style={textStyle}>Subtotal</span>
//                 <span style={{ fontSize: "14px", fontWeight: "600" }}>${selectedCar?.price}.00</span>
//               </div>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
//                 <span style={textStyle}>Discount</span>
//                 <s style={{ fontSize: "14px", fontWeight: "600" }}>${selectedCar?.discount}</s>
//               </div>

//               {/* Promo Code Section */}
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   padding: "10px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <input
//                   type="text"
//                   placeholder="Apply promo code"
//                   style={inputStyle}
//                 />
//                 <button
//                   style={{
//                     width: "120px",
//                     padding: "8px 12px",
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     borderRadius: "8px",
//                     border: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Apply now
//                 </button>
//               </div>
//             </div>

//             <div style={{ borderTop: `1px solid ${theme ? "#444" : "#E5E7EB"}`, paddingTop: "12px", marginTop: "16px" }}>
//               <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "4px" }}>
//                 Total Rental Price
//               </h3>
//               <p style={textStyle}>
//                 Overall price and includes rental discount
//               </p>
//               <h2 style={{ fontSize: "22px", fontWeight: "700" }}>${selectedCar?.price - (selectedCar?.discount || 0)}</h2>
//             </div>
//           </div>
//         </div>