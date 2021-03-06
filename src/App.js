import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<ItemListContainer greeting={"Catalogo"} />} />
            <Route path="/category/:id" element={<ItemListContainer greeting={"Catalogo"}/>} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={
                <div style={{ backgroundColor: "red", width: '300px', height: '150px', margin: '0 auto' }}>ERROR 404 - NOT FOUND</div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
