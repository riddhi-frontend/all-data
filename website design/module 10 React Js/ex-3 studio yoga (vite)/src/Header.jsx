import React from 'react'
import { FaList } from 'react-icons/fa'
function Header()
{
    return(
        <div className="header">
            <div className="row">
                <div className="col-md-9">
                    <h2 className='mt-3 ms-5'>Pilates Studio</h2>
                </div>

                <div className="col-md-3">
                    <FaList className="list fs-3 mt-3" />
                </div>
            </div>
        </div>
    )
}
export default Header