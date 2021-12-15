import React from "react";
import LedTubeLight from "../images/ledtubelight.png";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
// import data from '../data.js';

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row my-footer text-white pt-5">
        <div className="col-md-4 mt-3">
          <div className="row">
            <div className="col-12">
              <img src={Logo} className="img-fluid footer-logo" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-4">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 pb-3">
              {/* <!-- Social icons --> */}
              <Link to="/facebook">
                <i className="bi bi-facebook social-icons" id="facebook"></i>
              </Link>
              <Link to="/linkedin">
                <i className="bi bi-linkedin social-icons" id="linkedin"></i>
              </Link>
              <Link to="/twitter">
                <i className="bi bi-twitter social-icons" id="twitter"></i>
              </Link>
              <Link to="/youtube">
                <i className="bi bi-youtube social-icons" id="youtube"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div className="row">
            <div className="col-md-12">
              <h5>Gallery</h5>
              <div classNameName="footer-images">
                <Link to="/insta1">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
                <Link to="/insta2">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
                <Link to="/insta3">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
                <Link to="/insta4">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
                <Link to="/insta5">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
                <Link to="/insta6">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
                <Link to="/insta7">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
                <Link to="/insta8">
                  <img src={LedTubeLight} className="img-fluid mt-2 insta-img" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className=" newsletter">
            <h5>Newsletter</h5>
            <div className="email-newsletter mt-3 mb-3">
              <input type="email" name="email" id="" placeholder="Enter email here" />
              <button type="submit" className="newsletter-button rounded-circle">
                <i className="bi bi-symmetry-horizontal"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 mb-4">
          <h5>Usefull Links</h5>
          <div classNameName="">
            <i className="bi bi-chevron-double-right"></i>
            <Link className="text-white footer-link" to="/">Home</Link>
          </div>
          <div className="">
            <i className="bi bi-chevron-double-right"></i>
            <Link className="text-white footer-link" to="/aboutus">About Us</Link>
          </div>
          <div className="">
            <i className="bi bi-chevron-double-right"></i>
            <Link className="text-white footer-link" to="/productconfigurator">Product Configurator</Link>
          </div>
          <div className="">
            <i className="bi bi-chevron-double-right"></i>
            <Link className="text-white footer-link" to="/contactus">Contact Us</Link>
          </div>
          <div className="">
            <i className="bi bi-chevron-double-right"></i>
            <Link className="text-white footer-link" to="/support">Support</Link>
          </div>
          <div>
            <i className="bi bi-chevron-double-right"></i>
            <Link className="text-white footer-link" to="/feedback">Feedback</Link>
          </div>
        </div>
      </div>

      <div className="row my-copyright">
        <div className="col-12 text-center">
          <p>Copyright © 2021 FIDUCIA. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;