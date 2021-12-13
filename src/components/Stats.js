import React from "react";

const Stats = () => {
    return (
        <div class="row justify-content-center pt-5 pb-5 stats-row">
            <div class="col-md-2 col-8 stats-column text-center mt-5" id="brands-served">
                <h4>50+</h4>
                <p>Brands Served</p>
            </div>
            <div class="col-md-2 col-8 stats-column text-center ms-3 mt-5" id="product-delivered">
                <h4>2,193,996</h4>
                <p>product delivered</p>
            </div>
            <div class="col-md-2 col-8 stats-column text-center ms-3 mt-5" id="styles-manufectured">
                <h4>1200+</h4>
                <p>styles manufectured</p>
            </div>
        </div>
    )
}

export default Stats;