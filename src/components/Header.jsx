import React, { useContext, useEffect } from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { SearchContext } from '../contexts/SearchContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setSearchTerm("");
  }, [path]);

  return (
    <header className='flex flex-col gap-2 bg-[#313236] text-allotrix-text font-allotrix-font'>
      <nav className='flex w-full'>
        <img className='w-[14%] px-5 py-4 min-w-[170px]' src="/allotrix-logo.png" alt="logo" />
        <article className='w-[86%] bg-[#242529] flex items-center justify-between px-5 rounded-bl-md'>
          {
            path === '/' && (
              <h3 className='text-xl'>
                Live Country Matrix
              </h3>
            )
          }
          <h3 className='text-xl hidden md:block'>
            {decodeURIComponent(path).substring(1).toUpperCase()}
          </h3>
          {
            path !== '/' && (
              <button className='border-2 font-bold rounded-md border-[green] px-12 py-2'>
                Active Now
              </button>
            )
          }
        </article>
      </nav>
      <div className='flex items-center gap-8 md:w-[80%] mx-auto py-5 px-4'>
        {
          path !== '/' && (
            <button onClick={() => navigate(-1)} className='font-bold text-2xl hidden md:block'>
              <FaArrowLeft />
            </button>
          )
        }
        <aside className='bg-[#242529] rounded-md w-full py-2 px-3 flex gap-3 items-center text-[white]'>
          <FaSearch className='text-3xl mx-2' />
          <input 
            placeholder='Search' 
            className='bg-[#ffffff] w-full rounded-md px-4 py-2 text-[#242529] placeholder-[#242529] border-none outline-none text-lg'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} 
          />
          <button onClick={() => setSearchTerm('')} className='bg-allotrix-std rounded-full mx-2'>
            <IoIosClose className='text-[#242529] text-3xl' />
          </button>
        </aside>
      </div>
    </header>
  )
}

export default Header;