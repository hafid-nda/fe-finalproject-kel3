import { Link, NavLink } from 'react-router-dom';

import { dataProducts } from '../../data/dataProducts'
import './productList.css'

const ProductList = ({productList}) => {
  let amt = 0;
  let count = 0;
  let row = 0;
  
  productList = dataProducts

  const arrayBlock = (productList, x) => {
    const array = productList.slice();
    const blocks = [];
    while (array.length) blocks.push(array.splice(0, x));
    return blocks;
  }

  if(productList.length >= 3) {
    row = 3;
  } else {
    row = productList.length;
  }

  const countAmount = () => {
    count = amt++;
  };
  const ProductImage = productList[count].image[0].url

  return (
    arrayBlock([...Array(productList.length).keys()], row).map((row, index) => 
      <div key={index} className="row">
        {row.map((value, index) => (
          <div className="col">
            <div className="product__item" key={index}>
              {countAmount()}
              <Link to='/product/{index}'>
                <img src={ProductImage} alt="" />
                <h5>{productList[count].name}</h5>
                <p className="text-muted">{productList[count].category}</p>
                <p>Rp {productList[count].price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  )
}

export default ProductList;