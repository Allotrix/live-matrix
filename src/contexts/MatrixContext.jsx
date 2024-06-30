import React, { createContext, useContext, useEffect, useState } from 'react';
import { get, ref } from 'firebase/database';
import { db } from '../utils/firebase';
import { LoaderContext } from './LoaderContext';

export const MatrixContext = createContext();

const MatrixState = ({ children }) => {

    // Consists of all active MUNs
    const [muns, setMuns] = useState([]);

    const { setLoading } = useContext(LoaderContext);

    useEffect(() => {
        fetchMUNS();
    }, []);

    // Fetch all the currently active MUNs from DB
    // Consists of MUNS, Committees respective to each MUN, Countries respective to each committee in each MUN
    const fetchMUNS = async () => {
        try {
            setLoading(true);
            const snapshot = await get(ref(db, 'matrixData'));
            const data = snapshot.val();
            const dataArray = Object.values(data).map((MUN) => ({
                name: MUN.displayName?.displayName,
                committee: MUN?.originalMatrix,
                allotments: MUN?.allotmentMatrix,
                photoURL: MUN.PhotoURL?.photoURL,
            }));
            setLoading(false);
            setMuns(dataArray);
        } catch (error) {
            console.error('Error fetching MUNs:', error);
            setLoading(false);
        }
    };

    return (
        <MatrixContext.Provider value={{ muns }}>
            {children}
        </MatrixContext.Provider>
    )
}

export default MatrixState;
