import React from "react";
import { useState } from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AddEmployee(){
    const [value, setValue] = useState(
        {
            name1: 'Riddhi',
            name2: 'Maitri',
        }
    );
    const user = () => {
        setValue(
            {
                name1: 'Krishna',
                name2: 'Twiknal',
            }
        );
    };

    return(
        <>
            <Navbar />
                <Container className="p-5 mt-5">
                    <h1>Usestate</h1>

                    <div>
                        <h3>Hello my name is <b className="text-success"> {value.name1}</b></h3>
                        <h3>My friend name is <b className="text-success"> {value.name2}</b></h3>
                        <button type="btn" className="bg-dark btn-lg text-white p-2 rounded" onClick={user}>Change Value</button>
                    </div>
                </Container>
            <Footer />
</>
)
}
export default AddEmployee