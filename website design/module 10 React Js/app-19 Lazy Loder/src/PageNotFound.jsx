import React from "react";
import { Container, Row } from "react-bootstrap";
import Home from "./Home";
import Footer from './Footer';
import { Link } from "react-router-dom";
function PageNotFound()
{
    return (
        <>
        <Home />
        <Container className="mt-5 mb-5 p-5 shadow">
            <Row>
                <div className="col-xl-8" style={{height:"550px"}}>
                    <h2>Page Not Found 404 errors</h2>
                    <img src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif" alt="404" className="img-fluid w-100" style={{height:"500px"}}/>
                </div>
                <div className="col-xl-4">
                    add a button for go to home page eigher navbar changes
                </div>
            </Row>
        </Container>

        <Footer />
        </>
    )
} 

export default PageNotFound