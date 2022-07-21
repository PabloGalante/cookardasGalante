import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Catalogo"} />} />
          <Route path="/category/:id" element={<ItemListContainer greeting={"Catalogo"}/>} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
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
