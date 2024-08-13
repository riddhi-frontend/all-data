import React from 'react'
import { Button, Container } from 'react-bootstrap'
// import uuid from 'react-uuid'

const Home = () => {
    return (
        <>
            <Container className='p-5 mt-5 w-75 mx-auto shadow'>
                <h3>React js CRUD ( create | read | update | delete)</h3>
                <hr className='w-50 border border-1 border-dark'/>
                <Button className='mt-3 btn btn-md btn-dark text-white'>Add Data</Button>
            </Container>
        </>
    )
}

export default Home