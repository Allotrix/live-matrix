import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'
import { allotrixRealDb, get, ref, onValue, off} from '../utils/AppFirebase'
import { MUNContext } from '../contexts/MunState'

import "./Matrix.css"

const Matrix = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([])
  const { munData, COMData, handleMUNClick, handleCOMClick } = useContext(MUNContext); 

  const UID = COMData.UID
  const comName = COMData.comName





  const handleSearch = (query) => {
    setSearchQuery(query);
  };

 /*let change = onValue(allotrixRealDb, (snapshot) => {
    console.log("db changed")
  });
*/
useEffect(() => {
  const matrixRef = ref(allotrixRealDb, `matrixData/${UID}`);
  const unsubscribe = onValue(matrixRef, async (snapshot) => {
    if (snapshot.exists()) {
      try {
        const snapshotOriginal = await get(ref(allotrixRealDb, `matrixData/${UID}/originalMatrix/${comName}`));
        const snapshotAllotment = await get(ref(allotrixRealDb, `matrixData/${UID}/allotmentMatrix/${comName}`));

        if (snapshotOriginal.exists()) {
  
          //  occupancy
  
  
          let ogMatrix = [];
          let allotmentMatrix=[]
          let finalMatrix = []
          snapshotOriginal.forEach((COM) => {
            (COM).forEach((node) => {
                  ogMatrix.push(node.val());
            });
        });

        snapshotAllotment.forEach((COM) => {
          (COM).forEach((node) => {
            allotmentMatrix.push(node.val());
          });
      });

      ogMatrix.forEach((country)=>{
        allotmentMatrix.includes(country)? finalMatrix.push({"country": country, "vacant":true}) : finalMatrix.push({"country": country, "vacant":false})
        
      })

        console.log("firasbse pinged")
        setCountries(finalMatrix)  

        } else {
          console.error("No data available");
        }
      } catch (error) {
        console.error("Error checking matrix:", error);
      }
    }
  });

  return () => {
    // Detach the listener when the component unmounts
    off(matrixRef);
  };
}, [UID, comName]);

  const filteredComs = countries.filter((com) => {
    return com.country.toLowerCase().includes(searchQuery.toLowerCase())
  });
      
  return (
    <>
    <Navbar OrgName={munData.comName +" / "+COMData.comName}/>
    <SearchBar onSearch={handleSearch} LINK="/comview"/>

    <section className='countries-container'>
      <div className='grid-section'>
      {filteredComs.map((element, index) => (
        
    
          <CountryCard key={index} countryName= {element.country} vacant = {element.vacant} style={{ opacity: !element.vacant ? 0.35 : 1 }}/>
    
        ))}   
      </div>
   


    </section>
    </>
  )
}

export default Matrix