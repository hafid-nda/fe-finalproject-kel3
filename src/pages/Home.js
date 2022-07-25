import '../assets/styles/home.css'

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Navbar from '../components/navbar';
import { Product } from '../components/home/productList';

import banner from '../assets/images/banner.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState();

  const handleButtonJual = () => {
    isLoggedIn ? user.kota ? navigate('/infoproduct') : navigate('/editprofile') : navigate('/login')
  }

  useEffect(() => {
    const validateLogin = async () => {
      try {
        const token = localStorage.getItem("token");
        const currentUserRequest = await axios.get(
          "http://localhost:2000/api/v1/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;
        if (currentUserResponse.status) {
          setUser(currentUserResponse.data.user);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    validateLogin();
  }, []);
  
  const categories = category ? `&category=${category}` : ""
  const getProductPublish = async () => {
    try {
      const dataProduct = await axios.get(
        "http://localhost:2000/api/v1/product"
      )
      const payloadData = await dataProduct.data.data;
      setItem(payloadData)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
      getProductPublish()
  }, [categories])


  
  return (
    <div className="home">
      <Navbar />

      <div className="home__carousel">
        <img src={banner} alt="" />
      </div>
      <main className="home__main">
        <h4>Telusuri Kategori</h4>
        <div className="kategori">
        <button 
          value="" 
          onClick={() => setCategory(null)}
          className="button btn__purple"
        >
          <FontAwesomeIcon icon={faSearch}  size="lg"/>
          Semua
        </button>
        <button 
          value="Hobi" 
          onClick={() => setCategory("hobi")}
          className="button btn__purple"
        >
          <FontAwesomeIcon icon={faSearch}  size="lg"/>
          Hobi
        </button>
        <button 
          value="Kendaraan" 
          onClick={() => setCategory("kendaraan")}
          className="button btn__purple"
        >
          <FontAwesomeIcon icon={faSearch}  size="lg"/>
          Kendaraan
        </button>
        <button 
          value="Baju" 
          onClick={() => setCategory("baju")}
          className="button btn__purple"
        >
          <FontAwesomeIcon icon={faSearch}  size="lg"/>
          Baju
        </button>
        <button 
          value="Elektronik" 
          onClick={() => setCategory("elektronik")}
          className="button btn__purple"
        >
          <FontAwesomeIcon icon={faSearch}  size="lg"/>
          Elektronik
        </button>
        <button 
          value="Kesehatan" 
          onClick={() => setCategory("kesehatan")}
          className="button btn__purple"
        >
          <FontAwesomeIcon icon={faSearch}  size="lg"/>
          Kesehatan
        </button>
        </div>

        <button className="button btn__purple d-flex gap-2 px-3 py-2 fixed-bottom mb-4" onClick={handleButtonJual}>
          Jual
        </button>

        <div className="product-list">
          <Product item={item} />
        </div>

      </main>
    </div>
  )
}

export default Home;