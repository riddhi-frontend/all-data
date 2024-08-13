import React from "react";
import { Row } from "react-bootstrap";
import img from '../src/images/line.png'
import { Link } from "react-router-dom";
function Wedding(){
    return (
        <>
        <div id="wedding">
            <h1 className="font-extrabold">THE<br />WEDDING</h1>
            <Row>
                <div className="w1 col-md-5">
                    <h3>When</h3>
                    <p>May 18, 2025, 7:00 PM </p>
                </div>
                <div className="col-md-1">
                    <img src={img} />
                </div>
                <div className="w2 col-md-5">
                    <h3>Where</h3>
                    <p>White Chapel,<br />500 Terry A Francois Blvd, San<br /> Francisco, CA 94158, USA</p>
                </div>
            </Row>

            <button type="button" className="btn-2"><Link to="/RSVP" style={{color:"black"}}>RSVP</Link></button>
        </div>
        </>
    )
}
export default Wedding