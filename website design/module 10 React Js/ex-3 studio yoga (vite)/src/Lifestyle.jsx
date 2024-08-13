import React from "react";
import girls from "../src/image/girl-2.png"
import Girls from "../src/image/girl-3.png"
import s1 from "../src/image/s-1.jpeg"
import s2 from "../src/image/s-2.jpeg"
import s3 from "../src/image/s-3.jpeg"
function Lifestyle()
{
    return(
        <>
        <div className="lifestyle-1"></div>
        <div className="row subls">
        <div className="col-md-6">
            <h2>MIND-BODY</h2>
            <h4>CORE STRENGTH. CORE STABILITY.</h4>
            <p>It teaches you strength and balance. There's a reason<br/>Joseph Pilates used to call his metho 'contrology' -<br/> Pilates is all about learning to control your body through <br/>precise movements, so strength and balance is key.<br/>It focuses on strengthening back muscles, and studies <br/>have shown that people with chronic lower back pain who <br/>do Pilates have more long-term relief from their pain than <br/>those who don't.</p>
            <button type="btn">read more</button> 
            </div>
            <div className="col-md-6">
                <img src={girls}/>
            </div>
        </div>
        
        <div className="lifestyle-2">
            <h4>THE STUDIO PILATES & YOGA</h4>
            <h1>15 THINGS YOU KNOW IF YOU DO PILATES</h1>
            <hr/>

            <div className="row">
                <div className="col-md-6 infoi">
                    <img src={Girls}/>
                </div>
                <div className="col-md-6 info">
                    <h2>YOU HAVE A CORE OF STEEL</h2>
                    <h5>NOT AS EASY AS IT LOOKS</h5>
                </div>
            </div>
        </div>
        <p className="parai">Whether it's running, CrossFit or yoga, you'll probably try to<br/> convert everyone you know. We Pilates folk are just as bad.<br/>I'm by no means an expert, and I still haven't quite made it<br/>into the advanced class, but I'll sing its praises to anyone I<br/>meet. So if Pilates is your exercise class of choice, here are<br/>15 things you probably know and do.</p>
        <button type="btn" className="btn-4">read more</button>

        <div className="slide">
            <div className="row">
                <div className="col-md-4">
                    <img src={s1}/>
                </div>
                <div className="col-md-4">
                    <img src={s2}/>
                </div>
                <div className="col-md-4">
                    <img src={s3}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Lifestyle