import React from 'react'
import girl from '../src/image/girl-1.png'
function Home()
{
    return(
        <>
        <div id='home'></div>
        <div className="row first">
            <div className="col-md-5">
                <img className='girl' src={girl} />
            </div>
            <div className="col-md-7 para">
                <h1 className='mt-3 ms-5'>Pilates Studio</h1>
                <h5>PILATES CAN REALLY MAKE A DIFFERENCE IN YOUR HEALTH <br></br>WITHOUT TAKING A TOLL ON YOUR BODY.</h5>
                <br />
                <h5 className='fast'>Fast paced, intense classes that deliver incredible total body<br></br> sculpting workouts to challenge you mentally + physically. Every.<br></br> Single. Time. </h5>
                <br />
                <button type='btn' className='btn btn-lg'>join now</button> 
            </div>
        </div>
        </>
    )
}
export default Home