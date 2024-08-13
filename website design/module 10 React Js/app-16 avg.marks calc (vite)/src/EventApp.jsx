import React from "react";
function Eventapp()
{
        var Math =parseInt(prompt('Enter your mark : "" '));
        var Eng =parseInt(prompt('Enter your marks : "" '));
        var Comp =parseInt(prompt('Enter your marks : "" '));
        var Guj =parseInt(prompt('Enter your marks : "" '));

        var result=(Math+Eng+Comp+Guj/4)
        alert("Average marks of subjects :" +result )
}
export default Eventapp