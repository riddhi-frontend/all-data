import  React from "react";
import ReactDOM from "react-dom/client"
import img from "../src/assets/img.jpg"
const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <div style={{backgroundColor:"#FDB0FF",margin:"0%", padding:"30px"}}>
        <h1 style={{color:"#5D0460", marginTop:"5%",marginLeft:"5%" ,fontSize:"55px"}}>React Fundamentals</h1>
        <p style={{fontSize:"28px", color:"#5D0460", marginLeft:"5%"}}>JSX</p>
        <p style={{fontSize:"28px", color:"#5D0460", marginLeft:"5%"}}>Components</p>
        <p style={{fontSize:"28px", color:"#5D0460", marginLeft:"5%"}}>And Props</p>
        <img src="\src\assets\img.jpg" alt="" style={{width:"50%",height:"350px", marginLeft:"50%", marginTop:"-20%"}}/>
    </div>
);