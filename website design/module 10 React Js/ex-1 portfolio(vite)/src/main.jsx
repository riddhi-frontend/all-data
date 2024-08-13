import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";
const root=ReactDOM.createRoot(document.getElementById("portfolio"));
root.render(
    <>
    <Header />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
    </>
)