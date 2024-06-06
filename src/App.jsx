import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MUNs from './pages/MUNs';
import MatrixState from './contexts/MatrixContext';
import SearchState from './contexts/SearchContext';
import Committees from './pages/Committees';
import Matrix from './pages/Matrix';
import LoaderState from './contexts/LoaderContext';

const App = () => {
  return (
    <Router>
      <LoaderState>
        <MatrixState>
          <SearchState>
            <Header />
            <Routes>
              <Route path='/' element={<MUNs />} />
              <Route path='/:munName' element={<Committees />} />
              <Route path='/:munName/:committeeName' element={<Matrix />} />
            </Routes>
          </SearchState>
        </MatrixState>
      </LoaderState>
    </Router>
  )
}

export default App;
