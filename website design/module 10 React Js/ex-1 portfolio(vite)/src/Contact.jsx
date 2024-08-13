import React from "react";
import img from "../src/image/gif.gif"
function Contact()
{
    return(
        <>
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="row">
                <div className="col-md-9">
                    <form className="frm">
                        <label>Name: &nbsp;&nbsp;</label>
                            <input type="text" name="name" placeholder="Enter your name" required/><br />
                        <label>Email: &nbsp;&nbsp;</label>
                            <input type="email" name="email" placeholder="Enter your email" required/><br/>
                        <label>Contact: </label>
                            <input type="number" name="number" placeholder="Enter your contact number" required/><br/>
                        <label>Message: </label>
                            <textarea name="message" placeholder="Enter your message" required ></textarea><br/><br/>
                        <button className="btn-1" type="btn">Submit</button>
                        <button className="btn-2" type="btn">Reset</button>
                    </form>
                </div>

                <div className="col-md-3 gif">
                    <img src={img} />
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact