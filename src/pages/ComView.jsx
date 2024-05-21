import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ComCards from '../components/ComCards'
import { MUNContext } from '../contexts/MunState'
import "./ComView.css"
import { allotrixRealDb, get, ref } from '../utils/AppFirebase'


const ComView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [Committees, setCommittees] = useState([]);

  const { munData, COMData, handleMUNClick, handleCOMClick } = useContext(MUNContext); 
  const UID = munData.UID
  

  useEffect(() => {
    async function getCommittees() {
      try {
        const snapshotOriginal = await get(ref(allotrixRealDb, `matrixData/${UID}/originalMatrix`));
  
        if (snapshotOriginal.exists()) {
  
          //  occupancy
  
  
          let com = [];
          snapshotOriginal.forEach((COM) => {
            let comName = COM.key;
            let size = 0;
        
            (COM).forEach((node) => {
              
                node.forEach((pertinencyArray) => {
                    size += 1

                });
                
            });

            com.push({ comName, size });
            size = 0
        
        });
        
  
  
          setCommittees(com)  
        } else {
          console.error("No data available");
        }
      } catch (error) {
        console.error("Error checking matrix:", error);
      }
    }
  
    getCommittees();
  }, []);
  
  
    
  const handleCOMCardClick = (e) => {
    handleCOMClick(e, "/comview/matrix");
  };
  


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredComs = Committees.filter((com) => {
    return com.comName.toLowerCase().includes(searchQuery.toLowerCase())
  });

  return (
<>
<Navbar OrgName= {munData.comName} />
<SearchBar onSearch={handleSearch} LINK={"/"}/>

<section className='com-container'>
  {Committees.length === 0 ? (
    <p style={{ color: 'white' }}>No committees either</p>
  ) : (
    filteredComs.map((com, index) => (
      <ComCards
        key={index}
        comName={com.comName}
        comSize={com.size}
        UID={UID}
        onClick={handleCOMCardClick}
      />
    ))
  )}
</section>


</>  
)
}

export default ComView