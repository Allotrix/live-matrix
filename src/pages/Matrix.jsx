import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'

import "./Matrix.css"

const Matrix = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState(
    {"UNGA":
    {"mostPertinent":[],
    "moderatelyPertinent":[],
    "leastPertinent":[]
  }}

  )

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
    <Navbar/>
    <SearchBar onSearch={handleSearch}/>

    <section className='countries-container'>
      <div className='grid-section'>
      <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>

    <CountryCard/>
    <CountryCard/>
    <CountryCard/>
      </div>
   


    </section>
    </>
  )
}

export default Matrix