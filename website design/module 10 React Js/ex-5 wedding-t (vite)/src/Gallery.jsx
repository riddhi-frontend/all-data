import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Slide} from 'react-slideshow-image';
const SlideImages = [
    {
        url:'https://images.preview.ph/preview/images/2024/04/08/spree-river-queen-of-tears-1712516777.jpg',
    },
    {
        url:'https://media.assettype.com/freepressjournal/2024-04/e77a1269-947c-4790-97a6-787d19e8664b/Untitled_design___2024_04_29T092140_336.jpg',
    },
    {
        url: 'https://1739752386.rsc.cdn77.org/data/images/full/270047/queen-of-tears.jpeg?w=811?w=430',
    },
    {
        url: 'https://storage.googleapis.com/koreatrendy.com/2021/08/Its-okay-to-not-be-okay-stars-Seo-Ye-je-and-1024x576.jpg',
    },
    {
        url: 'https://i.mydramalist.com/EXqm0_3f.jpg',
    },
];

const divstyle = {
    disply: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '750px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '0 auto',
}

const spanstyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    background: 'black',
}
function Gallery(){
    return (
        <>
        <div id="slide-container">
            <Slide>
            {SlideImages.map((slideImage, index)=> (
                <div key={index} className="each-slide">
                    <div style={{...divstyle, 'backgroundImage': `url(${slideImage.url})`}}></div>
                    <span style={{spanstyle}}>{slideImage.caption}</span>
                </div>
            ))}
            </Slide>
        </div>
        </>
    )
}
export default Gallery