import {React,  useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; 
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SearchBar.css"
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = ({onSearch, LINK}) => {
  let navigate = useNavigate(); 
  const location = useLocation();
  const ComViewPage = location.pathname.startsWith('/comview');
  const MatrixPage = location.pathname.startsWith('/comview/matrix');


    const [searchQuery, setSearchQuery] = useState("")
    const [curPage, setCurPage] = useState(LINK)

   

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
        navigate(curPage)
        

      }

    

  return (
    <div className='search-container'>
      <div className='back-btn-container'>
       {(ComViewPage || MatrixPage) && <button className="back-btn" onClick={handleBackBtn} > <IoMdArrowRoundBack/> </button> } 
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
