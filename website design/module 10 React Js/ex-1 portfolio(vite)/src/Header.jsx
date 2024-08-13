import React from "react";
import girl from "../src/image/profile.jpg";
function Header()
{
    return(
        <div className="header" style={{backgroundImage:"\src\image\b-1.jpg", opacity:"0.6"}}>
        <div className="row navbar">
            <div className="col-md-3 head">
                <h1 className="multicolor">Portfolio</h1>
            </div>

            <div className="col-md-6 nav">
                <ul>
                    <li><a href="#"> Home</a></li>
                    <li><a href="#"> About us</a></li>
                    <li><a href="#"> Services</a></li>
                    <li><a href="#"> My work</a></li>
                    <li><a href="#"> Contact</a></li>
                </ul>
                </div>
            <div className="col-md-3 media">
                <a href="#"><i class="bi bi-whatsapp"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
            </div>
        </div>

        <div id="home">
            <div className="row">
                <div className="col-md-5 mt-5">
                    <h4 className="mt-5">My Name is <b>PARMAR RIDDHI</b></h4>
                    <h1>Front-end Developer's<br />Portfolio </h1>
                    <button className="btn" type="button">click for cv</button>
                </div>
                <div className="col-md-6 girl">
                    <img src={girl} />
                </div>
            </div>
        </div>
        
        </div>
    )
}
export default Header