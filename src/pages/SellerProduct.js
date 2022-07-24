import '../assets/styles/product.css'
import Slider from '../components/carousel'
import Navbar from '../components/navbar'

//Import Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

import { dataProducts } from '../data/dataProducts'
import { dataSellers } from '../data/dataSellers'

import {Link } from "react-router-dom";

const SellerProduct = () => {
  return (
    <>
      <Navbar />
      <div>
        <button className="backArrow" >
          <FontAwesomeIcon icon={faArrowLeft}  size="lg"/>
        </button>
      </div>
      <main className="main">
        <div className="slider">
          <Slider />
        </div>

        <div className="info">
          <div className="product__info">
            <p className="product__name">{dataProducts[0].name}</p>
            <p className="product__category">{dataProducts[0].category}</p>
            <p>Rp {dataProducts[0].price}</p>
          <div className="btn__container">
            <button 
              className="button btn__purple" 
              type="button"
              id="alertBtn"
            >
              <Link
                to={{
                  pathname: "/daftarjual",
                }}
              >
                Terbitkan            
              </Link>
            </button>
            <button className="button btn__white" type="button">
              <Link
                to={{
                  pathname: "/product/edit",
                }}
              >
                Edit
              </Link>
            </button>
          </div>
      </div>

          <div className="seller__info">
            <img className="seller__img" src="../images/penjual.png" alt="" />
            <div className="seller__text">
              <h3 className="seller__name">{dataSellers[0].seller_name}</h3>
              <p className="seller__city">{dataSellers[0].city}</p>
            </div>
          </div>
        </div>
          <div className="desc">
            <h3>Deskripsi</h3>
            <p>{dataProducts[0].desc}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam fugit provident soluta optio voluptates saepe animi ipsa inventore quaerat fuga aliquid eius totam sapiente quibusdam incidunt perferendis hic, minima impedit tempore, similique, commodi beatae? Magni tempore veritatis autem debitis, laudantium eaque beatae rerum nihil sed. Eum provident aliquam tenetur.</p>
          </div>
      </main>
    </>
  )
}

export default SellerProduct;