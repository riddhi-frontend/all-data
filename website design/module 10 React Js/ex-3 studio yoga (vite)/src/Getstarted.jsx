import React from "react";
import { GoArrowDownRight } from "react-icons/go";
function Getstarted()
{
    return(
        <>
        <div id="get">
            <div className="headingy">
                <h4>GET STARTED</h4>
                <h2>TOP REASONS YOU SHOULD TAKE UP PILATES</h2>
                <hr/>
            </div>

            <div className="row">
                <div className="col-md-4 cards">
                    <div className="number">Relaxing</div>
                    <div className="tittle">POSITION</div>
                    <p className="mt-4">Feeling stressed or anxious? You'll probably drop onto your back and start doing your Pilates breathing. Ideally not in public. But it's a seriously great de-stressor.</p>
                    <GoArrowDownRight className="arrow" />
                </div>

                <div className="col-md-4 cards2">
                    <div className="number">It's Good</div>
                    <div className="tittle">FOR YOUR BACK</div>
                    <p className="mt-4">It focuses on strengthening back muscles, and studies have shown that people with chronic lower back pain who do Pilates have more long-term relief from their pain than those who don't.</p>
                    <GoArrowDownRight className="arrow" />
                </div>

                <div className="col-md-4 cards3">
                    <div className="number">It's Like</div>
                    <div className="tittle">THERAPY</div>
                    <p className="mt-4">Pilates forces you to get out of your head and focus on your body. Troublesome thoughts that were bothering you beforehand don’t seem so bad after a Pilates class. </p>
                    <GoArrowDownRight className="arrow" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 cards">
                    <div className="number">RCore</div>
                    <div className="tittle">OF STEEL</div>
                    <p className="mt-4">Sometimes you make people prod your abs. They don't particularly want to, but you don't give them much choice. Pilates can do more damage than good.</p>
                    <GoArrowDownRight className="arrow" />
                </div>

                <div className="col-md-4 cards2">
                    <div className="number">Balanced</div>
                    <div className="tittle">BODY</div>
                    <p className="mt-4">IYou've heard those terms before but what are they? Well, they are much more than the latest fitness buzzwords - they are keys to a healthier lifestyle through mindful movement and Pilates.</p>
                    <GoArrowDownRight className="arrow" />
                </div>

                <div className="col-md-4 cards3">
                    <div className="number">Mental</div>
                    <div className="tittle">FOCUS</div>
                    <p className="mt-4">Mind-body exercise like Pilates is activity that keys on the mental focus of the physical movements being performed. With this type of exercise quality of movement. </p>
                    <GoArrowDownRight className="arrow" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Getstarted