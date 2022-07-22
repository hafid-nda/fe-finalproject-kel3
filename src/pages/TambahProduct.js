import { Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

import '../assets/styles/tambahProduct.css'

function tambahProduct() {
  return (
    <div className="tambahProduct">
      <header className="header__info">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <h5 className="header__title" >Tambah Produk Baru</h5>
      </header>
      <main>
        <Form>
          <Form.Group className="form mb-3" controlId="formBasicText">
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control type="text" placeholder="Nama Produk" />
          </Form.Group>
          <Form.Group className="form mb-3" controlId="formBasicText">
            <Form.Label>Harga Produk</Form.Label>
            <Form.Control type="text" placeholder="Rp 0.00" />
          </Form.Group>
          <Form.Group className="form mb-3" controlId="formBasicText">
            <Form.Label>Kategori</Form.Label>
            <Form.Control type="text" placeholder="Pilih Kategori" />
          </Form.Group>
          <Form.Group className="form mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Contoh: Jalan Ikan Hiu 33" />
          </Form.Group>
          <div className='form'>
            <label className='foto-produk' for="img">Foto Produk</label><br />
            <input type="file" id="img" name="img" accept="image/*"></input><br /><br /><br />
          </div>

          <Row>
            <Col>
              <button className="button btn__white" type="reset">
                Preview
              </button>
            </Col>
            <Col>
              <button className="button btn__purple" type="submit">
                Terbitkan
              </button>
            </Col>
          </Row>
        </Form>
      </main>
    </div>
  );
}

export default tambahProduct;