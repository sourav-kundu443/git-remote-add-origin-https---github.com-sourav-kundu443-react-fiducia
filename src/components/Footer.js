import React from "react";
import LedTubeLight from "../images/ledtubelight.png";

const Footer = () => {
    return(
        <div class="container-fluid">
    <div class="row my-footer text-white justify-content-center pt-5">
      <div class="col-md-3 mt-3">
        <div class="row">
          <div class="col-12">
            <img src="./images/logo.png" class="img-fluid footer-logo" alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col-10 mt-4">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 pb-3">
            {/* <!-- Social icons --> */}
            <i class="bi bi-facebook social-icons" id="facebook"></i>
            <i class="bi bi-linkedin social-icons" id="linkedin"></i>
            <i class="bi bi-twitter social-icons" id="twitter"></i>
            <i class="bi bi-youtube social-icons" id="youtube"></i>
          </div>
        </div>
      </div>
      <div class="col-md-3 mt-3">
        <div class="row">
          <div class="col-md-12">
            <h5>Gallery</h5>
            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt="" />
            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt="" />
            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt="" />
            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt="" />

            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt="" />
            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt="" />
            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt="" />
            <img src={LedTubeLight} class="img-fluid mt-2 insta-img" alt=""/>
          </div>
        </div>
        <div class=" newsletter">
          <h5>Newsletter</h5>
          <div class="email-newsletter mt-3 mb-3">
            <input type="email" name="email" id="" placeholder="Enter email here" />
            <button type="submit" class="newsletter-button rounded-circle">
              <i class="bi bi-symmetry-horizontal"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-3 mt-3 mb-4">
        <h5>Useful Links</h5>
        <div>
          <i class="bi bi-chevron-double-right"></i>
          <a class="text-decoration-none text-white" href="#">Home</a>
        </div>
        <div>
          <i class="bi bi-chevron-double-right"></i>
          <a class="text-decoration-none text-white" href="#">About Us</a>
        </div>
        <div>
          <i class="bi bi-chevron-double-right"></i>
          <a class="text-decoration-none text-white" href="#">Product Configurator</a>
        </div>
        <div>
          <i class="bi bi-chevron-double-right"></i>
          <a class="text-decoration-none text-white" href="#">Contact Us</a>
        </div>
        <div>
          <i class="bi bi-chevron-double-right"></i>
          <a class="text-decoration-none text-white" href="#">Support</a>
        </div>
        <div>
          <i class="bi bi-chevron-double-right"></i>
          <a class="text-decoration-none text-white" href="#">Feedback</a>
        </div>
      </div>
    </div>

    <div class="row my-copyright">
      <div class="col-12 text-center">
        <p>Copyright © 2021 FIDUCIA. All Rights Reserved</p>
      </div>
    </div>
  </div>
    )
}

export default Footer;