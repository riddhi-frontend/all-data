import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact()
{
    return(
        <>
        <Navbar />
        <Container className="p-5 mt-5">
            <Row>
                <div className="col-md-5 shadow p-4">
                    <img src="https://metaitsystems.co/wp-content/uploads/2023/03/contact-us.gif" className="img-fluid" />
                </div>
                <div className="col-md-7 p-4">
                    <h2>Contact Us</h2>
                    <h6>Best services Provides in Rajkot area</h6>
                        <form>
                            <div className="form-group mt-3">
                                <input type="text" placeholder="Name *" className="form-control border border-dark" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" placeholder="Email *" className="form-control border border-dark" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" placeholder="Phone *" className="form-control border border-dark" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" placeholder="Subject *" className="form-control border border-dark" />
                            </div>

                            <div className="form-group mt-3">
                                <textarea type="text" placeholder="Address *" className="form-control border border-dark"></textarea>
                            </div>

                            <div className="form-group mt-3">
                                <input type="submit"  className="w-50 btn btn-md btn-dark bg-dark text-white p-3" value="Send" />
                            </div>
                        </form>
                </div>
            </Row>
        </Container>
        <Footer />
        </>
    )
}
export default Contact