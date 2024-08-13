import React from "react";
import Footer from './Footer'
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function RSVP(){
    return (    
        <>
        <div id="rsvp" className="pb-5">
            <h1 className="text-center text-white pt-40 pb-12 text-8xl font-bolder traki">ANNA & ARYAN</h1>
            <Row>
                <div className="col-md-12">
                    <p className="text-center font-bold text-xl">May 18, 2025, 7:00 PM </p>
                    <p className="text-center font-bold text-xl">White Chapel,<br />500 Terry A Francois Blvd, San<br /> Francisco, CA 94158, USA</p>
                </div>
            </Row>
        </div>

        <form className="pb-32">
            <h1 className="font-extrabold text-5xl ms-64 mt-16">Add Your Details</h1>
            <Row>
                <div className="col-md-4 ms-64 mt-5">
                    <label className="text-xl pb-3">* First Name</label><br />
                    <input className="w-8/12 p-3 text-xl border-black border-2" typeof="text" aria-required></input>
                </div>

                <div className="col-md-6 mt-5" style={{marginLeft:"-10%"}}>
                    <label className="text-xl pb-3">* Last Name</label><br />
                    <input className="w-6/12 p-3 text-xl border-black border-2" typeof="text" aria-required></input>
                </div>
            </Row>

            <Row>
                <div className="col-md-4 ms-64 mt-5">
                    <label className="text-xl pb-3">* Email</label><br />
                    <input className="w-8/12 p-3 text-xl border-black border-2" typeof="text" aria-required></input>
                </div>

                <div className="col-md-6 mt-5" style={{marginLeft:"-10%"}}>
                    <label className="text-xl pb-3">* Contact</label><br />
                    <input className="w-6/12 p-3 text-xl border-black border-2" typeof="text" aria-required></input>
                </div>
            </Row>
            
            <button type="btn" value={SubmitEvent} className="ms-64 text-black text-xl font-extrabold p-3 border-2 bg-transparent border-black mt-5" style={{width:'660px', borderRadius:'15px'}}> SUBMIT </button>
            </form>

            <div className="gif">
                <img src="https://i0.wp.com/acegif.com/wp-content/uploads/wedding-gif-39.gif" />
            </div>
        <Footer />
        </>
    )
}
export default RSVP