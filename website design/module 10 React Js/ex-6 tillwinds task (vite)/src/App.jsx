import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaFacebook, FaTwitter, FaGithub, FaChrome} from "react-icons/fa";
import men from '../src/assets/img.jpeg'
function App()
{
  return (
    <>
    <div className="container-fulid shadow-md shadow-slate-800 p-2 text-white bg-[#100F17]">
    <ul className='shadow-md shadow-slate-950 flex ps-96 p-10 items-center text-xl'>
        <li className='underline underline-offset-8 p-4' ><a href=''>HOME</a></li>
        <li className='p-4'><a href=''>ABOUT</a></li>
        <li className='p-4'><a href=''>SKILLS</a></li>
        <li className='p-4'><a href=''>EXPERIENCES</a></li>
        <li className='p-4'><a href=''>PORTFOLIO</a></li>
        <li className='p-4'><a href=''>PRICING</a></li>
        <li className='p-4'><a href=''>BLOG</a></li>
        <li className='p-4'><a href=''>CONTACT </a></li>
      </ul>
      <div className=' flex' >


      <div className='ms-36 mt-8 flex-none'>
        <h5>Hello I'm</h5><br/>
        <h1 className='text-7xl'>Alex Johnson</h1>
        <h3 className='text-3xl pt-3'>Product Designer</h3><br/>
        <div className='block md:inline-flex text-lg'>
          <FaEnvelope className='mt-1.5'/>
          <h5 className='ps-3' >getmail@email.com</h5>
        </div><br />

        <div className='block md:inline-flex text-lg mt-2'>
        <FaPhoneAlt className='mt-1.5'/>
          <h5 className='ps-3' > +12 986 987 7867</h5>
        </div><br />

        <div className='mt-2 block md:inline-flex text-lg'>
        <FaMapMarkedAlt className='mt-1.5'/>
          <h5 className='ps-3' >37, Pollsatnd,New York, United State</h5>
        </div><br />

        <div className='mt-2 p-4 block md:inline-flex text-3xl'>
          <FaFacebook className='me-3'/><FaTwitter className='me-3'/><FaGithub className='me-3'/><FaChrome />
        </div>
      </div>

      <div className='mt-1 ms-96 flex-none'>
        <img src={men} />
      </div>
      </div>
    </div>
    </>
  )
}
export default App