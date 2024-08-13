import React,{useRef, useState } from "react";
// uncontrolled components  : Handel form data via uncontrolled components we take or used useRef to take reference a input data and handel of form data i.e called uncontrolled components
import { Container } from "react-bootstrap";

function App()
{
    // stored all data in variables 
    const name=useRef();
    const email=useRef();
    const mobile=useRef();

    // destructuring of data for errors for form handeling validations
        const[errors,setErrors]=useState({});

    // create a formHendeler function 
        const hendelForm=(e)=>{
            e.preventDefault();
            const data={
                name:name.current.value,
                email:email.current.value,
                mobile:mobile.current.value
            }

    // form form validation create a function 
        const validate=()=>{

        const errors={};
        if(!formData.name)
            errors.name="Please Enter Your Name *";
        if(!formData.email)
            errors.email="Please Enter Your Email *";
        if(!formData.mobile)
            errors.mobile="Please Enter Your Mobile *";

        return errors;
    }


        // create a function for submit button
        const handelSubmited=(e)=>{
            e.preventDefault();
            // pass an errors messages for validations 
            const errors=validate();
            if(Object.keys(errors).length===0){
                console.log('Form data submitted successfully',formData);
            }
            else 
            {
                setErrors(errors);
            }
        }

    console.log('Form data successfully submitted',data);

    }
    return (
        <>
        <Container className="bg-white w-50 mx-auto p-5 shadow mt-5">
        <form onSubmit={handelSubmit}>
                <div className="form-group mt-3">
                    <label>Name :</label>
                    <input type="text" name="name" value={formData.name} onChange={handelChange} placeholder="Name *" className="form-control"  />
                    
                    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                </div>
                
                <div className="form-group mt-3">
                    <label>Email :</label>
                    <input type="text" name="email" value={formData.email} onChange={handelChange} placeholder="Email *" className="form-control" />
                    
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                </div>

                <div className="form-group mt-3">
                    <label>Mobile :</label>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handelChange} placeholder="Email *" className="form-control" />
                    
                    {errors.mobile && <p style={{color:"red"}}>{errors.mobile}</p>}
                </div>
                
                <div className="form-group mt-3">
                    
                    <input type="submit"  className="btn btn-md bg-dark btn-dark text-white" value="Submit" />
                </div>
            </form>
        </Container>
        </>
    )
}

export default App