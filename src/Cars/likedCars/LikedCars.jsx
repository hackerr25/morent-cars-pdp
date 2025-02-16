import React, { useContext } from 'react'
import { CarContext } from '../../utils/context/CarContext'

const LikedCars = () => {
    const { cart, deleteCar, cartCount } = useContext(CarContext);
    
    const splitText = (text, count) => {
        const words = text.split(" ");
        return words.length > count
            ? words.slice(0, count).join(" ") + "..."
            : text;
    }

    return (
        <div>Liked cars component</div>
    )
}

export default LikedCars