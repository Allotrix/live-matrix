import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const MUNContext = createContext();

const MUNState = ({ children }) => {
  let navigate = useNavigate(); 

  const [munData, setMUNData] = useState([]); 

  const handleMUNClick = (e, link) => {
    console.log(e);
    setMUNData(e);
    navigate(link)

  };

  return (
    <MUNContext.Provider value={{ munData, handleMUNClick }}>
      {children}
    </MUNContext.Provider>
  );
};

export default MUNState;