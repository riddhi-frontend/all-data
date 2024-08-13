import React from "react";
import ReactDOM from 'react-dom/client';
// import Inline from "./Inline";
// import Internal from "./Internal";
import External from "./External";
const root=ReactDOM.createRoot(document.getElementById('demo'));
root.render(
    // inline css
    // <Inline />

    // internal css
    // <Internal />

    // external css
    <External />
);
