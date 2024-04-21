import React from 'react'

import "./ComCards.css"

const ComCards = ({comName, comSize, UID, onClick}) => {

  const handleClick = () => {
    onClick({ comName, UID });
  };
  return (
    <div className='container'>
        <div className='card'>
            <h1 className='com-name'>
            {comName}
            </h1>
            <h2 className='com-occupancy'>
            Size: {comSize}
            </h2>
            <button onClick={handleClick} className='view-btn'>
            View
            </button>
        </div>

    </div>
  )
}

export default ComCards