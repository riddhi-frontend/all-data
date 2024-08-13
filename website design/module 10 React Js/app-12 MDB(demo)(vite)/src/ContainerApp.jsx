import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBNavbar, MDBRow, MDBBtn, MDBContainer, } from "mdb-react-ui-kit";
function ContainerApp()
{
    return(
        <MDBContainer fluid className="" style={{backgroundColor:"darkblue", color:"white", padding:"15px" }}>
            {/* <MDBNavbar > */}
                <MDBRow>
                    <div className="col-md-8" style={{display:"inline-block"}}>
                    <h1 className="ps-4 pt-3 text-white"> <i className="bi bi-list fs-2 text-white"></i> Task Manager</h1>
                    </div>
                    <div className="col-md-4" style={{display:"inline-block", marginLeft:"50%"}}>
                    <MDBBtn color="info"style={{padding:"10px", width:"120px" }}>
                    <i class="bi bi-menu-button-wide-fill" style={{fontSize:"22px"}}>Task</i>
                    </MDBBtn>
                    <MDBBtn color="info"style={{padding:"10px",marginLeft:"10px", width:"180px" }}>
                    <i class="bi bi-menu-button-wide-fill" style={{fontSize:"19px"}}>DELETEd TASK</i>
                    </MDBBtn>
                    </div>
                </MDBRow>
            {/* </MDBNavbar> */}
        </MDBContainer>
    )
}
export default ContainerApp