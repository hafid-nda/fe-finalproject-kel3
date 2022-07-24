import '../assets/styles/daftarJual.css'
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar'
import  ProductList from '../components/daftarJual/productList'

import { dataSellers } from '../data/dataSellers'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCube
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart
} from "@fortawesome/free-regular-svg-icons";

export const SellerInfo = () => {
  return (
    <div className="seller__info">
      <img className="seller__img" src="../images/penjual.png" alt="" />
      <div className="seller__text">
        <h3 className="seller__name">{dataSellers[0].seller_name}</h3>
        <p className="seller__city">{dataSellers[0].city}</p>
      </div>
        
      <Link to="/profil/edit"> 
        <button className="btn__white">
          Edit
        </button>
      </Link>
    </div>
  )
}

const DaftarJual = () => {
  return (
    <div>
      <Navbar />
      <main className="daftar__main">
        <h4>Daftar Jual Saya</h4>

        <SellerInfo />

        <div className="daftar__product">
          <div className="menu__container">
            <h5>Kategori</h5>
            <div className="menu">
              <Link to="/daftarjual" className="active">
                <FontAwesomeIcon icon={faCube}  size="lg"/>
                <h5>Semua Produk</h5>
                &gt;
              </Link>
            </div>
            <div className="menu">
              <Link to="/diminati">
                <FontAwesomeIcon icon={faHeart}  size="lg"/>
                <h5>Diminati</h5>
                &gt;
              </Link>
            </div>
            <div className="menu">
              <Link to="/terjual">
                <FontAwesomeIcon icon={faDollarSign}  size="lg"/>
                <h5>Terjual</h5>
                &gt;
              </Link>
            </div>
          </div>

          <div className="container product__container">
            <div className="row">
              <div className="col">
                <Link to="/product/add"> 
                  <div className="product__item__add">
                    <button className="product__btn" type="button">
                      + <br /> Tambah Produk
                    </button>
                  </div>
                </Link>
              </div>     
            </div>
              <ProductList/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DaftarJual;