import React from 'react'
import Recipe from './Recipe';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';


const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Routes>

    </div>
  )
}

export default Pages; 
