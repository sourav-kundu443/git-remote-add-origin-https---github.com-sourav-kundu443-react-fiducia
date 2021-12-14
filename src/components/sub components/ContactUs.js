import React from "react";
import {Link} from "react-router-dom";

import '../sub components/styleSubComponents.css';

const ContactUs = () =>{
    return (
        <div className="contactUs text-center">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, consequatur hic. Ut nobis nesciunt sequi modi, quae quasi! Repellendus veniam a animi rerum odio assumenda perferendis delectus ratione. Laborum ab, qui facilis quae sequi dolores eum sint quos deserunt quis voluptatibus sunt delectus assumenda harum dicta obcaecati nulla. Quos obcaecati quod laboriosam omnis debitis ratione molestiae minus unde quisquam ab.</p>

            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
    )
}

export default ContactUs;