import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Todo from './pages/Todo';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
