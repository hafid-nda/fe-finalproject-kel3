import '../assets/styles/daftarJual.css'
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar'
import  ProductList from '../components/daftarJual/productList'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCube
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart
} from "@fortawesome/free-regular-svg-icons";
import { SellerInfo } from './DaftarJual';
import Kosong from '../assets/images/kosong.png'

function ProductKosong() {
  return (
    <div className="product__kosong">
      <img src={Kosong} alt="" />
      <p>Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok</p>
    </div>
  )
}

export function IsProductExist(props) {
  const isWishlist = props.isWishlist;
  if(isWishlist === false) {
    return <ProductList />
  } else {
    return <ProductKosong />
  }
}

const Diminati = () => {
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
              <Link to="/daftarjual">
                <FontAwesomeIcon icon={faCube}  size="lg"/>
                <h5>Semua Produk</h5>
                &gt;
              </Link>
            </div>
            <div className="menu">
              <Link to="/diminati"  className="active">
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
            <IsProductExist isWishlist={false}/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Diminati;