import React from 'react'

import Home from './Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cuisine from './Cuisine';

const Pages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine' element={<Cuisine />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Pages; 
