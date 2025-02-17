import { useState } from "react";
import bitcoin from "../../assets/Bitcoin.png";
import Layer from "../../assets/Layer.png";
import look from "../../assets/Look.png";
function CarPay() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "100px", display: "flex", gap: "40px" }} className="container">
      <div className="left">
        <div style={{
          width: "752px",
          height: "320px",
          background: "white",
          padding: "24px",
          paddingBottom: "30px",
          paddingRight: "30px",
          paddingLeft: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
                Billing Info
              </h2>
              <p style={{ margin: 0, fontSize: "14px", color: "#90A3BF", marginBottom: "20px" }}>
                Please enter your billing info
              </p>
            </div>
            <span style={{ fontSize: "14px", color: "#90A3BF" }}>Step 1 of 4</span>
          </div>

          {/* Form */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {/* Name */}
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Name</label>
              <input
                type="text"
                placeholder="Your name"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#90A3BF",
                }}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Phone Number</label>
              <input
                type="text"
                placeholder="Phone number"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  border: "none",
                  background: "#F6F7F9",
                  fontSize: "14px",
                  color: "#90A3BF",
                }}
              />
            </div>

            {/* Address */}
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Address</label>
              <input
                type="text"
                placeholder="Address"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#555",
                }}
              />
            </div>

            {/* Town / City */}
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Town / City</label>
              <input
                type="text"
                placeholder="Town or city"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#555",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{
          width: "752px",
          height: "550px",
          background: "white",
          padding: "24px",
          marginTop: "30px",
          paddingBottom: "30px",
          paddingRight: "30px",
          paddingLeft: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }} className="rental_info">
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
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
                Rental Info
              </h2>
              <p style={{ margin: 0, fontSize: "14px", color: "#90A3BF", marginBottom: "20px" }}>
                Please select your rental date
              </p>
            </div>
            <span style={{ fontSize: "14px", color: "#90A3BF" }}>Step 2 of 4</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <input type="radio" id="pickup" name="service" defaultChecked style={{ accentColor: "blue" }} />
            <label htmlFor="pickup" style={{ fontWeight: "600", color: "#111" }}>
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
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Locations</label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#90A3BF",
                }}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select your city</option>
                <option value="Tashkent">Tashkent</option>
                <option value="Samarkand">Samarkand</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Date</label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#90A3BF",
                }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
                <option value="">Select your date</option>
                <option value="2024-01-01">2024-01-01</option>
                <option value="2024-01-02">2024-01-02</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Time</label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#90A3BF",
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
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px" }}>
            <input type="radio" id="pickup" name="service" defaultChecked style={{ accentColor: "blue" }} />
            <label htmlFor="pickup" style={{ fontWeight: "600", color: "#111" }}>
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
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Locations</label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#90A3BF",
                }}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select your city</option>
                <option value="Tashkent">Tashkent</option>
                <option value="Samarkand">Samarkand</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Date</label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#90A3BF",
                }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
                <option value="">Select your date</option>
                <option value="2024-01-01">2024-01-01</option>
                <option value="2024-01-02">2024-01-02</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Time</label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#F6F7F9",
                  border: "none",
                  fontSize: "14px",
                  color: "#90A3BF",
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
        <div
          style={{
            width: "752px",
            height: "550px",
            background: "white",
            padding: "24px",
            marginTop: "30px",
            paddingBottom: "30px",
            paddingRight: "30px",
            paddingLeft: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#111" }}>
                Payment Method
              </h2>
              <p style={{ margin: 0, fontSize: "14px", color: "#777" }}>
                Please enter your payment method
              </p>
            </div>
            <span style={{ fontSize: "14px", color: "#777" }}>Step 3 of 4</span>
          </div>

          {/* Payment Methods */}
          <div>
            {/* Credit Card */}
            <div
              style={{
                background: selectedMethod === "credit" ? "#F8FAFF" : "white",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                marginBottom: "12px",
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
                <span style={{ fontSize: "16px", fontWeight: "500", color: "#111" }}>Credit Card</span>
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
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Card Number</label>
                    <input
                      type="text"
                      placeholder="Card number"
                      style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "4px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        background: "#fff",
                        fontSize: "14px",
                        color: "#555",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Expiration Date</label>
                    <input
                      type="text"
                      placeholder="DD / MM / YY"
                      style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "4px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        background: "#fff",
                        fontSize: "14px",
                        color: "#555",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>Card Holder</label>
                    <input
                      type="text"
                      placeholder="Card holder"
                      style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "4px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        background: "#fff",
                        fontSize: "14px",
                        color: "#555",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>CVC</label>
                    <input
                      type="text"
                      placeholder="CVC"
                      style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "4px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        background: "#fff",
                        fontSize: "14px",
                        color: "#555",
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
                border: "1px solid #ddd",
                background: selectedMethod === "paypal" ? "#F8FAFF" : "white",
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
              <span style={{ fontSize: "16px", fontWeight: "500", color: "#111" }}>PayPal</span>
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
                border: "1px solid #ddd",
                background: selectedMethod === "bitcoin" ? "#F8FAFF" : "white",
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
              <span style={{ fontSize: "16px", fontWeight: "500", color: "#111" }}>Bitcoin</span>
              <img
                src={bitcoin}
                alt="Bitcoin"
                style={{ height: "17px", marginLeft: "auto" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "752px",
            height: "400px",
            background: "white",
            padding: "24px",
            marginTop: "30px",
            paddingBottom: "30px",
            paddingRight: "30px",
            paddingLeft: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#111" }}>
                Confirmation
              </h2>
              <p style={{ margin: 0, fontSize: "14px", color: "#777", marginTop: "5px" }}>
                We are getting to the end. Just a few clicks and your rental is ready!
              </p>
            </div>
            <span style={{ fontSize: "14px", color: "#777", marginTop: "12px" }}>Step 4 of 4</span>
          </div>

          {/* Checkbox Options */}
          <div style={{ display: "grid", gap: "12px", marginBottom: "16px" }}>
            {/* Marketing Consent */}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                background: "#F8F9FC",
                padding: "12px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={() => setMarketingConsent(!marketingConsent)}
                style={{ marginRight: "10px", transform: "scale(1.2)" }}
              />
              <span style={{ fontSize: "14px", color: "#111" }}>
                I agree with sending marketing and newsletter emails. No spam, promised!
              </span>
            </label>

            {/* Terms & Conditions Consent */}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                background: "#F8F9FC",
                padding: "12px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={termsConsent}
                onChange={() => setTermsConsent(!termsConsent)}
                style={{ marginRight: "10px", transform: "scale(1.2)" }}
              />
              <span style={{ fontSize: "14px", color: "#111" }}>
                I agree with our terms and conditions and privacy policy.
              </span>
            </label>
          </div>

          {/* Rent Now Button */}
          <button
            style={{
              width: "100px",
              height: "56px",
              background: "#306AFF",
              color: "white",
              padding: "14px",
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
            <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "600", color: "#111", marginTop: "12px" }}>
              All your data are safe
            </h3>
            <p style={{ fontSize: "14px", color: "#777", marginTop: "10px" }}>
              We are using the most advanced security to provide you the best experience ever.
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div
          style={{
            width: "440px",
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            margin: "auto",
          }}
        >
          {/* Header */}
          <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 6px", color: "#111" }}>
            Rental Summary
          </h3>
          <p style={{ fontSize: "14px", color: "#777", margin: "0 0 16px" }}>
            Prices may change depending on the length of the rental and the price of your rental car.
          </p>

          {/* Car Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <img
              src={look}
              alt="Nissan GT-R"
              style={{ width: "80px", height: "80px", borderRadius: "12px", background: "#EEF2FF" }}
            />
            <div>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "#111" }}>
                Nissan GT – R
              </h4>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {"⭐".repeat(4)}
                <span style={{ color: "#CCC", fontSize: "16px" }}>☆</span>
                <span style={{ fontSize: "12px", color: "#777" }}>440+ Reviewer</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "14px", color: "#777" }}>Subtotal</span>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#111" }}>$80.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontSize: "14px", color: "#777" }}>Tax</span>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#111" }}>$0</span>
            </div>

            {/* Promo Code Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#F8F9FC",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Apply promo code"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "14px",
                  color: "#777",
                  width: "100%",
                }}
              />
              <button
                style={{
                  width: "120px",
                  background: "#E5E7EB",
                  color: "#555",
                  padding: "8px 12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Apply now
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "12px", marginTop: "16px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111", marginBottom: "4px" }}>
              Total Rental Price
            </h3>
            <p style={{ fontSize: "14px", color: "#777", margin: "0 0 8px" }}>
              Overall price and includes rental discount
            </p>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111" }}>$80.00</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarPay
