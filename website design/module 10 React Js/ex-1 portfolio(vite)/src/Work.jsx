import React from "react";
import work1 from "../src/image/Work1.jpeg"
import work2 from '../src/image/Work2.jpeg';
function Work()
{
    return(
        <>
        <div id="work">
            <div className="work">
                <h1 className="text-center text-white">My Work</h1>
                <div className="row">
                    <div className="col-md-6 works">
                        <img src={work1} alt=""></img>
                        <li><a href="https://github.com/riddhi-frontend/project.git">UnwindCabins</a></li>
                </div>

                <div className="col-md-6">
                <img src={work2} alt=""></img>
                <li><a href="https://github.com/riddhi-frontend/project.git">Trip-biz</a></li>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Work