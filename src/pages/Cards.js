import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";
function Cards() {
  const [shop, setShop] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`)
      .then((res) => setShop(res.data))
      .catch((err) => console.log(err));
  }, []);

  const enter = (e, pageName = "", id, name) => {
    e.preventDefault();
    navigate(`/${pageName}`, { state: { id: id, name: name } });
  };

  const percent = (v) => {
    return (v * (100 - 10)) / 100;
  };

  return (
    <div>
      <Navbars />
      <br />
      <br />
      <br />
      <main>
        {shop.map((product) => {
          return (
            <div
              className="card"
              style={{ width: "16rem" }}
              onClick={(e) => enter(e, "more", product, product.id)}
            >
              <img
                src={product.category.image}
                className="card-img-top"
                alt="404"
              />
              <div className="card-body">
                <h3 className="card-title">{product.category.name}</h3>
                <hr />
                <h5>
                  Made in : <strong>CHINA</strong>
                </h5>
                <h5>
                  Price : <strong>${product.price}</strong>
                </h5>
                <h6>
                  <strong>-10</strong>%
                </h6>
                <h5>
                  Total money :<strong>${percent(product.price)}</strong>
                </h5>
                <button className="btn btn-primary">
                  <strong>BUY</strong>
                </button>
              </div>
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default Cards;
