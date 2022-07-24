import "react-responsive-carousel/lib/styles/carousel.min.css"
import ImageGallery from 'react-image-gallery';

import './carousel.css'
import img from '../assets/images/produk.png';

const Slider = () => {
  const Images = [
    {
      original: img,
      thumbnail: img,
    },
    {
      original: img,
      thumbnail: img,
    },
    {
      original: img,
      thumbnail: img,
    },
  ];
  return (
    <>
      <ImageGallery
          items={Images}
          showBullets={true}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
        />
    </>
  )
}

export default Slider;