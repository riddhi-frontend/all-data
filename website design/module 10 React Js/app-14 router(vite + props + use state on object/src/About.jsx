import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
function About()
{
    return(
        <>
        <Navbar />
        <Container className="p-5 mt-5">
            <Row>
                <div className="col-md-7 shadow p-4">
                <img className="w-100" src="https://cdn.dribbble.com/users/3960415/screenshots/8995365/media/b0b5dddc53e15f8eb666502c9c3cb5d4.gif" />
                </div>
                <div className="col-md-5 p-4">
                    <h2>Welcome About us</h2>
                    <h3>About Brijesh</h3>
                    <p>Brijesh Pandey is a INDIA based designer specialising in Web Developement,Web Designing,Web/UI Design, Graphic Design, Branding, Illustration & Photography. He has a worldwide client roster and his work is regulary featured in design related publications. Brijesh Pandey is also a regular speaker at design/tech conferences.</p>
                    <p>Download this free GIF of Welcome Greeting Text from Pixabay's vast library of royalty-free stock images,</p>
                </div>
            </Row>
        </Container>
        </>
    )
}
export default About