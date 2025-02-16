import { createContext, useState } from "react";


export const CarContext = createContext()

export const CarProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToLiked = car => {
        setCart((prev) => {
            const existingCar = prev.some(p => p.id === car.id);
            if (!existingCar) {
                setCartCount(count => count + 1);
                return [...prev, car]
            }
            return prev;
        })
    }

    const deleteCar = car => {
        setCart((prev) => {
            const index = prev.findIndex(p => p.id !== car.id);
            if (index.length !== 0) {
                setCartCount(count => count - 1);
                return [...prev.slice(0, index), ...prev.slice(index + 1)];
            }
            return prev;
        })
    }
    return (
        <CarContext.Provider value={{ addToLiked, deleteCar, cart, cartCount }}>
            {children}
        </CarContext.Provider>
    )
}