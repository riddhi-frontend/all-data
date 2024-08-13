import React from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
// import i from '../src/image/i-1.jpeg'
import { GiBodyBalance } from "react-icons/gi";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
function Feachers()
{
    return(
        <>
        <MDBContainer>
            <div className="feachers">
                <MDBRow>
                    <div className="col-md-4">
                        <BsPersonArmsUp className='balance' />
                        <p className='h3'>DEVELOP A STRONG CORE</p>
                    </div>

                    <div className="col-md-4">
                        <GiBodyBalance className='balance' />
                        <p className='h3 ms-5'>LEAN FLEXIBILITY</p>
                    </div>

                    <div className="col-md-4">
                        <FaRunning className='balance'/>
                        <p className='h3'>FOCUS ON YOUR BODY</p>
                    </div>
                </MDBRow>
            </div>
        </MDBContainer>

        <div className="heading">
            <h4>PILATES LIFESTYLE</h4>
            <h2>LIFE IS MOTION. PILATES IS MOVEMENT FOR LIFE</h2>
            <hr className='w-25' />
        </div>
        </>
    )
}
export default Feachers