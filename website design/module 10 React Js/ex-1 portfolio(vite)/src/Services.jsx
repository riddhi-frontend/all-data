import React from "react";
function Services()
{
    return(
            <>
            <div id="services">
                <div className="row mt-5">
                    <div className="col-md-4 mt-5 service">
                        <p>Our Services</p>
                        <h1>WHAT WE DO?</h1>
                        <hr></hr>
                            <p>I am Web designer and Front-end Devloper.<br/>I have skill in html , css, javascript, bootstrapp, React. It is use to make creative and attractive web designing.</p>
                            <button type="button" className="button">Show more details</button>
                    </div>

                    <div className="col-md-4 mt-5 html">
                        <i class="bi bi-filetype-html"></i>
                        <h4>Hyper Text Markup Language</h4>
                        <p>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.</p>
                        <br></br>
                        <i class="bi bi-filetype-js"></i>
                        <h4>Javascript</h4>
                        <p>JavaScript is a scripting language that enables you to create dynamically updating content,  control multimedia, animate images, and pretty much everything else. (Okay, not everything,  but it is amazing what you can achieve with a few lines of JavaScript code.)</p>     
                    </div>

                    <div className="col-md-4 html mt-5">
                        <i class="bi bi-filetype-css"></i>
                        <h4>Cascading style sheets</h4>
                        <p>CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).</p>
                        <br></br>
                        <i class="bi bi-filetype-jsx"></i>
                        <h4>React Js</h4>
                        <p> ReactJS's primary goal is to create User Interfaces (UI) which enhance the speed of programs. It makes use of virtual DOM (JavaScript object), which enhances the app's efficiency. Quicker than the standard DOM is the JavaScript virtual DOM.</p>
                    </div>
                </div>
            </div>
            </>
    )
}
export default Services