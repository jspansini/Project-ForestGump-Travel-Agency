
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Assets/pages/home';
import Destino from './Assets/pages/destino';
import Promocao from './Assets/pages/promocao';
import Contato from './Assets/pages/contato';

import Header from './Assets/components/header';
import Footer from './Assets/components/Footer';


const App= () => {
  return (
    <BrowserRouter>  
        <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Destino" element={<Destino/>}></Route>
        <Route path="/Promocao" element={<Promocao/>}></Route>
        <Route path="/Contato" element={<Contato/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
