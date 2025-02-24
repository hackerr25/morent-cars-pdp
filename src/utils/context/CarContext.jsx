import { createContext, useEffect, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [notification, setNotification] = useState(0)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('likedCars')) || []);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cartCount, setCartCount] = useState(cart.length);
    const [isReplaced, setIsReplaced] = useState(false);
    const [carsData, setCarsData] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [filters, setFilters] = useState({
        type: {
            Sport: false,
            SUV: false,
            MPV: false,
            Sedan: false,
            Coupe: false,
            Hatchback: false,
        },
        capacity: {
            "2 Person": false,
            "4 Person": false,
            "6 Person": false,
            "8 or More": false,
        },
        price: 100,
    });

    useEffect(() => {
        const storedCount = JSON.parse(localStorage.getItem("notificationCount") || 0);
        setNotification(storedCount);
    }, [])
    const clearNotifications = () => {
        setNotification(0);
        localStorage.setItem("notificationCount", JSON.stringify(0));
    };


    useEffect(() => {
        const fetchCarsData = async () => {
            try {
                const response = await fetch("https://912964747b35f950.mokky.dev/cars");
                const data = await response.json();
                setCarsData(data);
                setFilteredCars(data);
            } catch (err) {
                console.error("Error fetching cars data:", err.message);
            }
        };
        fetchCarsData();
    }, []);

    useEffect(() => {
        let filtered = [...carsData];

        const activeTypes = Object.keys(filters.type).filter(type => filters.type[type]);
        if (activeTypes.length > 0) {
            filtered = filtered.filter(car => activeTypes.includes(car.carType));
        }

        const activeCapacities = Object.keys(filters.capacity).filter(capacity => filters.capacity[capacity]);
        if (activeCapacities.length > 0) {
            filtered = filtered.filter(car => {
                const capacityNum = parseInt(car.capacity);
                return activeCapacities.some(cap => {
                    if (cap === "8 or More") return capacityNum >= 8;
                    return capacityNum === parseInt(cap);
                });
            });
        }

        filtered = filtered.filter(car => car.price <= filters.price);
        setFilteredCars(filtered);
    }, [filters, carsData]);

    const addToLiked = (car) => {
        if (!cart.some(c => c.id === car.id)) {
            const updatedCart = [...cart, car];
            setCart(updatedCart);
            setCartCount(updatedCart.length);
            localStorage.setItem('likedCars', JSON.stringify(updatedCart));
        }
    };

    const deleteCar = (carId) => {
        const updatedCart = cart.filter(car => car.id !== carId);

        setCart(updatedCart);
        localStorage.setItem('likedCars', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        setCartCount(cart.length);
    }, [cart]);


    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const replaceCar = () => {
        setIsReplaced(prev => !prev);
    };

    return (
        <CarContext.Provider value={{
            cars,
            cart,
            isSidebarOpen,
            cartCount,
            isReplaced,
            carsData,
            filteredCars,
            filters,
            addToLiked,
            deleteCar,
            toggleSidebar,
            setFilters,
            replaceCar,
            setIsReplaced,
            notification,
            clearNotifications,
            setNotification,
        }}>
            {children}
        </CarContext.Provider>
    );
};
