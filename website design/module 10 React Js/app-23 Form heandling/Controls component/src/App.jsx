// what is controlled components : when we handel data of any form using useState it is rely on state in react js and handel form data i.e called controlled components;

import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

function App() {
  // destructuring of data
  const [formData, setFormData ]=useState(
    {
      name:'',
      email:''
    }
  );
  // create formheandlingdata
  const handelChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
    // ... is a spread operator: marge & store araay data 
  }

  // create a function for submit button
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log('Form data submited sucessfully', formData );
  }

  return (
    <>
      <Container className='bg-white w-50 mx-auto p-5 shadow mt-5'>
        <Form onSubmit={handelSubmit}>
        <div className='form-group mt-3'>
          <label>Name :</label>
          <input type='text' name='name' value={formData.name} onChange={handelChange} placeholder='Enter name' className='form-control' />
        </div>
        <div className='form-group mt-3'>
          <label>Email: </label>
          <input type='email' className='form-control' name='email' value={formData.email} onChange={handelChange}  placeholder='Enter email' />
        </div>
        <button type='submit' className='btn btn-dark mt-3'>Submit</button>
        </Form>
      </Container>
    </>
  )
}

export default App