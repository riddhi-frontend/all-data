import React from "react";
import logo from "../src/image/logo.png";
function Footer()
{
    return(
        <>
        <div className="footer mt-5">
            <hr/>
            <div className="row mt-2">
                <div className="col-md-4 logo">
                    <img src={logo} />
                </div>
                <div className="col-md-4 contactus">
                    <h1>Contact</h1>
                    <ul>
                        <li><a href="#"><i class="bi bi-telephone-inbound-fill"></i>(+91)8401352612</a></li>
                        <li><a href="https://www.google.com/intl/en/gmail/about/"><i class="bi bi-envelope-arrow-down-fill"></i>riddhu0008@gmail.com</a></li>
                        <li><a href="https://github.com/"><i class="bi bi-github"></i>Riddhi-frontend</a></li>
                        <li><a href="https://www.linkedin.com/feed/"><i class="bi bi-linkedin"></i>Riddhi Parmar</a></li>
                    </ul>
                </div>
                <div className="col-md-4 locate">
                    <h1><i class="bi bi-geo-alt-fill"></i> Find me on:</h1>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer