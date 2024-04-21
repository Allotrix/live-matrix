import React from 'react'

import "./CountryCard.css"


const CustomTooltip = ({ content, children, style}) => {
  return (
    <div className="custom-tooltip">
      {children}
      <span className="tooltip-content" style={style}>{content}</span>
    </div>
  );
};

const CountryCard = ({countryName, vacant, style}) => {
  return (
    <>
      <div className='country-card' >
      <CustomTooltip content={vacant ? "Available": "Taken"} style={{ border: vacant ? '1px solid green' : '1px solid #EF4036' }}/>

      <h1 className='country-name' style={style}>{countryName}</h1>

      </div>
    </>
   
  )
}

export default CountryCard