import React from "react";
const Name="ParmarRiddhi";
const Age="23years";
const Na="Indian";
const dob="06/01/2002"

// store data in variable
function BioDataGet()
{
    return(
        <>
        <div style={{width:"50%"}}>
            <img src="https://www.bing.com/th?id=OIP.4cmK9d36bF0F7-V-SaVPnAHaG_&w=113&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" alt="eyes" style={{borderRadius:"50%", width:"150px", height:"150px" }}/>
        </div>
        <h1>About us</h1>
        <p>Name:{Name}</p>
        <p>Age:{Age}</p>
        <p>Natonallity:{Na}</p>
        <p>DOB: {dob}</p>
        </>
    )
}
export default BioDataGet