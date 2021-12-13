import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Products from "./Products";
import Ownership from "./Ownership";
import LowerSection from "./LowerSection";
import Footer from "./Footer";

const Home = () => {
    return(
        <div>
            <Navbar />
            <div className="container-fluid">
                <Stats />
                <Products />
                <Ownership />
            </div>
            <LowerSection />
            <Footer />
        </div>
    )
}

export default Home;