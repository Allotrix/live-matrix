import React from 'react';
import { Link } from 'react-router-dom';

const CommitteeItem = ({ name, size, link }) => {
    return (
        <aside className="bg-[#232323] px-10 py-3 w-full rounded-lg flex flex-col md:flex-row gap-4 justify-between items-center border border-allotrix-std hover:scale-105 active:scale-100 transition-all duration-200 ease-out min-h-[105px]">
            <h2 className="text-[#ffffff] uppercase text-xl font-bold md:w-[50%] text-center md:text-left">
                {name}
            </h2>
            <h2 className="text-[#6D6969] font-bold md:text-xl text-md md:w-[45%]">
                Size: {size}
            </h2>
            <Link to={link} className='px-10 py-2 rounded-lg bg-allotrix-std md:w-[15%] text-center'>
                View
            </Link>
        </aside>
    )
}

export default CommitteeItem;
