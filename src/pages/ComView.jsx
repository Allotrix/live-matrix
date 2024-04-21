import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ComCards from '../components/ComCards'
import { MUNContext } from '../contexts/MunState'
import "./ComView.css"
import { allotrixRealDb } from '../utils/AppFirebase'
import {get, ref } from "firebase/database"

const ComView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [Committees, setCommittees] = useState([]);

  const { munData, handleMUNClick } = useContext(MUNContext); 
  const UID = munData.UID
  

  useEffect(() => {
    async function getCommittees() {
      try {
        const snapshotOriginal = await get(ref(allotrixRealDb, `matrixData/${UID}/originalMatrix`));
  
        if (snapshotOriginal.exists()) {
          console.log(snapshotOriginal.val()); 
  
          //  occupancy
          let originalKeys = Object.keys(snapshotOriginal.val());
  
          console.log("originalKeys:", originalKeys);
  
          // Extract committee names from originalMatrix
          let com = [];
          snapshotOriginal.forEach((COM) => {
            let comName = COM.key;
            let size = 0;
            Object.values(COM).forEach((node) => {
              size += Object.keys(node).length;
            });
            com.push({ comName, size });
          });
  
          console.log("Committees:", com);
  
          setCommittees(com)  
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error checking matrix:", error);
      }
    }
  
    getCommittees();
  }, []);
  
  
    
  


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredComs = Committees.filter((com) => {
    return com.comName.toLowerCase().includes(searchQuery.toLowerCase())
  });

  return (
<>
<Navbar OrgName= {munData.comName} />
<SearchBar onSearch={handleSearch}/>

<section className='com-container'>
  {/*<ComCards comName={"UNGA"} comOccupancy={"23/500"}/>*/}
  {filteredComs.map((com, index) => (
          <ComCards key={index} comName={com.comName} comSize={com.size} />
        ))}



</section>

</>  
)
}

export default ComView