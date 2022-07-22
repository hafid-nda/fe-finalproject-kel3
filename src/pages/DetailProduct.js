import '../assets/styles/product.css'
// import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal'
import Slider from '../components/carousel'
import Navbar from '../components/navbar'

import {Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
//Toast Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Import Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import Produk from '../assets/images/produk.png';


import { dataProducts } from '../data/dataProducts'
import { dataSellers } from '../data/dataSellers'


const Detail = () => {
  const toasty = () => toast("asdaisfjaisjaiosjdaoisjdoaisd");

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    
    navigate(path);
  }

  //modal
  const [show, setShow] = useState(false);
  const [changeButton, setChangeButton] = useState({ isHidden: false });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeButton = () => {
    setShow(false)
    setChangeButton({ isHidden: !changeButton.isHidden});
  };

  const visibility = { display: changeButton.isHidden ? 'none' : 'flex'};
  
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

        {/* <ToastContainer /> */}

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
              onClick={handleShow}  
            >
              Saya tertarik dan ingin nego          
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

      <Modal show={show} onHide={handleClose} className="modal" >
              <Modal.Header closeButton />
              <Modal.Body>
                <h5>Masukkan Harga Tawarmu</h5>
                <p className="text-muted">Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>

                <div className="modal__info">
                  <div className="buyer">
                    <img className="product__img" src={Produk} alt="" />
                    <div className="seller__text">
                      <h3 className="seller__name">{dataProducts[0].name}</h3>
                      <p className="seller__city">{dataProducts[0].price}</p>
                    </div>
                  </div>
                </div>
                  <form>
                    <label htmlFor="tawar">Harga Tawar</label>
                    <input type="number" name="tawar" placeholder="Rp 0,00" required/>
                  </form>
                </Modal.Body>
              <Modal.Footer>
                <button 
                  className="button btn__purple btn__wa"
                  onClick={handleChangeButton}
                >
                  Kirim
                </button>
              </Modal.Footer>
            </Modal>
    </>
  )
}

export default Detail;