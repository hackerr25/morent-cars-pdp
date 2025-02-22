import { createContext, useEffect, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
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

    useEffect(() => {
        fetchCarsData();
    }, []);

    useEffect(() => {
        let filtered = [...carsData];
        const activeTypes = Object.keys(filters.type).filter(
            (type) => filters.type[type]
        );
        if (activeTypes.length > 0) {
            filtered = filtered.filter((car) =>
                activeTypes.includes(car.carType)
            );
        }

        // Filter by capacity
        const activeCapacities = Object.keys(filters.capacity).filter(
            (capacity) => filters.capacity[capacity]
        );
        if (activeCapacities.length > 0) {
            filtered = filtered.filter((car) => {
                const capacityNum = parseInt(car.capacity);
                return activeCapacities.some((cap) => {
                    if (cap === "8 or More") return capacityNum >= 8;
                    return capacityNum === parseInt(cap);
                });
            });
        }

        // Filter by price
        filtered = filtered.filter((car) => car.price <= filters.price);

        setFilteredCars(filtered);
    }, [filters, carsData]);

    const addToLiked = (car) => {
        setCart((prev) => {
            const existingCar = prev.some((p) => p.id === car.id);
            if (!existingCar) {
                setCartCount((count) => count + 1);
                return [...prev, car];
            }
            return prev;
        });
    };

    const deleteCar = (car) => {
        setCart((prev) => {
            const index = prev.findIndex((p) => p.id === car.id);
            return index;
        });
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const inputCars = (cars) => {
        setCars((prev) => [...prev, ...cars]);
        setCart((prev) => prev.filter((car) => !cars.includes(car)));
        setCartCount((prev) => prev - cars.length);
        setCartCount((prev) => prev + cars.length);
    };
    const replaceCar = () => {
        setIsReplaced((prev) => !prev);
    }

    return (
        <CarContext.Provider
            value={{
                addToLiked,
                deleteCar,
                cart,
                isSidebarOpen,
                cartCount,
                toggleSidebar,
                cars,
                inputCars,
                carsData,
                filteredCars,
                isReplaced,
                setIsReplaced,
                filters,
                setFilters,
                replaceCar
            }}
        >
            {children}
        </CarContext.Provider>
    );
};
