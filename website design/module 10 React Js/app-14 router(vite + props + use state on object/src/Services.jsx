import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
// service
const service=[
    {
        id:1,
        photo: "https://cdn.dribbble.com/users/1235346/screenshots/3252385/attachments/705596/gif_vacature.gif",
        servicename: "Webdesign",
        cost:"35000",
        bookingdate: "27-6-2024 01:02pm"
    },
    {
        id:2,
        photo: "https://38.media.tumblr.com/ab407e921bc0bacdfd56f06bbb90caed/tumblr_niczg0B2dO1red0apo1_r1_1280.gif",
        servicename: "graphicdesign",
        cost:"15000",
        bookingdate: "27-6-2024 01:25pm"
    },    
    {
        id:3,
        photo: "https://miro.medium.com/max/3840/1*z4SwtPcsBRaEHFlxNtJDpw.gif",
        servicename: "angular js",
        cost:"20000",
        bookingdate: "27-6-2024 01:02pm"
    },    
    {
        id:4,
        photo: "https://res.cloudinary.com/practicaldev/image/fetch/s--NzgxrJEe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mdvk568xm4hmk3bjfsqs.gif",
        servicename: "react js",
        cost:"24000",
        bookingdate: "27-6-2024 01:02pm"
    },    
    {
        id:5,
        photo: "https://res.cloudinary.com/practicaldev/image/fetch/s--LETLo0sR--/c_imagga_scale,f_auto,fl_progressive,h_500,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/osxgvz719vy0tmzb49pp.gif",
        servicename: "node js",
        cost:"28000",
        bookingdate: "27-6-2024 01:02pm"
    },
    {
        id:6,
        photo: "https://j.gifs.com/kZJJxv.gif",
        servicename: "php",
        cost:"26000",
        bookingdate: "27-6-2024 01:02pm"
    }
]
function Services()
{
    return(
        <>
        <Navbar />
        <Container className="p-5 mt-5">
            <h1 className='text-center bg-dark text-white w-50 mt-5 mx-auto p-2 fs-5'>This is Our Services Page</h1>
                <Row>
                    {/* we applied loop for display all services */}
                        {service && service.map((items)=>{
                            return (
                                <>
                                    <div className='col-md-4'>
                                        <div className='list-group'>
                                            <div className='list-group-item bg-dark text-white'>Our services</div>
                                                <div className='list-group-item'>
                                                    <p><img src={items.photo} alt='photo' className='img-fluid' style={{width:"100%", height:"250px"}} /></p> 
                                                    <p className='fs-3'>{items.servicename}</p>
                                                    <p className=''>services Cost:{items.cost}</p>
                                                    <p className='fs-6'>booking date :{items.bookingdate}</p> 
                                                    <p><button type='button' className='btn btn-dark bg-dark text-white'>Add to cart</button></p>
                                                </div>
                                        </div>    
                                    </div>
                                </>
                )
            })}
                </Row>
        </Container>
        <Footer />
        </>
    )
}
export default Services