import React from "react";
import Design from "../images/design.png";
import Sampling from "../images/sampling.png";
import Quality from "../images/quality.png";

import data from "../data.json";

const Ownership = () => {
  return (
    <div>
      <div class="row justify-content-center ownership">
        <div class="col-sm-12 col-lg-8 col-md-8 text-center mt-5 mb-3">
          <h3>{data.completeownership}</h3>
          <p>{data.ownership}
          </p>
        </div>
      </div>
      <div class="row ownership ownershipCard pt-5 pb-5">
        <div class="text-center mt-auto mb-auto">
          <i class="bi bi-chevron-left my-arrow"></i>
        </div>

        <div class="col-md-2 col-sm-8 mt-3 sm-card text-center">
          <img src={Design} class="img-fluid" width="50" alt="" />
          <h5 class="text-uppercase">{data.designcard.heading}</h5>
          <p>{data.designcard.text}</p>
        </div>

        <div class="col-md-2 col-sm-8 mt-3 sm-card text-center">
          <img src={Sampling} class="img-fluid" width="50" alt="" />
          <h5>{data.samplingcard.heading}</h5>
          <p>{data.samplingcard.text}</p>
        </div>

        <div class="col-md-2 col-sm-8 mt-3 sm-card text-center">
          <img src={Design} class="img-fluid" width="50" alt="" />
          <h5>{data.certificationcard.heading}</h5>
          <p>{data.certificationcard.text}</p>
        </div>

        <div class="col-md-2 col-sm-8 mt-3 sm-card text-center">
          <img src={Design} class="img-fluid" width="50" alt="" />
          <h5>{data.productioncard.heading}</h5>
          <p>{data.productioncard.text}</p>
        </div>

        <div class="col-md-2 col-sm-8 mt-3 sm-card text-center">
          <img src={Quality} class="img-fluid" width="50" alt=""
          />
          <h5>{data.qualitycard.heading}</h5>
          <p>{data.qualitycard.text}</p>
        </div>

        <div class="text-center mt-auto mb-auto">
          <i class="bi bi-chevron-right my-arrow"></i>
        </div>
      </div>

    </div>
  )
}

export default Ownership;