import React from 'react'
import "./Navbar.css"


const Navbar = ({OrgName}) => {
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
          <div className='org-name'>{OrgName}</div>
          <div className='utils-sub'> 
            <div className='status-btn'>Active Now</div>
            <button className='acc-btn'></button>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Navbar