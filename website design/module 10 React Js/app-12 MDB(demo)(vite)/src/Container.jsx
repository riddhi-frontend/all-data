import React from "react";
import { MDBNavbar, MDBRow, MDBBtn, MDBContainer, MDBIcon} from "mdb-react-ui-kit";
function Container()
{
    return(
        <MDBContainer>
            <h1 style={{textAlign:"center"}}>Add New Task</h1>
            <form style={{marginTop:"5%", textAlign:"center"}}>
                <input style={{padding:"10px", width:"380px", backgroundColor:"lightgray"}}  type="text" name="" placeholder="Add New task*" /><br/>
                <input style={{padding:"10px",marginTop:"15px", marginBottom:"25px", width:"380px", backgroundColor:"lightgray"}} type="date" name="" placeholder="dd/mm/yy" /><br/>
                <MDBBtn type="btn"style={{padding:"10px", backgroundColor:"yellow"}} >ADD Task</MDBBtn>
                <MDBBtn type="btn"style={{padding:"10px",marginLeft:"15px", backgroundColor:"yellow"}} >RESET TASK</MDBBtn>
            </form>
        </MDBContainer>
    )
}
export default Container