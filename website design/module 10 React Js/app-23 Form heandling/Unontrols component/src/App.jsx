import React, {useRef} from "react";
// uncontrolled components  : Handel form data via uncontrolled components we take or used useRef to take reference a input data and handel of form data i.e called uncontrolled components
import { Container } from "react-bootstrap";
function App()
{
  // store data in variable
  const name = useRef();
  const email = useRef();
  const Contact = useRef();

  // formHendler function
  const hendelForm = (e) =>
    {
      e.preventDefault();
      const data={
        name:name.current.value,
        email:email.current.value,
        Contact:Contact.current.value
      }

      console.log('Form data sucessfully submited' ,data);
    }
    return (
      <>
      <Container className="bg-white w-50 mx-auto p-5 shadow mt-5">
        <form onSubmit={hendelForm}>
          <div className="form-group mt-3">
            <label>Name :</label>
            <input type="text" name="name" ref={name} placeholder="Name *" className="form-control" />
          </div>

          <div className="form-group mt-3">
            <label>Email :</label>
            <input type="text" ref={email} placeholder="Email *" className="form-control" />
          </div>

          <div className="form-group mt-3">
            <label>Mobile :</label>
            <input type="text" ref={Contact} placeholder="Mobile *" className="form-control" />
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