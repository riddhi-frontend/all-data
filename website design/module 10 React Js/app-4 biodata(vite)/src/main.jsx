import React from "react";
import ReactDOM from 'react-dom/client'
import BioData from "./BioData";
import BioDataGet from "./BioDataGet";
const root=ReactDOM.createRoot(document.getElementById("bio-data"));
root.render(
    <>
        <h1>Biodata</h1>
        {/* <BioData/> */}
        <BioDataGet />
    </>
)