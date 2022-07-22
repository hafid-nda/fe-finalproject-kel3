import { Link } from 'react-router-dom';

import { dataSellers } from '../../data/dataSellers'
import { dataProducts } from '../../data/dataProducts'
const ProductImage = dataProducts[0].image[0].url


const Semua = () => {
  const product = dataProducts.map((item, index) => 
    <div className="col">
      <div className="product__item" key={index}>
        <Link to="/product/{index}">
          <img src={ProductImage} alt="" />
          <h5>{item.name}</h5>
          <p className="text-muted">{item.category}</p>
          <p>Rp {item.price}</p>
        </Link>
      </div>
    </div>
  )
  return (
    <div className="container product__container">
    <div className="row">
      <div className="col">
        <Link to="/product/tambah"> 
          <div className="product__item__add">
            <button className="product__btn" type="button">
              + <br /> Tambah Produk
            </button>
          </div>
        </Link>
      </div>            
        {product}
    </div>
  </div>
  )
}

export default Semua;