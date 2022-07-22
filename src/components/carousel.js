import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import ImageGallery from 'react-image-gallery';

import './carousel.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  // faChevronLeft,
  // faChevronRight,
  // faChevronCircleLeft
} from "@fortawesome/free-solid-svg-icons";

import { productImages } from '../data/productImages';
// import { dataProducts } from "../data/dataProducts";

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
      {/* <Carousel
        className="carousel" 
        // autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        // renderArrowPrev={(onClickHandler, onClick) => {
        //   const defStyle = {
        //     backgroundColor: "white", 
        //     height: "100%",
        //     position: "relative",
        //     top: 0,
        //     bottom: 0,
        //     zIndex: 2,
        //     cursor: "pointer"}
        //   const bg = onClick
        //   ? { ...defStyle, backgroundColor: "blue" }
        //   : { ...defStyle};
        //   return (
        //     <button
        //       style={defStyle}
        //       onClick={onClickHandler}
        //       onKeyDown={onClickHandler}
        //       type="button"
        //     >
        //       <FontAwesomeIcon icon={faChevronCircleLeft}  size="l"/>
        //     </button>
        //   )
        // }}
        renderIndicator={(onClickHandler, isSelected, index) => {
          const defStyle = { marginLeft: 20, color: "#C4C4C4", cursor: "pointer" };
          const style = isSelected
            ? { ...defStyle, color: "#7126B5"}
            : { ...defStyle };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              role="button"
              tabIndex={0}
            >
              <FontAwesomeIcon icon={faCircle}  size="2xs"/>
            </span>
          );
        }}
      >
        {productImages.map((productImage, index) => (
          <div key={index}>
            <div>
              <div>
                <img className="carousel__img" src={productImage.url} alt={index} />
              </div>
            </div>
          </div>
        ))}
      </Carousel> */}
      <ImageGallery
          items={Images}
          showBullets={true}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          thumbnailPosition={"bottom"}
        />
    </>
  )
}

export default Slider;