import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Glide from '@glidejs/glide'
import { Card } from 'react-bootstrap';
const Services = () => {
    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 2,
            perView: 3,
            focusAt: 'center',
            gap: 30,
            autoplay: 3000,
            hoverpause: true,
        })
        .mount();
    }, []);

    const images = [
        { Logo: 'https://exploreviatech.com/wp-content/uploads/2023/10/Graphic-Designing.png', name: 'Graphic Design'},
        { Logo: 'https://th.bing.com/th/id/OIP.O25lpiqbqenc6oiCP0e_ZAAAAA?w=285&h=300&rs=1&pid=ImgDetMain', name: 'Web Design'},
        { Logo: 'https://nyusoft.com/wp-content/themes/twentytwentyone-child/images/services/UI-UX-design-services/banner-image-ui-ux.png', name: 'UI/UX  Design'},
        { Logo: 'https://png.pngtree.com/png-vector/20200310/ourmid/pngtree-modern-flat-design-concept-of-mobile-app-development-with-characters-building-png-image_2157836.jpg', name: 'App Development'},
    ];

    return (
        <>
            <div className="main container text-center">
                <h1 className=' fw-bold'>Some Excellent Services For You</h1>
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <div className="glide__slides">
                            {images.map((image, index) => (
                                <Card key={index} className="glide__slide">
                                    <Card.Body className="text-center">
                                        <img src={image.Logo} alt={''} />
                                        <Card.Title className="glide_tittle">{image.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                            <FaArrowLeft />
                        </button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services
