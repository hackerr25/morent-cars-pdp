import { useState } from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import cars from "../../utils/data/data.json";

const Notification = () => {
    const [activeIds, setActiveIds] = useState([]);

    const splitText = (text, count) => {
        const words = text.split(" ");
        return words.length > count
            ? words.slice(0, count).join(" ") + "..."
            : text;
    };

    // const handleButton = (id) => {
    //     if (!activeIds.includes(id)) {
    //         setActiveIds((prevIds) => [...prevIds, id]);
    //     } else {
    //         setActiveIds((prevIds) => prevIds.filter((item) => item !== id));
    //     }
    // };

    return (
        <div>
            <div className='container' style={{ marginTop: "80px" }}>
                <div className="d-flex align-items-center justify-content-between">
                    <p style={{
                        color: "#90A3BF",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        fontSize: "16px",
                        paddingBottom: "13px",
                        lineHeight: "20px",
                        fontWeight: "600",
                        marginBottom: "0px",
                        marginTop: "20px"
                    }}>New Cars</p>
                </div>
                <div className="row mt-3">
                    {cars.newCars.map((item) => (
                        <div key={item.id} className="col-md-3" style={{ marginBottom: "30px", position: "relative" }}>
                            {/* Badge (Yorliq) */}
                            {item && (
                                <div style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    backgroundColor: "#3563E9",
                                    color: "white",
                                    borderRadius: "4px",
                                    padding: "4px 8px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    zIndex: 1
                                }}>
                                    New
                                </div>
                            )}
                            <div className="card h-100 py-2" style={{ width: "290px", border: "none" }}>
                                <div className="card-body">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5 className="card-title" style={{
                                            fontSize: "20px",
                                            fontFamily: "Plus Jakarta Sans",
                                            fontWeight: 700,
                                            marginBottom: "0"
                                        }}>{splitText(item.name, 2)}</h5>
                                    </div>
                                    <p className="card-text" style={{
                                        margin: "0",
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        lineHeight: "20px",
                                        fontWeight: 700,
                                        fontFamily: "Plus Jakarta Sans",
                                        cursor: "pointer"
                                    }}>{item.category}</p>
                                </div>
                                <img src={item.image} alt="card" style={{ width: "300px", height: "180px", objectFit: "cover", cursor: "pointer", paddingLeft: "15px", paddingRight: "16px" }} className='card-img-top mt-2 mb-4' />
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className='d-flex align-items-center gap-1'>
                                            <LocalGasStationIcon style={{ width: '24px', height: "24px", color: "#596780" }} />
                                            <h6 style={{
                                                fontSize: "14px",
                                                color: "#90A3BF",
                                                fontFamily: "Plus Jakarta Sans",
                                                fontWeight: 500,
                                                marginBottom: "0px"
                                            }}>{item.gasoline}L</h6>
                                        </div>
                                        <div className='d-flex align-items-center gap-1'>
                                            <DonutLargeIcon style={{ width: '24px', height: "24px", color: "#596780" }} />
                                            <h6 className="mb-0" style={{
                                                fontSize: "14px",
                                                color: "#90A3BF",
                                                fontFamily: "Plus Jakarta Sans",
                                                fontWeight: 500,
                                                marginBottom: "0px"
                                            }}>{item.categoryType}</h6>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <PeopleAltIcon style={{ width: '24px', height: "24px", color: "#596780" }} />
                                            <h6 className="" style={{
                                                fontSize: "14px",
                                                color: "#90A3BF",
                                                fontFamily: "Plus Jakarta Sans",
                                                fontWeight: 500,
                                                marginBottom: "0px"
                                            }}>{item.persons} People</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                        <div className='d-flex align-items-center mt-3'>
                                            <h6 className='mb-0' style={{
                                                fontSize: "20px",
                                                fontFamily: "Plus Jakarta Sans",
                                                fontWeight: 700,
                                            }}>
                                                {item.price}.0$/
                                            </h6>
                                            <p style={{
                                                fontSize: "14px",
                                                color: "#90A3BF",
                                                fontWeight: 700,
                                                marginLeft: "4px",
                                                marginBottom: "0px"
                                            }}>day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notification;