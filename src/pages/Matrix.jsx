import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatrixContext } from '../contexts/MatrixContext';
import { SearchContext } from '../contexts/SearchContext';
import { LoaderContext } from '../contexts/LoaderContext';
import Loader from '../components/Loader';

const Matrix = () => {

    const [countryMatrix, setCountryMatrix] = useState([]);

    const params = useParams();
    const { munName, committeeName } = params;

    const { muns } = useContext(MatrixContext);
    const { loading } = useContext(LoaderContext);
    const { searchTerm } = useContext(SearchContext);

    const [checkVacancy, setCheckVacancy] = useState(false);

    useEffect(() => {
        const selectedMUN = muns.find(mun => mun.name.toLowerCase() === munName.toLowerCase());
        const parts = committeeName.split(" ");
        parts[0] = parts[0].toUpperCase();
        const committeeNameNew = parts.join(" ");
        if (selectedMUN) {
          const originalMatrix = Object.values(selectedMUN.committee[committeeNameNew]).flat();
          const allotmentMatrix = Object.values(selectedMUN.allotments[committeeNameNew]).flat();
          const finalMatrix = [];

          originalMatrix.forEach((country) => {
            allotmentMatrix.includes(country) ? finalMatrix.push({ country, vacant: true }) : finalMatrix.push({ country, vacant: false })
          })

          setCountryMatrix(finalMatrix);
        }
    }, [munName, committeeName, muns]);

    const filteredCountries = searchTerm
        ? countryMatrix.filter(country =>
            country.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : countryMatrix;

    return (
        <main className="flex flex-wrap justify-center gap-4 rounded-lg my-10 max-w-[85%] mx-auto text-allotrix-text font-allotrix-font">
            {
                loading && <Loader />
            }
            {
                filteredCountries.map((matrix, index) => (
                    <article onMouseEnter={() => setCheckVacancy(index)} onMouseLeave={() => setCheckVacancy(false)} key={index} className={`bg-[#313236] relative border-2 rounded-md py-8 min-w-full md:min-w-[370px] border-[#313236] hover:border-allotrix-std transition-all duration-100 ease-in ${!matrix.vacant && 'opacity-45'}`}>
                        <h3 className='text-xl text-center'>
                            {matrix.country}
                        </h3>
                        {
                            checkVacancy === index && (
                                <p className={`rounded-xl border-2 ${matrix.vacant ? 'border-[green] bg-[green]' : 'border-allotrix-std bg-allotrix-std'}  px-5 py-[1px] text-[12px] absolute top-3 left-5`}>
                                    {matrix.vacant ? <>Available</> : <>Taken</> }
                                </p>
                            )
                        }
                    </article>
                ))
            }
            {
                filteredCountries.length === 0 && !loading && (
                    <h3 className='text-lg py-20 text-[#6D6969] text-center'>
                        Countries of name <strong>"{searchTerm}"</strong> not found
                    </h3>
                )
            }
        </main>
    )
}

export default Matrix;
