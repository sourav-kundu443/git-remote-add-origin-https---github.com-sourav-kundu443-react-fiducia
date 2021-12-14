import React from "react";
import Design from "../images/design.png";
import Sampling from "../images/sampling.png";
import Quality from "../images/quality.png";

const Ownership = () => {
  return (
    <div>
      <div class="row justify-content-center ownership">
        <div class="col-sm-12 col-lg-8 col-md-8 text-center mt-5 mb-3">
          <h3>Complete Ownership</h3>
          <p>From Design to Fulfilment
            We assume total responsibility and ownership from Design to Fulfilment to Reverse Logistics. Leave your
            headache to us and just market3 your brand.
          </p>
        </div>
      </div>
      <div class="row ownership ownershipCard pt-5 pb-5">
        {/* <div class="col-1 text-center mt-auto mb-auto my-arrow">
          <i class="bi bi-chevron-left"></i>
        </div> */}

        <div class="col-md-2 col-sm-10 mt-3 sm-card text-center">
          <img src={Design} class="img-fluid" width="50" alt="" />
          <h5 class="text-uppercase">design</h5>
          <p>Use our superior product configurator to design the product you want your brand on.
          </p>
        </div>

        <div class="col-md-2 col-sm-10 mt-3 sm-card text-center">
          <img src={Sampling} class="img-fluid" width="50" alt="" />
          <h5>Sampling & Cost</h5>
          <p>Promptly get samples of product configured.</p>
        </div>

        <div class="col-md-2 col-sm-10 mt-3 sm-card text-center">
          <img src={Design} class="img-fluid" width="50" alt="" />
          <h5>Certification</h5>
          <p>: Once you approve the samples, our team quickly gets to the job of certifications such as BIS, BEE, MNRE,
            UL, VDE, CE, etc of your product to ensure that it fully complies with the local law</p>
        </div>

        <div class="col-md-2 col-sm-10 mt-3 sm-card text-center">
          <img src={Design} class="img-fluid" width="50" alt="" />
          <h5>Production</h5>
          <p>Our production team will work alongside the certification team and undertake production immediately.</p>
        </div>

        <div class="col-md-2 col-sm-10 mt-3 sm-card text-center">
          <img src={Quality} class="img-fluid" width="50" alt=""
          />
          <h5>Quality Control</h5>
          <p>All our vendors and suppliers are onboarded after through check on quality and production capabilities. Be
            rest assured that our quality will be of global standards.</p>
        </div>

        {/* <div class="col-1 text-center mt-auto mb-auto my-arrow">
          <i class="bi bi-chevron-right"></i>
        </div> */}
      </div>

    </div>
  )
}

export default Ownership;