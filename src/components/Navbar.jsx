import React from 'react'
import "./Navbar.css"
import { useLocation } from 'react-router-dom'


const Navbar = ({OrgName}) => {
  const location = useLocation();
  const ComViewPage = location.pathname.startsWith('/comview');
  const MatrixPage = location.pathname.startsWith('/comview/matrix');

  return (
    <>
    {/* Navigation Bar */}
    <div className='nav-bar'>
        {/* Logo */}
        <div className='logo-container'>
          <a href='/'> 
          <img className="logo" src="https://i.postimg.cc/mr03ZRQH/Asset-16-4x.png" alt="Logo"/>
          </a>
        </div>
        {/* Labels and Button */}
        <div className='utils'>
          <div className='org-name'>{OrgName || "Allotrix Live Matrix"}</div>
          <div className='utils-sub'> 
          <button className='acc-btn' style={{opacity: 0}}></button>

          {(ComViewPage || MatrixPage) && <div className='status-btn'>Active Now</div>}
            
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Navbar