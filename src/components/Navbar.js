import React from "react";
import Logo from "../images/logo.png";
import LEDHighBay from "../images/ledhighbay.png";
import { Link } from "react-router-dom";
import data from '../data.json';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-md-3 my-navbar w-100">
                <div className="container nav-menu">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} className="img-fluid logo-image" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navLinks" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item  ms-3">
                                <Link className="nav-link text-white" aria-current="page" to="/">{data.home}</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link text-white" to="/aboutus">{data.aboutus}</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link text-white" to="/productconfigurator">{data.productfigurator}</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link text-white" to="/contactus">{data.contactus}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="banner-image w-100 vh-100">
                <div className="container my-container">
                    <div className="row justify-content-evenly pb-5">
                        <div className="col-md-5 col-sm-8" id="my-banner-text">
                            <h1 className="mb-4">{data.bannerHeading}</h1>
                            <p className ="mb-5 mt-4">{data.bannerText}</p>
                            <button className ="btn my-btn">{data.buttonTextOne}</button>
                            </div>
                            <div className ="col-md-5 col-sm-8 my-slide" id="my-slide">
                            <div id="carouselExampleSlidesOnly" className ="carousel slide " data-bs-ride="carousel">
                            <div className ="carousel-inner">
                            <div className ="carousel-item active">
                            <img src={LEDHighBay} className ="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div className ="carousel-item">
                            <img src={LEDHighBay} className ="d-block w-100" alt="..." />
                            </div>
                            <div className ="carousel-item">
                            <img src={LEDHighBay} className ="d-block w-100" alt="..." />
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

export default Navbar;