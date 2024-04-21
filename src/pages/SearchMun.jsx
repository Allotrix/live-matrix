import { React, useEffect, useState, useContext} from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import FilterMUNS from '../components/FilterMUNS'
import { allotrixRealDb } from '../utils/AppFirebase'
import {ref,get, update} from "firebase/database"
import MunCards from '../components/munCards'
import { MUNContext } from '../contexts/MunState'
import "./SearchMun.css"




const SearchMun = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [MUNS, setMUNS] = useState([])
  const [committeeCount, setCommitteeCount] = useState([])
  const { munData, handleMUNClick } = useContext(MUNContext); 




  const handleSearch = (query) => {
    setSearchQuery(query);

  };

  const handleMUNCardClick = (e) => {
    handleMUNClick(e, "/comview");
  };
  
  
  const MatrixRef = ref(allotrixRealDb, `matrixData`);
  
 useEffect( ()=>{
  async function getMUNS(){
    try {
      const snapshot = await get(MatrixRef);
  
      if (snapshot.exists()) {
          console.log(snapshot.val());
          let munNames = []
          snapshot.forEach((MUN)=>{
            let name = MUN.val().displayName.displayName
            let committee = Object.keys(MUN.val().originalMatrix).length;
            let photoURL = MUN.val().PhotoURL.photoURL
            let UID = MUN.key
            console.log("UID", UID)
            munNames.push({photoURL, name, committee, UID})
          })
          setMUNS(munNames)
          
         
      } else {
          console.log("No data available");
      }
  } catch (error) {
      console.error("Error checking matrix:", error);
    
  }

  }
   getMUNS()
  

 }, [])

 const filteredComs = MUNS.filter((com) => {
  return com.name.toLowerCase().includes(searchQuery.toLowerCase())
});
    



  return (


<>
    <Navbar/>
    <SearchBar onSearch={handleSearch}/>
    <FilterMUNS/>
    <section className='mun-container'>
  {MUNS.length === 0 ? (
    <div>
      <p style={{ color: 'white' }}>No MUNS at the Moment</p>
      </div>
  ) : (
    filteredComs.map((com, index) => (
      <MunCards
        key={index}
        logo={com.photoURL}
        comName={com.name}
        comOccupancy={com.committee}
        UID={com.UID}
        onClick={handleMUNCardClick}
      />
    ))
  )}
</section>


    
  </>
    
  
  )
}

export default SearchMun