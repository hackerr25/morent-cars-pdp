import { createContext, useEffect, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
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

    // Ma'lumotlarni olish
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

    // Filterlarni qo‘llash
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

    // Mashinani yoqtirilganlarga qo‘shish
    const addToLiked = (car) => {
        if (!cart.some(c => c.id === car.id)) {
            const updatedCart = [...cart, car];
            setCart(updatedCart);
            setCartCount(updatedCart.length);
            localStorage.setItem('likedCars', JSON.stringify(updatedCart));
        }
    };

    // Mashinani yoqtirilganlardan o‘chirish
    const deleteCar = (carId) => {
        const updatedCart = cart.filter(car => car.id !== carId);
        setCart(updatedCart);
        setCartCount(updatedCart.length);
        localStorage.setItem('likedCars', JSON.stringify(updatedCart));
    };

    // Sidebar-ni ochish/yopish
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    // Mashinalarni almashtirish
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
        }}>
            {children}
        </CarContext.Provider>
    );
};
