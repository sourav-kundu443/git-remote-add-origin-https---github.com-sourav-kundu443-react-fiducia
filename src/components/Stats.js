import React from "react";

const Stats = () => {
    return (
        <div class="row justify-content-center pt-5 pb-5 stats-row">
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="brands-served">
                <h4>50+</h4>
                <p className="text-capitalize">brands served</p>
            </div>
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="product-delivered">
                <h4>2,193,996</h4>
                <p className="text-capitalize">product delivered</p>
            </div>
            <div class="col-md-3 col-10 stats-column text-center mt-5" id="styles-manufectured">
                <h4>1200+</h4>
                <p className="text-capitalize">styles manufectured</p>
            </div>
        </div>
    )
}

export default Stats;