import Navbar from './navbar'
// import Product from "./images/product.png"
import Logo from '../assets/images/produk.png';
import { useState } from 'react';
import './notif.css'
import Notifications from "react-notifications-menu";


const DEFAULT_NOTIFICATION = 
[
  {
    image: Logo,
    price: 'Rp 12.000',
    status: 'a',
    message: 'berhasil ditawar',
    detailPage: '/info',
    receivedTime:'12h ago',
  },
  {
    image: Logo,
    message: (
      <p>
        Kameshwaran S had shared a{' '}
      </p>
    ),
    detailPage: '/info',
    receivedTime:'12h ago',
  },
]
const Notif = () => {
  // const [data, setData] = useState([DEFAULT_NOTIFICATION]);
  return (
    // <div>
      // <div className="notif-con">
      //   <div className="notif-item">
      //     <img className="notif__img" src={Logo} alt="" />
      //     <div className="notif-text">
      //       <div className="notif__title">
      //         <span>Penawaran produk</span>
      //         <span>tanggal/jam</span>
      //         merah
      //       </div>
      //       <p>nama prod</p>
      //       <p>harga</p> 
      //       <p>berhasil ditawar</p>
      //       <span>Kamu akan segera dihubungi penjual via Whatsapp</span>
      //     </div>
      //   </div>
      //   <div className="notif-item">
      //     <img className="notif__img" src={Logo} alt="" />
      //     <div className="notif-text">
      //       <div className="notif__title">
      //         <span>Penawaran produk</span>
      //         <span>tanggal/jam</span>
      //         merah
      //       </div>
      //       <p>nama prod</p>
      //       <p>harga</p> 
      //       <p>berhasil ditawar</p>
      //       <span>Kamu akan segera dihubungi penjual via Whatsapp</span>
      //     </div>
      //   </div>
      // </div>
    //  </div>
    <Notifications 
      data={DEFAULT_NOTIFICATION}
    
      classNamePrefix='notif'
      cardOption={data => console.log(data)}
      viewAllbtn={{ text: 'see all', linkTo: '/notif' }}
      markAsRead={data => console.log(data)}
      
      // headerBackgroundColor = 'red'
      header={
        {
          title: 'Notifikasi',
          option: { text: 'View All', onClick: () => {console.log('clicked')} }
        }
      }
    />
  )
}

export default Notif;