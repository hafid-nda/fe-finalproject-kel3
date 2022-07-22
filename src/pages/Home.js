import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/navbar'

import { useState } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

export const product = ({ name, category }) => (
  <div className="item-container">
    <div>
      <span className="item-label">Name:</span>
      {name}
    </div>
    <div>
      <span className="item-label">Category:</span>
      {category}
    </div>
  </div>
);

const Home = () => {
  // if(this.props.location.state.showToast){
  //   //show toast
  //   const toasty = () => toast("asdaisfjaisjaiosjdaoisjdoaisd");
  // }

  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <>
      <Navbar />
      {/* <ToastContainer /> */}

      <div>
        <h3>Telusuri Kategori</h3>
        <div>
          <button>
            <FontAwesomeIcon icon={faSearch}  size="lg"/>
            Semua
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch}  size="lg"/>
            Hobi
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch}  size="lg"/>
            Kendaraan
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch}  size="lg"/>
            Baju
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch}  size="lg"/>
            Elektronik
          </button>
          <button>
            <FontAwesomeIcon icon={faSearch}  size="lg"/>
            Kesehatan
          </button>
        </div>

        <div>
          
        </div>
      </div>
    </>
  )
}

export default Home;