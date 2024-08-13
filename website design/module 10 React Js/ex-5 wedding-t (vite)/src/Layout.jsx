import { useState, useEffect  } from 'react';
import React from 'react'
import Header from './Header'
import Story from './Story';
import Gallery from './Gallery';
import Wedding from './Wedding';
import Getting from './Getting';
import Registery from './Registery';
import Footer from './Footer';
// import Home from './Home';
function Layout(){
    const [loader ,setloder]= useState(true);
        useEffect(()=>{
            setTimeout(()=>{
                setloder(false);
                },5000);
            });
        return(
            <>
                {loader ? ( 
                    <>
                        <img src='https://www.bing.com/th/id/OGC.43ec9b3ea34c9ff6ca42b11e1867348a?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3QAUnTsafSMQE%2fgiphy.gif&ehk=tjCC2V0EfiFOBdg8Q4GHSXBRN%2b%2blJjSE6vdoOn5%2fdKs%3d' className='w-75 mx-auto mt-10' />
                    </>
                ) :(
                    <>
                        {/* <Home/> */}
                        <Header />
                        <Story />
                        <Gallery />
                        <Wedding />
                        <Getting />
                        <Registery />
                        <Footer />
                    </>
                )}
            </>
        )
}
export default Layout