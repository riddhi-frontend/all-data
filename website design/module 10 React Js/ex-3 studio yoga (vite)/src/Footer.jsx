
import React from "react";
import { MDBRow } from "mdb-react-ui-kit";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaGoogle, FaPinterest } from "react-icons/fa";
function Footer()
{
    return(
        <>
            <div id="footer">
                <MDBRow className="footer">
                    <div className="col-md-4">
                        <h6>Contact Us</h6>
                        <p>Sample footer text</p>
                    </div>

                    <div className="col-md-4">
                        <h6>Talk Pilates</h6>
                        <p>Sample footer text</p>
                    </div>

                    <div className="col-md-4">
                        <h6>Stay in Touch</h6>
                        <p>Sample footer text</p>
                    </div>
                </MDBRow>

            <hr className="w-75 text-center border border-white border-1"></hr>
                <MDBRow className=" menu">
                    <div className="col-md-8">
                        <h1>PILATES STUDIO</h1>
                    </div>

                    <div className="col-md-4">
                        <FaFacebook className="fa"/>
                        <FaTwitter className="fa"/>
                        <FaInstagram className="fa"/>
                        <FaGoogle className="fa"/>
                        <FaPinterest className="fa"/>
                    </div>
                </MDBRow>

            <p className="text-center mt-5 temp">  <span>Template</span> created with <span>Nicepage</span> . </p>
            </div>
        </>
    )
}
export default Footer
/* footer jsx */
