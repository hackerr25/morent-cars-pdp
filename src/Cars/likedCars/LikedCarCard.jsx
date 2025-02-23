import React from 'react';
import { NavLink } from 'react-router-dom';
import './LikedCar.css';

const LikedCarCard = ({ data, deleteCar, likedProducts }) => {
    return (
        <div className="liked-car-card">
            <img
                src={data.image}
                alt={data.brand}
                className="liked-car-image"
            />

            <div className="liked-car-body">
                <h2 className="liked-car-title">{data.name}</h2>

                <div className="liked-car-rating">
                    {"⭐".repeat(4)}
                    <span className="rating-star">☆</span>
                    <span className="rating-reviews">{data.reviews} + Reviewers</span>
                </div>

                <p className="liked-car-description">
                    {likedProducts(data.desc, 10)}
                </p>

                <div className="liked-car-details">
                    <div className="detail-item">
                        <p className="detail-label">Type-Car</p>
                        <p className="detail-value">{data.carType}</p>
                    </div>
                    <div className="detail-item">
                        <p className="detail-label">{data.category}</p>
                        <p className="detail-value">{data.categoryType}</p>
                    </div>
                    <div className="detail-item">
                        <p className="detail-label">Capacity</p>
                        <p className="detail-value">{data.capacity}</p>
                    </div>
                    <div className="detail-item">
                        <p className="detail-label">{data.persons} Person</p>
                        <p className="detail-value">{data.gasoline}L</p>
                    </div>
                </div>

                <div className="liked-car-footer">
                    <div className="price-section">
                        <h6 className="price">${data.price}.0/</h6>
                        <p className="price-label">day</p>
                    </div>

                    <div className="action-buttons">
                        <NavLink className="rent-now-btn" to="/car_pay">
                            Rent Now
                        </NavLink>
                        <button className="rent-now-btn" onClick={() => deleteCar(data.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikedCarCard;