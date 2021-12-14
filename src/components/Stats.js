import React from "react";
import Data from "../data";

const Stats = () => {
    return (
        <div class="row pt-5 pb-5 stats-row">
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="brands-served">
                <h4>{Data.brandserved.number}</h4>
                <p className="text-capitalize">{Data.brandserved.text}</p>
            </div>
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="product-delivered">
                <h4>{Data.productdelivered.number}</h4>
                <p className="text-capitalize">{Data.productdelivered.text}</p>
            </div>
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="styles-manufectured">
                <h4>{Data.stylesmanufectured.number}</h4>
                <p className="text-capitalize">{Data.stylesmanufectured.text}</p>
            </div>
        </div>
    )
}

export default Stats;