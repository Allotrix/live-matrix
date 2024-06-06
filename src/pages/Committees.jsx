import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { useParams } from 'react-router-dom';
import CommitteeItem from '../components/CommitteeItem';
import { MatrixContext } from '../contexts/MatrixContext';
import { LoaderContext } from '../contexts/LoaderContext';
import Loader from '../components/Loader';

const Committees = () => {

    const [committees, setCommittees] = useState([]);
    const params = useParams();
    const { munName } = params;

    const { muns } = useContext(MatrixContext);
    const { searchTerm } = useContext(SearchContext);
    const { loading } = useContext(LoaderContext);

    useEffect(() => {
        const selectedMUN = muns.find(mun => mun.name.toLowerCase() === munName.toLowerCase());
        if (selectedMUN) {
          const committeesData = Object.entries(selectedMUN.committee).map(([committeeName, countries]) => ({
            name: committeeName,
            countryCount: Object.values(countries).reduce((total, currentArray) => total + currentArray.length, 0)
          }));
          console.log(committeesData)
          setCommittees(committeesData);
        }
    }, [munName, muns]);

    const filteredCommittees = searchTerm 
    ? committees.filter(committee=>
        committee.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : committees;

    return (
        <main className='my-10 font-allotrix-font flex flex-col gap-3 max-w-[80%] mx-auto text-allotrix-text'>
            {
                loading && <Loader />
            }
            {
                filteredCommittees.map((committee, index) => (
                    <CommitteeItem key={index} name={committee.name} size={committee.countryCount} link={`/${munName}/${committee.name}`} />
                ))
            }
            {
                filteredCommittees.length === 0 && !loading && (
                    <h3 className='text-lg py-20 text-[#6D6969] text-center'>
                        Committees of name <strong>"{searchTerm}"</strong> not found
                    </h3>
                )
            }
        </main>
    )
}

export default Committees;
