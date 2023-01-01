import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";


const RecomandationOfBooks = () => {
    return (
       <div className="bg-[#F7F7F7] p-10" >
        <h2 className="text-4xl font-bold text-center mb-10">Recomandation Of Books</h2>
         <div className="mx-auto max-w-screen-xl mb-20 ">
            <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide><img src="https://i.ibb.co/M5yhydL/The-girl-who-drank.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/4mYknX0/Adapted-Reader.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/DgrG62g/054521579-X-01-SCLZZZZZZZ-SX500.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/RHVrqGM/Untitled-2.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/TrjBxBw/Untitled-3.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cLH57KD/61a-TMGop8-VL.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cLH57KD/61a-TMGop8-VL.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cLH57KD/61a-TMGop8-VL.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cLH57KD/61a-TMGop8-VL.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cLH57KD/61a-TMGop8-VL.jpg" alt=""/></SwiperSlide>
      </Swiper>
        </div>
       </div>
    );
};

export default RecomandationOfBooks;