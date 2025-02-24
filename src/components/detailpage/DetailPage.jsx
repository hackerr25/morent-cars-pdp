import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CarContext } from "../../utils/context/CarContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import Sidebar from "../../pages/sidebar/Sidebar";
import Recommended from "../../Cars/recommended/Recommended";
import view_2 from "../../assets/View 2.png";
import view_3 from "../../assets/View 3.png";
import { ThemeContext } from "../../utils/context/ThemeContext";

const DetailPage = () => {
  const { id } = useParams();
  const { addToLiked, isSidebarOpen, isReplaced } = useContext(CarContext);
  const [activeIds, setActiveIds] = useState([]);
  const [data, setData] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [recentCars, setRecentCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  const handleButton = (carId) => {
    setActiveIds((prevIds) => {
      const updatedIds = prevIds.includes(carId)
        ? prevIds.filter((item) => item !== carId)
        : [...prevIds, carId];

      // LocalStorage ga saqlash
      localStorage.setItem('activeIds', JSON.stringify(updatedIds));
      return updatedIds;
    });

    if (data) {
      addToLiked({
        id: data.id,
        name: data.username,
        image: data.image,
        price: data.price,
      });
    }
  };

  const handleCarCard = (imgUrl) => {
    setMainImg(imgUrl);
  };

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('activeIds')) || [];
    setActiveIds(storedIds);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [carResponse, carsResponse] = await Promise.all([
          fetch(`https://912964747b35f950.mokky.dev/cars/${id}`),
          fetch("https://912964747b35f950.mokky.dev/cars"),
        ]);

        const carData = await carResponse.json();
        const carsData = await carsResponse.json();

        setData(carData);
        setMainImg(carData.image);

        const filteredCars = carsData.filter((car) => car.price <= 450);
        setRecentCars(filteredCars);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!data) return <h2>No data available</h2>;

  const containerStyle = {
    padding: "20px",
    marginTop: "30px",
    width: "100%",
    maxWidth: "1200px",
    borderRadius: "10px",
    border: "1px solid #13131399"
  };

  const textStyle = {
    fontSize: "14px",
  };

  return (
    <div
      className="container"
      style={{
        position: "relative",
        paddingTop: "50px",
        width: "100%",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <Sidebar />
      <div
        className="content"
        style={{
          marginLeft: isSidebarOpen ? "250px" : "0px",
          transition: "margin-left 0.3s ease-in-out",
          width: isSidebarOpen ? "calc(100% - 250px)" : "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isReplaced ? (
          <>
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                marginTop: "30px",
                transition: "width 0.3s ease-in-out",
              }}
            >
              <Recommended isSidebarOpen={isSidebarOpen} />
            </div>
            <div
              className="wrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                flexWrap: "wrap",
                maxWidth: "1200px",
              }}
            >
              {/* Asosiy kontent */}
              <div style={{ flex: "1 0 400px", maxWidth: "700px" }} className="info">
                <div className="card" style={{ width: "100%", border: "none" }}>
                  <img
                    src={mainImg}
                    alt={data.brand}
                    style={{ objectFit: "contain", height: "", width: "100%", borderRadius: "10px" }}
                  />
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "20px", overflowX: "auto" }}>
                  {[data.image, view_2, view_3].map((img, index) => (
                    <div
                      key={index}
                      onClick={() => handleCarCard(img)}
                      style={{
                        background: "#fff",
                        width: index === 0 ? "auto" : "230px",
                        height: "100px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "10px" }}
                        src={img}
                        alt={`${data.brand} view ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ width: "450px", padding: "20px", border: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontSize: "27px", fontWeight: 700 }}>{data.name}</h2>
                  <button
                    onClick={() => handleButton(data.id)}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    {activeIds.includes(data.id) ? (
                      <Favorite style={{ color: "#ED3F3F", width: "24px", height: "24px" }} />
                    ) : (
                      <FavoriteBorderIcon style={{ color: "#596780", width: "24px", height: "24px" }} />
                    )}
                  </button>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "10px" }}>
                  {"⭐️".repeat(4)}
                  <span style={{ color: "#CCC", fontSize: "22px" }}>☆</span>
                  <span style={{ fontSize: "12px", color: "#777" }}>{data.reviews} Reviewer</span>
                </div>

                <p style={{ fontSize: "15px", color: "#596780", margin: "20px 0" }}>{data.desc}</p>

                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>Type-Car</p>
                    <p style={{ margin: "0", fontWeight: 600 }}>{data.carType}</p>
                  </div>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>{data.category}</p>
                    <p style={{ margin: "0", fontWeight: 600 }}>{data.categoryType}</p>
                  </div>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>Capacity</p>
                    <p style={{ margin: "0", fontWeight: 600 }}>{data.capacity}</p>
                  </div>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>{data.persons} Person</p>
                    <p style={{ margin: "0", fontWeight: 600, textAlign: "right" }}>{data.gasoline}L</p>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
                  <div className="d-flex">
                    <h6 style={{ fontSize: "20px", fontWeight: 700, margin: "0px" }}>
                      {data.price}.0$/
                    </h6>
                    <p style={{
                      fontSize: "14px",
                      color: "#90A3BF",
                      fontWeight: 700,
                      marginLeft: "3px",
                      marginBottom: "0px",
                      marginTop: "4px"
                    }}>day</p>
                  </div>
                  <NavLink to={"/car_pay"}
                    style={{
                      backgroundColor: "#3563E9",
                      color: "#FFFFFF",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Rent Now
                  </NavLink>
                </div>
              </div>

              <div style={containerStyle}>
                <div className="reviewMode" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <h2 style={{ margin: 0 }}>Reviews</h2>
                  <span
                    style={{
                      backgroundColor: "#3563E9",
                      color: "white",
                      padding: "4px 11px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {data.comment?.length || 0}
                  </span>
                </div>

                {data.comment?.map((review) => (
                  <div
                    key={review.id}
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      borderBottom: `1px solid ${theme ? "#444" : "#E0E0E0"}`,
                      paddingBottom: "20px",
                      // backgroundColor: theme ? "#2D2D2D" : "#FFFFFF", // Background
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={review.userimg}
                      alt={review.username}
                      style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <h4 style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>{review.username}</h4>
                          <p style={textStyle}>{review.position}</p>
                        </div>
                        <p style={textStyle}>{review.commnetDate}</p>
                      </div>
                      <p style={{ margin: "10px 0 0", ...textStyle }}>{review.commt}</p>
                      <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        {"⭐️".repeat(3)}
                        <span style={{ color: "#CCC", fontSize: "16px" }}>☆</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="wrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                flexWrap: "wrap",
                maxWidth: "1200px",
              }}
            >
              {/* Asosiy kontent */}
              <div style={{ flex: "1 0 400px", maxWidth: "700px" }} className="info">
                <div className="card" style={{ width: "100%", border: "none" }}>
                  <img
                    src={mainImg}
                    alt={data.brand}
                    style={{ objectFit: "contain", height: "", width: "100%", borderRadius: "10px" }}
                  />
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "20px", overflowX: "auto" }}>
                  {[data.image, view_2, view_3].map((img, index) => (
                    <div
                      key={index}
                      onClick={() => handleCarCard(img)}
                      style={{
                        background: "#fff",
                        width: index === 0 ? "auto" : "230px",
                        height: "100px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "10px" }}
                        src={img}
                        alt={`${data.brand} view ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ width: "450px", padding: "20px", border: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontSize: "27px", fontWeight: 700 }}>{data.name}</h2>
                  <button
                    onClick={() => handleButton(data.id)}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    {activeIds.includes(data.id) ? (
                      <Favorite style={{ color: "#ED3F3F", width: "24px", height: "24px" }} />
                    ) : (
                      <FavoriteBorderIcon style={{ color: "#596780", width: "24px", height: "24px" }} />
                    )}
                  </button>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "10px" }}>
                  {"⭐️".repeat(4)}
                  <span style={{ color: "#CCC", fontSize: "22px" }}>☆</span>
                  <span style={{ fontSize: "12px", color: "#777" }}>{data.reviews} Reviewer</span>
                </div>

                <p style={{ fontSize: "15px", color: "#596780", margin: "20px 0" }}>{data.desc}</p>

                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>Type-Car</p>
                    <p style={{ margin: "0", fontWeight: 600 }}>{data.carType}</p>
                  </div>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>{data.category}</p>
                    <p style={{ margin: "0", fontWeight: 600 }}>{data.categoryType}</p>
                  </div>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>Capacity</p>
                    <p style={{ margin: "0", fontWeight: 600 }}>{data.capacity}</p>
                  </div>
                  <div>
                    <p style={{ margin: "0", color: "#777" }}>{data.persons} Person</p>
                    <p style={{ margin: "0", fontWeight: 600, textAlign: "right" }}>{data.gasoline}L</p>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
                  <div className="d-flex">
                    <h6 style={{ fontSize: "20px", fontWeight: 700, margin: "0px" }}>
                      {data.price}.0$/
                    </h6>
                    <p style={{
                      fontSize: "14px",
                      color: "#90A3BF",
                      fontWeight: 700,
                      marginLeft: "3px",
                      marginBottom: "0px",
                      marginTop: "4px"
                    }}>day</p>
                  </div>
                  <NavLink to={"/car_pay"}
                    style={{
                      backgroundColor: "#3563E9",
                      color: "#FFFFFF",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Rent Now
                  </NavLink>
                </div>
              </div>

              <div style={containerStyle}>
                <div className="reviewMode" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <h2 style={{ margin: 0 }}>Reviews</h2>
                  <span
                    style={{
                      backgroundColor: "#3563E9",
                      color: "white",
                      padding: "4px 11px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {data.comment?.length || 0}
                  </span>
                </div>

                {data.comment?.map((review) => (
                  <div
                    key={review.id}
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      borderBottom: `1px solid ${theme ? "#444" : "#E0E0E0"}`,
                      paddingBottom: "20px",
                      // backgroundColor: theme ? "#2D2D2D" : "#FFFFFF", // Background
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={review.userimg}
                      alt={review.username}
                      style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <h4 style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>{review.username}</h4>
                          <p style={textStyle}>{review.position}</p>
                        </div>
                        <p style={textStyle}>{review.commnetDate}</p>
                      </div>
                      <p style={{ margin: "10px 0 0", ...textStyle }}>{review.commt}</p>
                      <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        {"⭐️".repeat(3)}
                        <span style={{ color: "#CCC", fontSize: "16px" }}>☆</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                marginTop: "30px",
                transition: "width 0.3s ease-in-out",
              }}
            >
              <Recommended isSidebarOpen={isSidebarOpen} />
            </div>
          </>
        )}
        
      </div>
    </div>
  );
};

export default DetailPage;

