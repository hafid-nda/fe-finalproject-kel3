import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DetailProduct from './pages/DetailProduct';
import SellerProduct from './pages/SellerProduct';

import ProductAdd from './pages/TambahProduct';

import Profil from './pages/Profil';
import  DaftarJual from './pages/DaftarJual';
import  Diminati from './pages/Diminati';
import  Terjual from './pages/Terjual';



function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SecondHand</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route 
            path="/product/:id" 
            element={<DetailProduct />} 
          />
          <Route path="/product/seller/:id" element={<SellerProduct />} />
          <Route path="/product/add" element={<ProductAdd />} />
          <Route path="/product/edit" element={<ProductAdd />} />

          <Route path="/profil" element={<Profil />} />
          <Route path="/profil/edit" element={<Profil />} />

          <Route path="/daftarjual" element={<DaftarJual />} />
          <Route path="/diminati" element={<Diminati />} />
          <Route path="/terjual" element={<Terjual />} />          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
