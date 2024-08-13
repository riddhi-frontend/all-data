import React from "react";
import { Nav, NavbarBrand, } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
function Header(){
    return (
        <>
        <div id="home"></div>
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

            <MDBRow>
                <div className="col-md-10">        
                    <div className="tittle">
                        <h1 className="text-center text-8xl font-bolder traki">ANNA & ARYAN</h1>
                        <h3 className="text-center">May 18, 2025, 7:00 PM | White Chapel</h3>
                        <button type="button" className="btn-1 border-double mt-5 border-4 text-black border-gray-950 w-48 h-16 font-bold text-2xl button hover:animate-pulse;"><Link to="/RSVP" style={{color:"black"}}>RSVP</Link></button>
                    </div>
                </div>
            </MDBRow>
        </>
    )
}
export default Header