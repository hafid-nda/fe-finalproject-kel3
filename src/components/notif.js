import Logo from '../assets/images/produk.png';
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
  return (
    <Notifications 
      data={DEFAULT_NOTIFICATION}
    
      classNamePrefix='notif'
      cardOption={data => console.log(data)}
      viewAllbtn={{ text: 'see all', linkTo: '/notif' }}
      markAsRead={data => console.log(data)}      
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