import React from "react";
import { GoArrowDownRight } from "react-icons/go";
function Yoga()
{
    return(
        <>
        <div id="yoga">
            <div className="headingy">
                <h4>THE STUDIO PILATES & YOGA</h4>
                <h2>LIFE'S TOO SORT FOR ORDINARY WORKOUTS</h2>
                <hr/>
            </div>

            <div className="row">
                <div className="col-md-4 cards">
                    <div className="number">1</div>
                    <div className="tittle">INSPIRATIONAL</div>
                    <p className="mt-4">Our studios are a vibrant, full sensory experience. You'll always be greeted by smiling faces and world class instructors who encourage and motivate you to discover your limits and push beyond them. </p>
                    <GoArrowDownRight className="arrow" />
                </div>

                <div className="col-md-4 cards2">
                    <div className="number">2</div>
                    <div className="tittle">INNOVATIVE</div>
                    <p className="mt-4">Innovative video technology and expert instructors combine to perfect your technique. The science of sequencing and a huge variety of exercises keep your body guessing.  </p>
                    <GoArrowDownRight className="arrow" />
                </div>

                <div className="col-md-4 cards3">
                    <div className="number">3</div>
                    <div className="tittle">IT'S ABOUT YOU</div>
                    <p className="mt-4">Each person's fitness + wellness journey is unique. Our instructors work their magic by making you feel like you're the only one in the studio, so you get the most out of every exercise, every class.</p>
                    <GoArrowDownRight className="arrow" />
                </div>
            </div>
        </div>
        </>
        )
}
export default Yoga