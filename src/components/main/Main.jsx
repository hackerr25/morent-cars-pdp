import whiteCar from "../../assets/car.png";
import grayCar from "../../assets/black-car.png";
const Main = () => {
    return <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "30px" }} className="main py-4">
            <div style={{ backgroundColor: "#54A6FF", width: "650px", height: "350px", borderRadius: "10px" }} className="left_card">
                <div style={{ width: "595px", paddingTop: "30px", paddingLeft: "30px" }} className="card_text">
                    <h1 style={{ fontFamily: "Plus Jakarta Sans", fontSize: "32px", color: "#ffff" }}>The Best Platform <br /> for Car Rental</h1>
                    <p style={{ color: "#ffff", fontSize: "16px", fontFamily: "Plus Jakarta Sans", paddingBottom: "0", marginBottom: "20px" }}>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
                    <button style={{ padding: "10px 20px", backgroundColor: "#3563E9", fontFamily: "Plus Jakarta Sans", fontSize: "16px", color: "#ffff", borderRadius: "4px" }}>Rental Car</button>
                </div>
                <div style={{ position: "absolute", left: "325px", top: "340px" }} className="card_img">
                    <img style={{ width: "360px", height: "120px" }} src={whiteCar} alt="car_1" />
                </div>
            </div>
            <div style={{ backgroundColor: "#3563E9", width: "650px", height: "350px", borderRadius: "10px" }} className="right_card">
                <div style={{ width: "595px", paddingTop: "30px", paddingLeft: "30px" }} className="card_text">
                    <h1 style={{ fontFamily: "Plus Jakarta Sans", fontSize: "32px", color: "#ffff" }}>Easy way to rent a <br /> car at a low price</h1>
                    <p style={{ color: "#ffff", fontSize: "16px", fontFamily: "Plus Jakarta Sans", paddingBottom: "0px", marginBottom: "20px" }}>Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
                    <button style={{ padding: "10px 20px", backgroundColor: "#54A6FF", fontFamily: "Plus Jakarta Sans", fontSize: "16px", color: "#ffff", borderRadius: "4px" }}>Rental Car</button>
                </div>
                <div style={{ position: "absolute", left: "955px", top: "340px" }} className="card_img">
                    <img style={{ width: "340px", height: "120px" }} src={grayCar} alt="car_2" />
                </div>
            </div>
        </div>
    </div>
}
export default Main