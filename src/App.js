import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ComView from './pages/ComView'
import Matrix from './pages/Matrix';
import SearchMun from './pages/SearchMun';
import MUNState from './contexts/MunState';

const App = () => {
  return (
    <Router>
      <MUNState>

        <Routes>
          <Route path='/' element={<SearchMun />} />
          <Route path='/comview' element={<ComView />} />
          <Route path='/comview/matrix' element={<Matrix />} />

        </Routes>
      </MUNState>
    </Router>
  )
}

export default App;