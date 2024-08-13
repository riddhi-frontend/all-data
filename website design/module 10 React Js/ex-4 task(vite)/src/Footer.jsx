import React from 'react'
import { FaWhatsapp, FaInstagram,FaTwitter,FaSnapchat,FaPrint } from 'react-icons/fa'
import visa from '../src/images/visa.png'
function Footer()
{
    return(
        <div className="footer p-5">
            <div className="row">
                <div className="col-md-3 ms-5">
                    <h2 className='mt-3 ms-2'>Be-PRO</h2>
                    <br/>
                    <div className="icon">
                        <FaWhatsapp/><FaTwitter/><FaInstagram/><FaSnapchat/><FaPrint/>
                    </div>
                </div>

                <div className="col-md-5">
                    <ul>
                        <li>Home</li>
                        <li>Womens</li>
                        <li>Mens</li>
                        <li>Contact</li>
                        <li>Privecy</li>
                        <li>Policy</li>
                    </ul>
                    <p className='fs-5 ms-5'>Subscribe to News</p>

                    <input type='text' placeholder='Subscribe Our News' className='w-50'></input>
                    <button type="btn" className='btn-3' >Subscribe</button>
                </div>

                <div className="col-md-3 mt-2">
                    <h3>Contact us</h3>
                    <p>San Francisco,<br/>California 400<br/>Castro St, San<br/>Francisco,CA (+1)<br/>686-868-9999</p>
                    <img src={visa} />
                </div>
            </div>
        </div>
    )
}
export default Footer