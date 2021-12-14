import React from "react";
import data from "../data.json";

const Stats = () => {
    return (
        <div class="row pt-5 pb-5 stats-row">
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="brands-served">
                <h4>{data.brandserved.number}</h4>
                <p className="text-capitalize">{data.brandserved.text}</p>
            </div>
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="product-delivered">
                <h4>{data.productdelivered.number}</h4>
                <p className="text-capitalize">{data.productdelivered.text}</p>
            </div>
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="styles-manufectured">
                <h4>{data.stylesmanufectured.number}</h4>
                <p className="text-capitalize">{data.stylesmanufectured.text}</p>
            </div>
        </div>
    )
}

export default Stats;