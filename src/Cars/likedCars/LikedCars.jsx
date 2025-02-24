import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../utils/context/CarContext';
import LikedCarCard from './LikedCarCard';
import './LikedCar.css';

const LikedCars = () => {
    const [likedCars, setLikedCars] = useState([]);
    const { cart, deleteCar, cartCount } = useContext(CarContext);

    useEffect(() => {
        const storedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        setLikedCars(storedCars);
    }, []);

    const likedProducts = (text, textCount) => {
        return text?.split(" ").slice(0, textCount).join(" ") + (text?.split(" ").length > textCount ? ".." : " ");
    };

    return (
        <div className="liked-cars-container">
            <h3 className="liked-cars-title">
                {cartCount > 0 ? `Liked Cars (${cartCount})` : 'Liked Cars 0'}
            </h3>

            <div className="liked-cars-grid">
                {cart?.map((data) => (
                    <LikedCarCard
                        key={data.id}
                        data={data}
                        deleteCar={deleteCar}
                        likedProducts={likedProducts}
                    />
                ))}
            </div>
        </div>
    );
};

export default LikedCars;