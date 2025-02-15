import React from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import car_icon from "../../assets/car.png"


const PopularCars = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-between">
                <p style={{
                    color: "#90A3BF",
                    padding: "10px 20px",
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    marginBottom: "0",
                    marginTop: "20px"
                }}>Popular Cars</p>
                <NavLink to={"/allPopulars"} style={{
                    textDecoration: 'none',
                    color: '#3563E9',
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "600",
                }}>View All</NavLink>
            </div>
            <div className="row mt-3">
                <div className="col-md-4" style={{
                    marginBottom: "30px"
                }}>
                    <div className="card h-100 py-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className="card-title" style={{
                                    fontSize: "20px",
                                    color: "#1A202C",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    marginBottom: "0"
                                }}>Koenigsegg</h5>
                                <button className={"popular-btn"}>
                                    <FavoriteBorderIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                </button>
                            </div>
                            <p className="card-text" style={{
                                margin: "0",
                                fontSize: "14px",
                                color: "#90A3BF",
                                lineHeight: "20px",
                                fontWeight: 700,
                                fontFamily: "Plus Jakarta Sans"
                            }}>Sport</p>
                        </div>
                        <img src={car_icon} alt="card" style={{ height: "72px", objectFit: "contain" }} className='card-img-top mt-2 mb-5' />
                        <div className="card-body">
                            <div className="d-flex gap-4 align-items-center">
                                <div className='d-flex align-items-center gap-1'>
                                    <LocalGasStationIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "21px",
                                        fontWeight: 500,
                                        marginBottom: "0px",
                                    }}>90L</h6>
                                </div>
                                <div className='d-flex align-items-center gap-1'>
                                    <DonutLargeIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="mb-0" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>Manual</h6>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <PeopleAltIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>2 People</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mb-0' style={{
                                        fontSize: "20px",
                                        color: "#1A202C",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "25px",
                                        fontWeight: 700,
                                        marginBottom: "0px"
                                    }}>
                                        $99.00/
                                    </h6>
                                    <p style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 700,
                                        marginBottom: "0px",
                                        marginLeft: "4px",
                                        marginTop: "4px"
                                    }}> day</p>
                                </div>
                                <button className={"btn btn-primary btn-sm"} style={{
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    backgroundColor: "#3563E9",
                                    borderRadius: "4px",
                                    padding: "10px 20px",
                                    marginLeft: "20px",
                                    marginTop: "20px"
                                }}>Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{
                    marginBottom: "30px"
                }}>
                    <div className="card h-100 py-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className="card-title" style={{
                                    fontSize: "20px",
                                    color: "#1A202C",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    marginBottom: "0"
                                }}>Koenigsegg</h5>
                                <button className={"popular-btn"}>
                                    <FavoriteBorderIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                </button>
                            </div>
                            <p className="card-text" style={{
                                margin: "0",
                                fontSize: "14px",
                                color: "#90A3BF",
                                lineHeight: "20px",
                                fontWeight: 700,
                                fontFamily: "Plus Jakarta Sans"
                            }}>Sport</p>
                        </div>
                        <img src={car_icon} alt="card" style={{ height: "72px", objectFit: "contain" }} className='card-img-top mt-2 mb-5' />
                        <div className="card-body">
                            <div className="d-flex gap-4 align-items-center">
                                <div className='d-flex align-items-center gap-1'>
                                    <LocalGasStationIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "21px",
                                        fontWeight: 500,
                                        marginBottom: "0px",
                                    }}>90L</h6>
                                </div>
                                <div className='d-flex align-items-center gap-1'>
                                    <DonutLargeIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="mb-0" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>Manual</h6>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <PeopleAltIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>2 People</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mb-0' style={{
                                        fontSize: "20px",
                                        color: "#1A202C",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "25px",
                                        fontWeight: 700,
                                        marginBottom: "0px"
                                    }}>
                                        $99.00/
                                    </h6>
                                    <p style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 700,
                                        marginBottom: "0px",
                                        marginLeft: "4px",
                                        marginTop: "4px"
                                    }}> day</p>
                                </div>
                                <button className={"btn btn-primary btn-sm"} style={{
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    backgroundColor: "#3563E9",
                                    borderRadius: "4px",
                                    padding: "10px 20px",
                                    marginLeft: "20px",
                                    marginTop: "20px"
                                }}>Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{
                    marginBottom: "30px"
                }}>
                    <div className="card h-100 py-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className="card-title" style={{
                                    fontSize: "20px",
                                    color: "#1A202C",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    marginBottom: "0"
                                }}>Koenigsegg</h5>
                                <button className={"popular-btn"}>
                                    <FavoriteBorderIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                </button>
                            </div>
                            <p className="card-text" style={{
                                margin: "0",
                                fontSize: "14px",
                                color: "#90A3BF",
                                lineHeight: "20px",
                                fontWeight: 700,
                                fontFamily: "Plus Jakarta Sans"
                            }}>Sport</p>
                        </div>
                        <img src={car_icon} alt="card" style={{ height: "72px", objectFit: "contain" }} className='card-img-top mt-2 mb-5' />
                        <div className="card-body">
                            <div className="d-flex gap-4 align-items-center">
                                <div className='d-flex align-items-center gap-1'>
                                    <LocalGasStationIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "21px",
                                        fontWeight: 500,
                                        marginBottom: "0px",
                                    }}>90L</h6>
                                </div>
                                <div className='d-flex align-items-center gap-1'>
                                    <DonutLargeIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="mb-0" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>Manual</h6>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <PeopleAltIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>2 People</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mb-0' style={{
                                        fontSize: "20px",
                                        color: "#1A202C",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "25px",
                                        fontWeight: 700,
                                        marginBottom: "0px"
                                    }}>
                                        $99.00/
                                    </h6>
                                    <p style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 700,
                                        marginBottom: "0px",
                                        marginLeft: "4px",
                                        marginTop: "4px"
                                    }}> day</p>
                                </div>
                                <button className={"btn btn-primary btn-sm"} style={{
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    backgroundColor: "#3563E9",
                                    borderRadius: "4px",
                                    padding: "10px 20px",
                                    marginLeft: "20px",
                                    marginTop: "20px"
                                }}>Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{
                    marginBottom: "30px"
                }}>
                    <div className="card h-100 py-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className="card-title" style={{
                                    fontSize: "20px",
                                    color: "#1A202C",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    marginBottom: "0"
                                }}>Koenigsegg</h5>
                                <button className={"popular-btn"}>
                                    <FavoriteBorderIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                </button>
                            </div>
                            <p className="card-text" style={{
                                margin: "0",
                                fontSize: "14px",
                                color: "#90A3BF",
                                lineHeight: "20px",
                                fontWeight: 700,
                                fontFamily: "Plus Jakarta Sans"
                            }}>Sport</p>
                        </div>
                        <img src={car_icon} alt="card" style={{ height: "72px", objectFit: "contain" }} className='card-img-top mt-2 mb-5' />
                        <div className="card-body">
                            <div className="d-flex gap-4 align-items-center">
                                <div className='d-flex align-items-center gap-1'>
                                    <LocalGasStationIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "21px",
                                        fontWeight: 500,
                                        marginBottom: "0px",
                                    }}>90L</h6>
                                </div>
                                <div className='d-flex align-items-center gap-1'>
                                    <DonutLargeIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="mb-0" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>Manual</h6>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <PeopleAltIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>2 People</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mb-0' style={{
                                        fontSize: "20px",
                                        color: "#1A202C",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "25px",
                                        fontWeight: 700,
                                        marginBottom: "0px"
                                    }}>
                                        $99.00/
                                    </h6>
                                    <p style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 700,
                                        marginBottom: "0px",
                                        marginLeft: "4px",
                                        marginTop: "4px"
                                    }}> day</p>
                                </div>
                                <button className={"btn btn-primary btn-sm"} style={{
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    backgroundColor: "#3563E9",
                                    borderRadius: "4px",
                                    padding: "10px 20px",
                                    marginLeft: "20px",
                                    marginTop: "20px"
                                }}>Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{
                    marginBottom: "30px"
                }}>
                    <div className="card h-100 py-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className="card-title" style={{
                                    fontSize: "20px",
                                    color: "#1A202C",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    marginBottom: "0"
                                }}>Koenigsegg</h5>
                                <button className={"popular-btn"}>
                                    <FavoriteBorderIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                </button>
                            </div>
                            <p className="card-text" style={{
                                margin: "0",
                                fontSize: "14px",
                                color: "#90A3BF",
                                lineHeight: "20px",
                                fontWeight: 700,
                                fontFamily: "Plus Jakarta Sans"
                            }}>Sport</p>
                        </div>
                        <img src={car_icon} alt="card" style={{ height: "72px", objectFit: "contain" }} className='card-img-top mt-2 mb-5' />
                        <div className="card-body">
                            <div className="d-flex gap-4 align-items-center">
                                <div className='d-flex align-items-center gap-1'>
                                    <LocalGasStationIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "21px",
                                        fontWeight: 500,
                                        marginBottom: "0px",
                                    }}>90L</h6>
                                </div>
                                <div className='d-flex align-items-center gap-1'>
                                    <DonutLargeIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="mb-0" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>Manual</h6>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <PeopleAltIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>2 People</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mb-0' style={{
                                        fontSize: "20px",
                                        color: "#1A202C",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "25px",
                                        fontWeight: 700,
                                        marginBottom: "0px"
                                    }}>
                                        $99.00/
                                    </h6>
                                    <p style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 700,
                                        marginBottom: "0px",
                                        marginLeft: "4px",
                                        marginTop: "4px"
                                    }}> day</p>
                                </div>
                                <button className={"btn btn-primary btn-sm"} style={{
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    backgroundColor: "#3563E9",
                                    borderRadius: "4px",
                                    padding: "10px 20px",
                                    marginLeft: "20px",
                                    marginTop: "20px"
                                }}>Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{
                    marginBottom: "30px"
                }}>
                    <div className="card h-100 py-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className="card-title" style={{
                                    fontSize: "20px",
                                    color: "#1A202C",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    marginBottom: "0"
                                }}>Koenigsegg</h5>
                                <button className={"popular-btn"}>
                                    <FavoriteBorderIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                </button>
                            </div>
                            <p className="card-text" style={{
                                margin: "0",
                                fontSize: "14px",
                                color: "#90A3BF",
                                lineHeight: "20px",
                                fontWeight: 700,
                                fontFamily: "Plus Jakarta Sans"
                            }}>Sport</p>
                        </div>
                        <img src={car_icon} alt="card" style={{ height: "72px", objectFit: "contain" }} className='card-img-top mt-2 mb-5' />
                        <div className="card-body">
                            <div className="d-flex gap-4 align-items-center">
                                <div className='d-flex align-items-center gap-1'>
                                    <LocalGasStationIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "21px",
                                        fontWeight: 500,
                                        marginBottom: "0px",
                                    }}>90L</h6>
                                </div>
                                <div className='d-flex align-items-center gap-1'>
                                    <DonutLargeIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="mb-0" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>Manual</h6>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <PeopleAltIcon style={{
                                        width: '24px', height: "24px", color: "#596780"
                                    }} />
                                    <h6 className="" style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        marginBottom: "0px"
                                    }}>2 People</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2" style={{ background: "none" }}>
                                <div className='d-flex align-items-center mt-3'>
                                    <h6 className='mb-0' style={{
                                        fontSize: "20px",
                                        color: "#1A202C",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "25px",
                                        fontWeight: 700,
                                        marginBottom: "0px"
                                    }}>
                                        $99.00/
                                    </h6>
                                    <p style={{
                                        fontSize: "14px",
                                        color: "#90A3BF",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontOpticalSizing: "auto",
                                        lineHeight: "16px",
                                        fontWeight: 700,
                                        marginBottom: "0px",
                                        marginLeft: "4px",
                                        marginTop: "4px"
                                    }}> day</p>
                                </div>
                                <button className={"btn btn-primary btn-sm"} style={{
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontOpticalSizing: "auto",
                                    lineHeight: "20px",
                                    fontWeight: 600,
                                    backgroundColor: "#3563E9",
                                    borderRadius: "4px",
                                    padding: "10px 20px",
                                    marginLeft: "20px",
                                    marginTop: "20px"
                                }}>Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PopularCars