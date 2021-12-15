import React, { useEffect, useState } from "react";
// import TubeLight from "../images/tubelight.png";
// import LedLight from "../images/ledlight.png";
// import LedHighBay from "../images/ledhighbay.png";
import { Link } from "react-router-dom";


const Products = () => {

  const [product, setProduct] = useState([]);

  const getProductData = async () => {

    const response = await fetch('./data.json');
    console.log(response);
    setProduct(await response.json());
    
    // const data = await response.json();
    // console.log(data);
    // setProduct(data);
  }

  useEffect(() => {
    getProductData();
  }, [])


  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-8  text-center mt-5 mb-3">
          <h3 className="b">Fiducia</h3>
          <p>The trust is in the name. A home-grown startup, Fiducia - Powered by LeSol, engages with the brands to give identity to the products. A simple configurator enables you to put your brand to any product and start marketing from the word get-go. </p>
        </div>
      </div>

      <div className="row mb-5 mt-3 product-row">
        {
          product.map((currentElement) => {
            return(
            <div className="col-md-3 col-8 justify-content-center text-center pt-3 pb-3  border mt-3 my-card">
              <img src={currentElement.productImage} className="img-fluid card-image" alt="" />
              <div className="quickShop">
                <Link className="productLink" to="/tubelight">Quick Shop</Link>
              </div>
              <p className="text-uppercase">{currentElement.productseller}</p>
              <h4>{currentElement.productbrand}</h4>
            </div>

            )
          })
        }
      </div>
      <div class="view-more">
        <Link to="/viewmore">
          View More
          <i class="bi bi-arrow-right" style={{ fontSize: "35px;" }}></i>
        </Link>
      </div>
    </div>
  )
}

export default Products;