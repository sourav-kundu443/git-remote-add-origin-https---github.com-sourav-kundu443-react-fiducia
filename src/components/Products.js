import React from "react";
import TubeLight from "../images/tubelight.png";
import LedLight from "../images/ledlight.png";
import LedHighBay from "../images/ledhighbay.png";
import {Link} from "react-router-dom";

import data from "../data.json";

const Products = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-8  text-center mt-5 mb-3">
          <h3 className="b">{data.brand}</h3>
          <p>{data.aboutbrand}</p>
        </div>
      </div>

      <div className="row mb-5 mt-3 product-row">
        <div className="col-md-3 col-8 justify-content-center text-center pt-3 pb-3  border mt-3 my-card">
          <img src={TubeLight} className="img-fluid card-image" alt="" />
          <div className="quickShop">
          <Link className="productLink" to="/tubelight">{data.quickshop}</Link>
          </div>
          <p className="text-uppercase">{data.productdataoOne.productseller}</p>
          <h4>{data.productdataoOne.productbrand}</h4>
        </div>
        <div className="col-md-3 col-8 justify-content-center text-center pt-3 pb-3  border mt-3 my-card">
          <img src={LedLight} className="img-fluid card-image" alt="" />
          <div className="quickShop">
          <Link className="productLink" to="/streetlight">{data.quickshop}</Link>
          </div>
          <p className="text-uppercase">{data.productdataoTwo.productseller}</p>
          <h4>{data.productdataoTwo.productbrand}</h4>
        </div>
        <div className="col-md-3 col-8 justify-item-center text-center pt-3 pb-3  border mt-3 my-card">
          <img src={LedHighBay} className="img-fluid card-image" alt="" />
          <div className="quickShop">
          <Link className="productLink" to="/highbaylight">{data.quickshop}</Link>
          </div>
          <p className="text-uppercase">{data.productdataoThree.productseller}</p>
          <h4>{data.productdataoThree.productbrand}</h4>
        </div>
      </div>
      <div class="view-more">
        <Link to="/viewmore">
          View More
          <i class="bi bi-arrow-right" style={{fontSize: "35px;"}}></i>
        </Link>
      </div>
    </div>
  )
}

export default Products;