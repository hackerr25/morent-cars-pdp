import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { CarContext } from '../../utils/context/CarContext';


const Recommended = () => {
    const { addToLiked } = useContext(CarContext)
    const [data, setData] = useState([])
    const [activeIds, setActiveIds] = useState([]);
    const navigate = useNavigate()

    const handleButton = (id) => {
        if (!activeIds.includes(id)) {
            setActiveIds((prevIds) => [...prevIds, id]);
        } else {
            setActiveIds((prevIds) => prevIds.filter((item) => item !== id));
        }
        const car = data.find(item => item.id === id);
        if (car) {
            addToLiked(car);
        }
    };


    const handleCarCard = id => {
        navigate(`/cars/${id}`)
    }

    const splitText = (text, count) => {
        const words = text.split(" ");
        return words.length > count
            ? words.slice(0, count).join(" ") + "..."
            : text;
    }

    useEffect(() => {
        fetch(`https://912964747b35f950.mokky.dev/cars`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error", err.message))
    }, [])


    return (
        <div className='container'>
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
                }}>Recomendation Car</p>
            </div>
            <div className="row mt-3">
                {data.slice(5, 13).map((item) => (
                    <div key={item.id} className="col-md-3" style={{ marginBottom: "30px" }}>
                        <div className="card h-100 py-2" style={{ width: "290px", border: "none" }}>
                            <div className="card-body">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5 className="card-title" style={{
                                        fontSize: "20px",
                                        color: "#1A202C",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontWeight: 700,
                                        marginBottom: "0"
                                    }}>{splitText(item.name, 2)}</h5>
                                    <button className={"popular-btn"} onClick={() => handleButton(item.id)}>
                                        <FavoriteBorderIcon style={{
                                            borderRadius: "100%",
                                            backgroundColor: activeIds.includes(item.id) ? "#ED3F3F" : "transparent",
                                            width: '24px',
                                            height: "24px",
                                            color: activeIds.includes(item.id) ? 'white' : '#596780'
                                        }} />
                                    </button>
                                </div>
                                <p onClick={() => handleCarCard(item.id)} className="card-text" style={{
                                    margin: "0",
                                    fontSize: "14px",
                                    color: "#90A3BF",
                                    lineHeight: "20px",
                                    fontWeight: 700,
                                    fontFamily: "Plus Jakarta Sans",
                                    cursor: "pointer"
                                }}>{item.category}</p>
                            </div>
                            <img src={item.image} alt="card" style={{ width: "300px", height: "180px", objectFit: "cover", cursor: "pointer", paddingLeft: "15px", paddingRight: "16px" }} className='card-img-top mt-2 mb-4' onClick={() => handleCarCard(item.id)} />
                            <div className="card-body">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className='d-flex align-items-center gap-1'>
                                        <LocalGasStationIcon style={{ width: '24px', height: "24px", color: "#596780" }} />
                                        <h6 style={{
                                            fontSize: "14px",
                                            color: "#90A3BF",
                                            fontFamily: "Plus Jakarta Sans",
                                            fontWeight: 500,
                                        }}>{item.gasoline}L</h6>
                                    </div>
                                    <div className='d-flex align-items-center gap-1'>
                                        <DonutLargeIcon style={{ width: '24px', height: "24px", color: "#596780" }} />
                                        <h6 className="mb-0" style={{
                                            fontSize: "14px",
                                            color: "#90A3BF",
                                            fontFamily: "Plus Jakarta Sans",
                                            fontWeight: 500,
                                        }}>{item.categoryType}</h6>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <PeopleAltIcon style={{ width: '24px', height: "24px", color: "#596780" }} />
                                        <h6 className="" style={{
                                            fontSize: "14px",
                                            color: "#90A3BF",
                                            fontFamily: "Plus Jakarta Sans",
                                            fontWeight: 500,
                                        }}>{item.persons} People</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                    <div className='d-flex align-items-center mt-3'>
                                        <h6 className='mb-0' style={{
                                            fontSize: "20px",
                                            color: "#1A202C",
                                            fontFamily: "Plus Jakarta Sans",
                                            fontWeight: 700,
                                        }}>
                                            {item.price}.0$/ day
                                        </h6>
                                    </div>
                                    <button className={"btn btn-primary btn-sm"} style={{
                                        fontSize: "16px",
                                        color: "#FFFFFF",
                                        backgroundColor: "#3563E9",
                                        borderRadius: "4px",
                                        padding: "10px 20px",
                                    }}>Rent Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
                <NavLink to={"/allRecommendation"} className={"btn btn-primary btn-sm"} style={{
                    width: "150px",
                    fontSize: "16px",
                    color: "#FFFFFF",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 600,
                    backgroundColor: "#3563E9",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    marginBottom: "40px"
                }}>Show more</NavLink>
            </div>
        </div>
    );

}

export default Recommended