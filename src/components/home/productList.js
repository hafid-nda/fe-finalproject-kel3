import axios from 'axios'

export  function Product({ item }) {
  return (
    <div className="item-container card">
      {item ? item.map((item) => (
        <div key={item.id}>
          <img 
            src={item.image} 
            alt="" 
          />
          <div>
            {item.name}
          </div>
          <div>
            {item.category}
          </div>
          <div>
            {item.price}
          </div>
        </div>
      )) : ""}
    </div>
  )
};