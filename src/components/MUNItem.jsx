import React from 'react';
import { Link } from 'react-router-dom';

const MUNItem = ({ img, name, committees }) => {
    return (
        <Link to={`/${name.toLowerCase()}`} className="bg-[#232323] px-10 py-3 rounded-lg flex flex-col md:flex-row gap-2 min-h-[105px] justify-between items-center border border-allotrix-std hover:scale-105 active:scale-100 transition-all duration-200 ease-out">
            <img className='h-20 w-20 rounded-full' src={img} alt={name} />
            <h2 className="text-[#ffffff] text-xl font-bold">
                {name}
            </h2>
            <h2 className="text-[#6D6969] font-bold md:text-xl text-md">
                Committees: {committees}
            </h2>
        </Link>
    )
}

export default MUNItem;
