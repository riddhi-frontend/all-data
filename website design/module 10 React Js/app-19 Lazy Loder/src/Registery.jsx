import React from "react";
import { Link } from "react-router-dom";
function Registery(){
    return (
        <>
        <div id="registery">
            <h1>Registery</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just<br /> click “Edit Text” or double click me to add your own content and make changes<br /> to the font. I'm a great place for you to tell a story and let your users know a<br /> little more about you.</p>

            <div className="row line-1">
                <div className="col-md-3">
                    <img src="src\images\i1.jpg" />
                </div>
                <div className="col-md-3">
                <img src="src\images\i2.jpg" />
                </div>
                <div className="col-md-3">
                <img src="src\images\i3.jpg" />
                </div>
            </div>

            <div className="row line-2">
                <div className="col-md-4">
                    <img src="src\images\i4.jpg" />
                </div>
                <div className="col-md-4">
                <img src="src\images\i5.jpg" />
                </div>
                <div className="col-md-4">
                <img src="src\images\i6.jpg" />
                </div>
            </div>
        </div>

        <div id="rsv">
            <div className="sub">
                <div className="overlay">
                <h2><b>WE'RE SO EXCITED </b><br /> TO CELEBRATE WITH YOU</h2>
                </div>
                <button type="button" className="btn-4"><Link to="/RSVP" style={{color:"black"}}>RSVP</Link></button>
            </div>
        </div>
        </>
    )
}
export default Registery