import '../assets/styles/home.css'

import Navbar from '../components/navbar'
import { useState, useEffect, useMemo } from 'react';

import { dataProducts } from '../data/dataProducts'

import banner from '../assets/images/banner.png'
export const Product = ({ name, price, category, image }) => (
  
  <div className="item-container card">
      <img 
        src={image[0].url} 
        alt="" 
      />      
    <div>
      {name}
    </div>
    <div>
      {category}
    </div>
    <div>
      {price}
    </div>
  </div>
);

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setProductList(dataProducts);
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return productList;
    }
    return productList.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, productList]);

  return (
    <div className="home">
      <Navbar />

      <div className="home__carousel">
        <img src={banner} alt="" />
      </div>
      <main className="home__main">
        <h4>Telusuri Kategori</h4>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">Semua</option>
            <option value="Hobi">Hobi</option>
            <option value="Kendaraan">Kendaraan</option>
            <option value="Baju">Baju</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Kesehatan">Kesehatan</option>

          </select>
        </div>
        <div className="product-list">
          {filteredList.map((element, index) => (
            <Product {...element} key={index} />
          ))}
        </div>

      </main>
    </div>
  )
}

export default Home;