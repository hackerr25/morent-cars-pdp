import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CarContext } from '../../utils/context/CarContext';

const LikedCars = () => {
    const [likedCars, setLikedCars] = useState([]);
    const { cart, deleteCar } = useContext(CarContext)

    // Like qilingan mashinalarni localStorage'dan yuklash
    useEffect(() => {
        const storedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        setLikedCars(storedCars);
    }, []);

    const likedProducts = (text, textCount) => {
        return text?.split(" ").slice(0, textCount).join(" ") + (text?.split(" ").length > textCount ? ".." : " ");
    };

    return (
        <div className="container p-2" style={{ marginTop: "75px" }}>
            <h3 style={{
                color: "#90A3BF",
                paddingLeft: "20px",
                fontSize: "22px",
                paddingBottom: "13px",
                fontWeight: "600",
                marginBottom: "0px",
            }}>{likedCars.length > 0 ? `Liked Cars (${likedCars.length})` : 'Liked Cars 0'}</h3>

            <div style={{ width: "100%", display: "flex", gap: "20px", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
                {cart?.map((data) => (
                    <div className="card" key={data.id} style={{
                        border: "none",
                        marginBottom: "20px",
                        width: "calc(33.333% - 20px)",
                        flex: "0 0 auto",
                        marginTop: "14px"
                    }}>
                        <img
                            src={data.image}
                            alt={data.brand}
                            className="card-img-top"
                            style={{ objectFit: "contain", height: "200px", width: "100%" }}
                        />

                        <div className="card-body" style={{ padding: "20px", border: "none" }}>
                            <h2 className="card-title" style={{
                                fontSize: "27px",
                                fontWeight: 700,
                                marginBottom: "0px"
                            }}>
                                {data.name}
                            </h2>

                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                {"⭐".repeat(4)}
                                <span style={{ color: "#CCC", fontSize: "22px" }}>☆</span>
                                <span style={{ fontSize: "12px", color: "#777" }}>{data.reviews} + Reviewers</span>
                            </div>
                            <p style={{
                                fontSize: "15px",
                                color: "#596780",
                                fontWeight: 400,
                            }}>
                                {likedProducts(data.desc, 10)}
                            </p>

                            <div className="card-main">
                                <div className="footer-right d-flex justify-content-between gap-1">
                                    <div>
                                        <p className="type-car">Type-Car</p>
                                        <p className="type-car">{data.carType}</p>
                                    </div>
                                    <div>
                                        <p className="type-car2">{data.category}</p>
                                        <p className="type-car2">{data.categoryType}</p>
                                    </div>
                                    <div>
                                        <p className="type-car">Capacity</p>
                                        <p className="type-car">{data.capacity}</p>
                                    </div>
                                    <div>
                                        <p className="type-car2">{data.persons} Person</p>
                                        <p className="type-car2" style={{ textAlign: "right" }}>{data.gasoline}L</p>
                                    </div>
                                </div>

                                {/* Price & Rent Now Button */}
                                <div className="d-flex align-items-center justify-content-between mt-3">
                                    <div className='d-flex align-items-center mt-3'>
                                        <div>
                                            <h6 className='mb-0' style={{
                                                fontSize: "20px",
                                                fontWeight: 700,
                                            }}>
                                                {data.price}.0$/
                                            </h6>
                                            <s className='mb-1' style={{
                                                fontSize: "14px",
                                                color: "#90A3BF",
                                                fontWeight: 700,
                                            }}>
                                                {data.discount ? data.discount : "0"}$
                                            </s>
                                        </div>
                                        <p style={{
                                            fontSize: "14px",
                                            color: "#90A3BF",
                                            fontWeight: 700,
                                        }}>day</p>
                                    </div>

                                    <div className="card-btns d-flex align-items-center">
                                        <NavLink className="btn btn-sm" style={{
                                            fontSize: "16px",
                                            color: "#FFFFFF",
                                            backgroundColor: "#3563E9",
                                            borderRadius: "4px",
                                            padding: "10px 20px",
                                            marginLeft: "20px",
                                        }} to={'/car_pay'}>Rent Now</NavLink>
                                        <button onClick={() => deleteCar(data.id)} style={{
                                            fontSize: "16px",
                                            color: "#FFFFFF",
                                            backgroundColor: "#3563E9",
                                            borderRadius: "4px",
                                            padding: "10px 20px",
                                            marginLeft: "20px",
                                        }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LikedCars;
