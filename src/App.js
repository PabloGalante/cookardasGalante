import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React, { useState } from 'react';

function App() {

  const [totalItems, setTotalItems] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar totalItems={totalItems} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Catalogo"} />} />
          <Route path="/category/:id" element={<ItemListContainer greeting={"Catalogo"}/>} />
          <Route path="item/:id" element={<ItemDetailContainer totalItems={{totalItems: totalItems, setTotalItems: setTotalItems}} />} />
          <Route path="*" element={
              <div style={{ backgroundColor: "red", width: '300px', height: '150px', margin: '0 auto' }}>ERROR 404 - NOT FOUND</div>
            }
          />
          <Route path="/cart" element={<div>Cart Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
