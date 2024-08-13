import React from 'react';
import i1 from '../images/i1.png';
import img2 from '../images/hero-two-ball.webp';
import '@glidejs/glide/dist/css/glide.core.min.css'; // Import Glide's CSS
import CustomGlideSlider from './CustomGlideSlider';


const About = () => {
  return (
    <section className="about">
      <div className="about-con">
        <img src={img2} />
      </div>
      <div className="about-content">
        <img src={i1}/>
        </div>
        <div className="text-section">
            <CustomGlideSlider/>
        </div>
    </section>
  );
}

export default About;