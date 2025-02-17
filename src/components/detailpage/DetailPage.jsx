import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarContext } from "../../utils/context/CarContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const DetailPage = () => {
  const { id } = useParams();
  const [activeIds, setActiveIds] = useState([]);
  const { addToLiked } = useContext(CarContext);
  const [data, setData] = useState([])

  const handleButton = (id) => {
    if (!activeIds.includes(id)) {
      setActiveIds((prevIds) => [...prevIds, id]);
    } else {
      setActiveIds((prevIds) => prevIds.filter((item) => item !== id));
    }
    const car = data?.find(item => item.id === id);
    if (car) {
      addToLiked(car);
    }
  };

  useEffect(() => {
    fetch(`https://912964747b35f950.mokky.dev/cars/${id}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error("Error", err.message))
  }, [id])

  if (!data) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='container p-2 d-flex gap-4'>
      {/* Card for Image */}
      <div className="card" style={{ width: "440px", border: "none" }}>
        <img
          src={data.image}
          alt={data.brand}
          className="card-img-top"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>

      {/* Card for Car Details */}
      <div className="card" style={{ width: "480px", padding: "20px", border: "none" }}>
        <div className="card-head" style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className='card-title' style={{
            fontSize: "27px",
            color: "#1A202C",
            fontFamily: "Plus Jakarta Sans",
            fontOpticalSizing: "auto",
            lineHeight: "40px",
            fontWeight: 700,
            fontStyle: "normal",
            marginBottom: "0px"
          }}>{data.name}</h2>
          <button className={"popular-btn"} onClick={() => handleButton(data.id)}>
            <FavoriteBorderIcon style={{
              borderRadius: "100%",
              backgroundColor: activeIds.includes(data.id) ? "#ED3F3F" : "transparent",
              width: '24px',
              height: "24px",
              color: activeIds.includes(data.id) ? 'white' : '#596780'
            }} />
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {"⭐".repeat(4)}
          <span style={{ color: "#CCC", fontSize: "22px" }}>☆</span>
          <span style={{ fontSize: "12px", color: "#777" }}>{data.reviews} Reviewer</span>
        </div>
        <p style={{
          width: "450px",
          height: "50px",
          fontSize: "15px",
          lineHeight: "20px",
          color: "#596780",
          fontWeight: 400,
          fontFamily: "Plus Jakarta Sans",
        }}>{data.desc}</p>
        <div className="card-main">
          <div className="footer-right d-flex justify-content-between" style={{ marginRight: '20px' }}>
            <div className="">
              <p className='type-car'>Type-Car</p>
              <p className='type-car'>{data.carType}</p>
            </div>
            <div className="">
              <p className='type-car2'>{data.category}</p>
              <p className='type-car2'>{data.categoryType}</p>
            </div>

            <div className="">
              <p className='type-car'>Capacity</p>
              <p className='type-car'>{data.capacity}</p>
            </div>
            <div className="">
              <p className='type-car2'>{data.persons} Person</p>
              <p className='type-car2' style={{ textAlign: "right" }}>{data.gasoline}L</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-3" style={{ background: "none" }}>
            <div className='d-flex align-items-center mt-3'>
              <div className='m-0'>
                <h6 className='mb-0' style={{
                  fontSize: "20px",
                  color: "#1A202C",
                  fontWeight: 700,
                  marginBottom: "0px"
                }}>
                  {data.price}.0$/
                </h6>
                <s className='mb-1' style={{
                  fontSize: "14px",
                  color: "#90A3BF",
                  fontWeight: 700,
                  marginBottom: "0"
                }}>
                  {data.discount ? data.discount : "no discount"}$
                </s>
              </div>
              <p style={{
                fontSize: "14px",
                color: "#90A3BF",
                fontWeight: 700,
              }}> day</p>
            </div>
            <button className={"btn btn-primary btn-sm"} style={{
              fontSize: "16px",
              color: "#FFFFFF",
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
  )
}

export default DetailPage;
