import {React,  useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; 
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SearchBar.css"
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const SearchBar = ({onSearch, LINK}) => {
  let navigate = useNavigate(); 
  const location = useLocation();
  const { munCardName, comCardName } = useParams();

  const HomePage = location.pathname === '/';
  const ComViewPage = `/${munCardName}`
  const MatrixPage = `/${munCardName}/${comCardName}` 


    const [searchQuery, setSearchQuery] = useState("")
    const [curPage, setCurPage] = useState(LINK)

   
    let placeholderText;
  if (MatrixPage) {
    placeholderText = 'Search for Countries...';
  } else if (ComViewPage) {
    placeholderText = 'Search for Committees...';
  } else {
    placeholderText = 'Search for Committees...';
  }
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
       {(ComViewPage || MatrixPage) && (!HomePage) && <button className="back-btn" onClick={handleBackBtn} > <IoMdArrowRoundBack/> </button> } 
      </div>
        <div className='search-bar'>
        <div className='icon'>
        <FaSearch />
      </div>
      <input className='input-bar' type='text' placeholder={placeholderText} value={searchQuery} onChange={handleInputChange} />
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
