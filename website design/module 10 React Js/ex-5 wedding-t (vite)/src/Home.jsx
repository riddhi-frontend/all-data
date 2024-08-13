import React from "react";
import { Nav, NavbarBrand, } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <Nav className="nav navbar navbar-expand-md bg-transperent p-2">
            <ul className="navbar-link">
                <li><a href="#home">Home</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#slide-container">Gallery</a></li>
                <li><a href="#wedding">Wedding</a></li>
                <li><a href="#getting">Getting There</a></li>
                <li><a href="#registery">registry</a></li>
                <li><Link to="/RSVP">rsvp</Link></li>
                <li><Link to="/venue">Venue</Link></li>
            </ul>
        </Nav>
    </>
    )
}
export default Home