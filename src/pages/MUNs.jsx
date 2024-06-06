import React, { useContext } from 'react';
import { MatrixContext } from '../contexts/MatrixContext';
import { SearchContext } from '../contexts/SearchContext';
import MUNItem from '../components/MUNItem';
import { LoaderContext } from '../contexts/LoaderContext';
import Loader from '../components/Loader';

const MUNs = () => {

    const { muns } = useContext(MatrixContext);
    const { searchTerm } = useContext(SearchContext);
    const { loading } = useContext(LoaderContext);

    const filteredMuns = searchTerm 
    ? muns.filter(mun => 
        mun.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : muns;

    return (
        <main className='my-10 font-allotrix-font max-w-[80%] mx-auto'>
            {
                loading && <Loader />
            }
            {
                filteredMuns.map((mun) => (
                    <MUNItem img={mun.photoURL} name={mun.name} committees={Object.keys(mun.committee).length} />
                ))
            }
            {
                filteredMuns.length === 0 && !loading && (
                    <h3 className='text-lg py-20 text-[#6D6969] text-center'>
                        MUNs of name <strong>"{searchTerm}"</strong> not found
                    </h3>
                )
            }
        </main>
    )
}

export default MUNs;
