import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarContext } from "../../utils/context/CarContext";

const SearchedCars = () => {
    const { carsData } = useContext(CarContext);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("search");
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        if (query) {
            const results = carsData.filter(car =>
                car.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCars(results);
        }
    }, [query, carsData]);

    console.log(carsData);


    return (
        <div className="container d-flex flex-column align-items-center" style={{ marginTop: "75px" }}>
            <div className="row w-100 justify-content-center">
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <div key={car.id} className="col-10 mb-4 mt-4">
                            <div className="card shadow-sm">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img
                                            src={car.image}
                                            className="img-fluid rounded-start w-100"
                                            alt="Car img"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="card-body">
                                            <h5 className="card-title">{car.name}</h5>
                                            <p className="card-text">{car.desc}</p>
                                            <p className="card-text"><strong>Price:</strong> ${car.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    );
};

export default SearchedCars;
