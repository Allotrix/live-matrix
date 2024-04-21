import {React,  useState } from 'react';
import { FaSearch, FaTimes, FaHome } from 'react-icons/fa'; 
import "./SearchBar.css"
import { useNavigate } from 'react-router-dom';

const SearchBar = ({onSearch,}) => {
  let navigate = useNavigate(); 

    const [searchQuery, setSearchQuery] = useState("")


    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query); 
      };

      const handleClearBtn = ()=>{
        setSearchQuery("")
        onSearch(""); 

      }

      const handleBackBtn = ()=>{
        navigate("/")
        

      }

    

  return (
    <div className='search-container'>
      <div className='back-btn-container'>
        <button className="back-btn" onClick={handleBackBtn} >
        <FaHome/>

        </button>
      </div>
        <div className='search-bar'>
        <div className='icon'>
        <FaSearch />
      </div>
      <input className='input-bar' type='text' placeholder='Search for Committees...' value={searchQuery} onChange={handleInputChange} />
      <div className='clear-btn'>
        <button onClick={handleClearBtn}>
        <FaTimes />
        </button>
      </div>
    </div>
        </div>
      
  );
};

export default SearchBar;
