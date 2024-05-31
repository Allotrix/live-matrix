import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const MUNContext = createContext();

const MUNState = ({ children }) => {
  let navigate = useNavigate(); 

  const [munData, setMUNData] = useState([]); 
  const [COMData, setCOMData] = useState([]); 


  const handleMUNClick = (e, link) => {
    setMUNData(e);
    navigate(link)

  };

  const handleCOMClick =(e, link)=>{
    setCOMData(e)
    navigate(link)

  }

  return (
    <MUNContext.Provider value={{ munData, COMData, handleMUNClick, handleCOMClick }}>
      {children}
    </MUNContext.Provider>
  );
};

export default MUNState;