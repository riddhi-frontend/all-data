import React from "react";
import {MDBContainer,MDBRow} from "mdb-react-ui-kit";
import { FaFire } from "react-icons/fa";
import shoes1 from './images/product1.png';
import shoes2 from './images/product2.png';
import shoes3 from './images/product5.png';
import shoes4 from './images/product3.png';
import shoes5 from './images/product2.png';
import shoes6 from './images/product3.png';
import shoes7 from './images/product4.png';
import shoes8 from './images/product5.png';
import shoes9 from './images/product1.png';
function Content()
{
    return(
        <>
        <MDBContainer>
            <MDBRow className="">
                <div className="col-md-3 bg-black text-white product">
                    <FaFire className="fs-1 fire" />
                    <h1 className="text-center p-2">Popular products</h1>
                    <h4 className="text-center p-3">more products</h4>
                </div>
                <div className="col-md-6 text-white lifestyle">
                    <button type="btn" className="btn-1">New</button>
                    <h3 className="ms-3 p-1">lifestyle</h3>
                    <h5 className="ms-3">Bew Now: Strippoed Cotton</h5>
                    <button type="btn" className="btn-2">$ 50.00 | Buy Now</button>
                </div>
            </MDBRow>
                <div className="girl"></div>
        </MDBContainer>

        <MDBRow className="m-5">
            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes1} alt=""></img>
                    <p className="mt-2">Addidas shoes</p>
                    <p className="number"><span>Rs.3200-/</span>Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>

            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes2} alt=""></img>
                    <p>Addidas shoes</p>
                    <p><span>Rs.3200-/</span> Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>

            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes3} alt=""></img>
                    <p>Addidas shoes</p>
                    <p><span>Rs.3200-/</span> Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>
        </MDBRow>


        <MDBRow className="m-5">
            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes4} alt=""></img>
                    <p className="mt-2">Addidas shoes</p>
                    <p className="number"><span>Rs.3200-/</span>Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>

            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes5} alt=""></img>
                    <p>Addidas shoes</p>
                    <p><span>Rs.3200-/</span> Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>

            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes6} alt=""></img>
                    <p>Addidas shoes</p>
                    <p><span>Rs.3200-/</span> Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>
        </MDBRow>

        <MDBRow className="m-5">
            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes7} alt=""></img>
                    <p className="mt-2">Addidas shoes</p>
                    <p className="number"><span>Rs.3200-/</span>Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>

            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes8} alt=""></img>
                    <p>Addidas shoes</p>
                    <p><span>Rs.3200-/</span> Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>

            <div className="col-md-3 shoes">
                <div className="box">
                    <img src={shoes9} alt=""></img>
                    <p>Addidas shoes</p>
                    <p><span>Rs.3200-/</span> Rs.1450-/</p>
                    <button className="btn btn-sm">click for details</button>
                </div>
            </div>
        </MDBRow>
        </>
    )
}
export default Content
        // 
        //     <div className="col-md-3">
        //          <div className="box">
        //             
        //          </div>
        //     </div>

        //     <div className="col-md-3"></div>

        //     <div className="col-md-3"></div>


        // </MDBRow>

