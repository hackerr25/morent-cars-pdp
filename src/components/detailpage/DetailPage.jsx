import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CarContext } from '../../utils/context/CarContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const DetailPage = () => {
    const { id } = useParams();
    const { addToLiked } = useContext(CarContext);
    const [car, setCar] = useState([])

    useEffect(() => {
        fetch(`https://912964747b35f950.mokky.dev/cars/${id}`)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(err => console.error("Error", err.message))
    }, [id])

    if (!car) {
        return <h2>Loading...</h2>
    }



    return (
        <div className='container p-2 d-flex gap-4'>
            <div className="card-image">
                <img src={car.image} alt={car.brand} style={{ width: "100%", height: "80%", objectFit: "cover" }} />
            </div>
            <div className="card-body" style={{ background: "white", padding: "10px 20px", width: "480px", "height": "360px" }}>
                <div className="card-head" style={{ display: "flex", justifyContent: "space-between" }}>
                    <h2 className='card-title' style={{
                        fontSize: "27px",
                        color: "#1A202C",
                        fontFamily: "Plus Jakarta Sans",
                        fontOpticalSizing: "auto",
                        lineHeight: "40px",
                        fontWeight: 700,
                        fontStyle: "normal",
                        marginBottom: "0px"
                    }}>{car.name}</h2>
                    <FavoriteBorderIcon onClick={() => addToLiked(car)} />
                </div>
                <p className="card-text" style={{
                    fontSize: "14px",
                    color: "#90A3BF",
                    lineHeight: "17px",
                    fontWeight: 500,
                    alignItems: "center",
                    fontFamily: "Plus Jakarta Sans",
                }}>{car.reviews}+ Reviewers</p>
                <p style={{
                    width: "450px",
                    height: "50px",
                    fontSize: "18px",
                    lineHeight: "20px",
                    color: "#596780",
                    fontWeight: 400,
                    fontFamily: "Plus Jakarta Sans",
                }}>{car.desc}</p>
                <div className="card-main">
                    <div className="footer-right d-flex justify-content-between" style={{ marginRight: '20px' }}>
                        <div className="">
                            <p className='type-car'>Type-Car</p>
                            <p className='type-car'>{car.carType}</p>
                        </div>
                        <div className="">
                            <p className='type-car2'>{car.category}</p>
                            <p className='type-car2'>{car.categoryType}</p>
                        </div>
                        <div className="">
                            <p className='type-car'>Capacity</p>
                            <p className='type-car'>{car.capacity}</p>
                        </div>
                        <div className="">
                            <p className='type-car2'>{car.persons} Person</p>
                            <p className='type-car2' style={{ textAlign: "right" }}>{car.gasoline}L</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3" style={{ background: "none" }}>
                        <div className='d-flex align-items-center mt-3'>
                            <div className='m-0'>
                                <h6 className='mb-0' style={{
                                    fontSize: "20px",
                                    color: "#1A202C",
                                    fontWeight: 700,
                                    marginBottom: "0px"
                                }}>
                                    {car.price}.0$/
                                </h6>
                                <s className='mb-1' style={{
                                    fontSize: "14px",
                                    color: "#90A3BF",
                                    fontWeight: 700,
                                    marginBottom: "0"
                                }}>
                                    {car.discount ? car.discount : "no discount"}$
                                </s>
                            </div>
                            <p style={{
                                fontSize: "14px",
                                color: "#90A3BF",
                                fontWeight: 700,
                            }}> day</p>
                        </div>
                        <button className={"btn btn-primary btn-sm"} style={{
                            fontSize: "16px",
                            color: "#FFFFFF",
                            backgroundColor: "#3563E9",
                            borderRadius: "4px",
                            padding: "10px 20px",
                            marginLeft: "20px",
                            marginTop: "20px"
                        }}>Rent Now</button>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default DetailPage