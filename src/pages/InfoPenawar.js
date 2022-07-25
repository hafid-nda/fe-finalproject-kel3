import '../assets/styles/infoPenawar.css'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { Link } from 'react-router-dom';
import { useState } from 'react'

import Produk from '../assets/images/produk.png';
import Logo from '../assets/images/logo.png';

import { dataProducts } from '../data/dataProducts'
import '../components/notif.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const InfoPenawar = () => {
  //modal 1
  const [show, setShow] = useState(false);
  const [changeButton, setChangeButton] = useState({ isHidden: false });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeButton = () => {
    setShow(false)
    setChangeButton({ isHidden: !changeButton.isHidden});
  };

  const visibility = { display: changeButton.isHidden ? 'none' : 'flex'};
  
  
  // modal 2
  const [showStatus, setShowStatus] = useState(false);
  const [removeButton, setRemoveButton] = useState({ isHidden: true });
 
  const handleClose2 = () => setShowStatus(false);
  const handleShow2 = () => setShowStatus(true);

  const visibility2 = { display: changeButton.isHidden ? 'flex' : 'none'};

  const handleRemoveButton = () => {
    setShow(false);
    setShowStatus(false);
    setRemoveButton({ isHidden: removeButton.isHidden});
  };

  // radio
  const [choice, setChoice] = useState('');

  const radioValue = ['true', 'false']
  const handleChangeRadio = (event) => {
     setChoice(event.target.value)
   }
 
   const resetRadioState = () => {
     setChoice('');
   }

  return (
    <div>
      <header className="header__info">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <h5 className="header__title" >Info Penawar</h5>
      </header>
      <main className="penawaran">
        <Link to="/daftarjual">
          <button className="back" type="button">
            <FontAwesomeIcon icon={faArrowLeft}  size="xl"/>
          </button>
        </Link>
        <div className="">
          <div className="seller__info">
            <img className="seller__img" src="../images/penjual.png" alt="" />
            <div className="seller__text">
              <h3 className="seller__name">Nama Pembeli</h3>
              <p className="seller__city">Kota</p>
            </div>
          </div>

          <h6>Daftar Produkmu yang Ditawar</h6>
          <div>
            <div className="notif-item">
              <img className="product__img" src={Produk} alt="" />
              <div className="notif-text">
                <div className="notif__title">
                  <span>Penawaran produk</span>
                  <span>tanggal/jam</span>
                </div>
                <p>{dataProducts[0].name}</p>
                <p>{dataProducts[0].price}</p> 
                <p>Ditawar Rp {dataProducts[0].price}</p>
              </div>
            </div>
            <div className="penawar__btn" style={visibility}>
              <button className="button btn__white">Tolak</button>
              <button 
                className="button btn__purple"
                onClick={handleShow}  
              >
                Terima
              </button>
            </div>

            <div className="penawar__btn" style={visibility2}>
              <button 
                className="button btn__white"
                onClick={handleShow2}  
              >
                Status
              </button>
              <button 
                className="button btn__purple btn__wa"
              >
                Hubungi di 
                <FontAwesomeIcon icon={faWhatsapp}  size="lg"/>
              </button>
            </div>

            <Modal show={show} onHide={handleClose} className="modal" >
              <Modal.Header closeButton />
              <Modal.Body>
                <h5>Yeay kamu berhasil mendapat harga yang sesuai</h5>
                <p className="text-muted">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>

                <div className="modal__info">
                  <h5 className="title">Product Match</h5>
                  <div className="buyer">
                    <img className="seller__img" src="../images/penjual.png" alt="" />
                    <div className="seller__text">
                      <h3 className="seller__name">Nama Pembeli</h3>
                      <p className="seller__city">Kota</p>
                    </div>
                  </div>
                  <div className="notif-item">
                    <img className="product__img" src={Produk} alt="" />
                    <div className="notif-text">
                      <p>{dataProducts[0].name}</p>
                      <p className="product__price">{dataProducts[0].price}</p> 
                      <p>Ditawar Rp {dataProducts[0].price}</p>
                    </div>
                  </div>
                </div>
                </Modal.Body>
              <Modal.Footer>
                <button 
                  className="button btn__purple btn__wa"
                  onClick={handleChangeButton}
                >
                  Hubungi via Whatsapp
                  <FontAwesomeIcon icon={faWhatsapp}  size="xl"/>
                </button>
              </Modal.Footer>
            </Modal>

            {/* modal status */}
            <Modal show={showStatus} onHide={handleClose2} className="modal2" >
              <Modal.Header closeButton />
              <Modal.Body>
                <h5>Perbarui status penjualan produkmu</h5>
                <div className="form-check">
                  <input 
                    className="form-check-input"
                    type="radio" 
                    name="success" 
                    id="success" 
                    value="true"
                    checked={choice === 'true'}
                    onChange={handleChangeRadio}
                  />
                  <label className="form-check-label" for="success">
                    Berhasil terjual
                  </label>
                  <p className="text-muted">Kamu telah sepakat menjual produk ini kepada pembeli</p>
                  <br />
                  <input 
                    className="form-check-input"
                    type="radio" 
                    name="cancel" 
                    id="cancel" 
                    value="false"
                    checked={choice === 'false'}
                    onChange={handleChangeRadio}
                  />
                  <label className="form-check-label" for="cancel">
                    Batalkan transaksi
                  </label>
                  <p className="text-muted">Kamu membatalkan transaksi produk ini dengan pembeli</p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button 
                  className="button btn__purple"
                  onClick={handleRemoveButton}
                >
                  Kirim
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </main>
    </div>
  )
}