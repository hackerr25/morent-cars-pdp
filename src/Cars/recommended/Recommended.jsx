import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { CarContext } from '../../utils/context/CarContext';
import { Favorite } from '@mui/icons-material';
import { useFetch } from './../../utils/hook/useFetch';

const Recommended = ({ isSidebarOpen }) => {
    const { addToLiked } = useContext(CarContext);
    const { data } = useFetch('cars');
    const [activeIds, setActiveIds] = useState([]);
    const navigate = useNavigate();

    const handleButton = (id) => {
        if (!activeIds.includes(id)) {
            setActiveIds((prevIds) => [...prevIds, id]);
        } else {
            setActiveIds((prevIds) => prevIds.filter((item) => item !== id));
        }
        const car = data.find((item) => item.id === id);
        if (car) {
            addToLiked(car);
        }
    };

    const handleCarCard = (id) => {
        navigate(`/cars/${id}`);
    };

    const handleRentNow = (car) => {
        localStorage.setItem('selectedCar', JSON.stringify(car));
        navigate('/car_pay');
    };

    const splitText = (text, count) => {
        const words = text.split(' ');
        return words.length > count
            ? words.slice(0, count).join(' ') + '...'
            : text;
    };

    return (
        <div className='container gap-3'>
            <div className="d-flex align-items-center justify-content-between">
                <p style={{
                    color: '#90A3BF',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    fontSize: '16px',
                    paddingBottom: '13px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    marginBottom: '0px',
                    marginTop: '20px',
                }}>
                    Recommendation Car
                </p>
                <NavLink
                    to="/allRecommended"
                    style={{
                        textDecoration: 'none',
                        color: '#3563E9',
                        fontSize: '16px',
                        lineHeight: '20px',
                        fontWeight: '600',
                    }}
                >
                    View All
                </NavLink>
            </div>
            <div
                className="row mt-3"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: isSidebarOpen ? '0px' : "0px",
                    justifyContent: isSidebarOpen ? 'flex-start' : 'space-around',
                }}
            >
                {data.slice(6, 12).map((item) => (
                    <div
                        key={item.id}
                        className="col-md-  4"
                        style={{
                            marginBottom: '20px',
                            width: isSidebarOpen ? 'calc(25% - 20px)' : 'calc(33.33% - 20px)',
                            minWidth: '320px',
                        }}
                    >
                        <div className="card h-100 py-1 px-0" style={{ width: '100%', border: 'none' }}>
                            <div className="card-body">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5
                                        className="card-title"
                                        style={{
                                            fontSize: '20px',
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 700,
                                            marginBottom: '0',
                                        }}
                                    >
                                        {splitText(item.name, 1)}
                                    </h5>
                                    <button
                                        className="popular-btn"
                                        onClick={() => handleButton(item.id)}
                                        style={{
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {activeIds.includes(item.id) ? (
                                            <Favorite style={{ color: '#ED3F3F', width: '24px', height: '24px' }} />
                                        ) : (
                                            <FavoriteBorderIcon style={{ color: '#596780', width: '24px', height: '24px' }} />
                                        )}
                                    </button>
                                </div>
                                <p
                                    onClick={() => handleCarCard(item.id)}
                                    className="card-text"
                                    style={{
                                        margin: '0',
                                        fontSize: '14px',
                                        color: '#90A3BF',
                                        lineHeight: '20px',
                                        fontWeight: 700,
                                        fontFamily: 'Plus Jakarta Sans',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {item.category}
                                </p>
                            </div>
                            <img
                                src={item.image}
                                alt="card"
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    objectFit: 'contain',
                                    cursor: 'pointer',
                                }}
                                className='card-img-top mt-2 mb-4'
                                onClick={() => handleCarCard(item.id)}
                            />
                            <div className="card-body">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className='d-flex align-items-center gap-1'>
                                        <LocalGasStationIcon style={{ width: '24px', height: '24px', color: '#596780' }} />
                                        <h6 style={{
                                            fontSize: '14px',
                                            color: '#90A3BF',
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 500,
                                            marginBottom: '0px',
                                        }}>
                                            {item.gasoline}L
                                        </h6>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <DonutLargeIcon style={{ width: '24px', height: '24px', color: '#596780' }} />
                                        <h6 className="mb-0" style={{
                                            fontSize: '14px',
                                            color: '#90A3BF',
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 500,
                                            marginBottom: '0px',
                                        }}>
                                            {item.categoryType}
                                        </h6>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <PeopleAltIcon style={{ width: '24px', height: '24px', color: '#596780' }} />
                                        <h6 className="" style={{
                                            fontSize: '13px',
                                            color: '#90A3BF',
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 500,
                                        }}>
                                            {item.persons} People
                                        </h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-3" style={{ background: 'none' }}>
                                    <div className='d-flex align-items-center'>
                                        <h6 className='mb-0' style={{
                                            fontSize: '17px',
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 700,
                                        }}>
                                            {item.price}.0$/
                                        </h6>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#90A3BF',
                                            fontWeight: 700,
                                            marginLeft: '4px',
                                            marginBottom: '0px',
                                        }}>
                                            day
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleRentNow(item)}
                                        className={"btn btn-primary btn-sm"}
                                        style={{
                                            fontSize: '16px',
                                            color: '#FFFFFF',
                                            backgroundColor: '#3563E9',
                                            borderRadius: '4px',
                                            padding: '10px 10px',
                                            border: 'none',
                                        }}
                                    >
                                        Rent Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommended;