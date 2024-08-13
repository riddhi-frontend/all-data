import React from "react";
import { MDBNavbar,MDBRow} from "mdb-react-ui-kit";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
function Header()
{
    return(
        <>
            <MDBRow className="bg-primary">
            <MDBNavbar>
            <div className="col-md-4">
                <h1 className="text-white mt-2 ms-5">Be-Pro</h1> 
            </div>

            <div className="col-md-8">
                <ul>
                    <li><a href="#" className="text-white">HOME</a></li>
                    <li><a href="#" className="text-white">SHOP NOW</a></li>
                    <li><a href="#" className="text-white">BLOGS</a></li>
                    <li><a href="#" className="text-white">CONTACT</a></li>
                    <li><a href="#" className="text-white">LOGIN</a></li>
                    <li><a href="#" className="text-white">REGISTER</a></li>
                    <li><a href="#" className="text-white"><FaShoppingBasket/> 0</a></li>
                    <li><a href="#" className="text-white"><FaSearch/></a></li>
                </ul>
            </div>
            </MDBNavbar>
            </MDBRow>
        </>
    )
}
export default Header