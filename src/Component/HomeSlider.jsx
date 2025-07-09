import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import sliderImg1 from '../assets/slider-img1.jpeg';
// import sliderImg2 from '../assets/slider-img2.jpeg';
// import sliderImg3 from '../assets/slider-img3.jpg';
// import '../assets/slider-img1.jpeg'



const HomeSlider = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
   
  {
    imgURL:
      "https://www.indiansupermarket.store/cdn/shop/files/indian_5f558687-850a-4b3b-8cd9-2ff5ece052c5.jpg?v=1700301904&width=3840",
    imgAlt: "img-2"
  },
   {
    imgURL:
      "https://remontikgsm.by/wp-content/uploads/2018/10/banner-1.jpg",
    imgAlt: "img-1"
  },
  {
    imgURL:
      "https://www.urbanwood.in/assets/image/bulkorder-banner.jpg",
    imgAlt: "img-3"
  },
 
  ];



return (
  <div className="mx-auto w-full max-w-[1200px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mt-3">
    <Slider {...settings}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.imgURL}
          alt={image.imgAlt}
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded"
        />
      ))}
    </Slider>
  </div>
);
}

export default HomeSlider;