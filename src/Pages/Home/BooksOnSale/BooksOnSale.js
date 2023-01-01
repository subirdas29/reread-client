import { Swiper, SwiperSlide } from "swiper/react";


// import styles bundle


// Import Swiper styles
// import "swiper/swiper.min.css";

// import "swiper/components/pagination/pagination.min.css"
// import "swiper/components/navigation/navigation.min.css"
import "swiper/components/navigation/navigation.min.css"


import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { useState } from "react";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

// import required modules



const BooksOnSale = () => {
    const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }
  
    return (
        <div className='p-10 bg-[#F7F7F7] mx-32'>
            <h2 className="text-4xl font-bold text-center mb-10">Books On Sale</h2>
            <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
  "type": "fraction"
}} navigation={true} className="mySwiper">
    <SwiperSlide><img src="https://i.ibb.co/M5yhydL/The-girl-who-drank.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/4mYknX0/Adapted-Reader.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/DgrG62g/054521579-X-01-SCLZZZZZZZ-SX500.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/RHVrqGM/Untitled-2.png" alt=""/></SwiperSlide>
  </Swiper>


        </div>
    
    );
};

export default BooksOnSale;