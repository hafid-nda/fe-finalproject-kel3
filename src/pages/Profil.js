import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

import '../assets/styles/profil.css'

function Infoprofile() {
  return (
    <div className="profil">
      <header className="header__info">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <h5 className="header__title" >Lengkapi Info Akun</h5>
      </header>
      <main>
        <Form className="infoprofile">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nama*</Form.Label>
            <Form.Control type="text" placeholder="Nama" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Kota*</Form.Label>
            <Form.Control type="text" placeholder="Pilih Kota" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Alamat*</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Contoh: Jalan Ikan Hiu 33" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>No Handphone*</Form.Label>
            <Form.Control type="text" placeholder="Contoh: +6223456789035" />
          </Form.Group>
          <button  className='button btn__purple'  type="submit">
            Simpan
          </button>
        </Form>
      </main>
    </div>
  );
}
export default Infoprofile;