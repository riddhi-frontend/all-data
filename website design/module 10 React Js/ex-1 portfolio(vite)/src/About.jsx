import React from "react";
import girl from "../src/image/profile-2.jpg";
function About()
{
    return(
        <div className="about">
            <h1>About me</h1>
            <div className="row">
                <div className="col-md-5">
                    <img src={girl} />
                </div>
                <div className="col-md-6 info">
                    <h6>Hello, Have a Great day!</h6>
                    <p>My name is <span>Parmar Riddhi</span>.<br/> I am 23 years old. There are four memebers in my 
                    family. I passed my 10th in 2017 with <b>60%</b>. And I passed my 12th with <b>61%</b>. Currently I am
                    doing B.com with Computer Science in M.J.kundaliya college. And Front-end Devlopment in Tops Technology.I have experience in teaching academy .So i have knowldge of how to work with team? and how to work with other companies.My hobbies are listing Songs,Travelling and Do coding.</p>
                </div>
            </div>
        </div>
    )
}
export default About