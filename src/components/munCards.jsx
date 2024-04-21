import React from 'react'

import "./munCards.css"

const MunCards = ({logo, comName, comOccupancy, UID, onClick}) => {

  const handleClick = () => {
    onClick({ logo, comName, comOccupancy, UID });
  };
  return (
    <div className='container'>
        <div className='card' onClick={handleClick}>
            <div className='img-container'>
            <img src={logo} alt='logo' className='logo-img'></img>

            </div>
            <h1 className='com-name'>
            {comName}
            </h1>
            <h2 className='com-occupancy'>
            Committees: {comOccupancy}
            </h2>
            <p style={{display: "none"}}>
              {UID}
            </p>
          {/* <button className='view-btn'>
            View
  </button>*/}
            
        </div>

    </div>
  )
}

export default MunCards