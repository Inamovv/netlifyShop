import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel"; 
import Navbars from "../components/Navbars";

function More() {
  const location = useLocation(); 
  console.log(location);

  const percent = (v) => {
    return (v * (100 - 10)) / 100;
  };
  return (
    <div>
      <Navbars/>
      <br /><br /> 
      <main className="parent">
        <div className="carusel">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={location.state.id.images[0]}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{location.state.id.title}</h3>
                <p>
                {location.state.id.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={location.state.id.images[1]}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>{location.state.id.title}</h3>
                <p>{location.state.id.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={location.state.id.images[2]}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{location.state.id.title}</h3>
                <p>
                {location.state.id.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="info"> <br />
        <div
              className="card"
              style={{ width: "16rem" }}
              // onClick={(e) => enter(e, "more", product, product.id)}
            >
              <img
                src={location.state.id.category.image}
                className="card-img-top"
                alt="404"
              />
              <div className="card-body">
                <h3 className="card-title">{location.state.id.category.name}</h3>
                <hr /> 
                <h5>
                  Made in : <strong>China</strong>
                </h5>
                <h5>
                  Price : <strong>${location.state.id.price}</strong>
                </h5>
                <h6>
                  <strong>-10</strong>%
                </h6>
                <h5>
                  Total money :<strong>${percent(location.state.id.price)}</strong>
                </h5>
                <button className="btn btn-primary">
                  <strong>BUY</strong>
                </button>
              </div>
            </div>
            <div className="full-info">
                <h5><strong>{location.state.id.category.name}</strong></h5><br />
                <h5>About: <br/> <strong>{location.state.id.title}</strong></h5><br />
                <h5>Good guality:<br/> <strong>{location.state.id.description}</strong></h5><br/>
                <h5>Created at: <br/><strong>{location.state.id.creationAt}</strong></h5>
            </div>
        </div>
      </main>
    </div>
  );
}
export default More;
