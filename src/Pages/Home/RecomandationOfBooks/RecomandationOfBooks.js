import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./RecomandationOfBooks.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, FreeMode, Navigation, Pagination, Scrollbar } from "swiper";


const RecomandationOfBooks = () => {
    return (
       <div className="py-20 bg-[#FBF1EB] mb-20" >
        <h2 className="text-4xl font-bold text-center mb-10">Recomandation Of Books</h2>
         <div className="mx-16 ">
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
       
        // freeMode={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            1000:
            {
                slidesPerView: 4,
                slidesPerGroup: 4, 
            },
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          484: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          100: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          
        }}
        modules={[ Pagination,Navigation,Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide><img src="https://i.ibb.co/xLGH7zv/Historical2.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Jzghwxq/Children2.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cF4y7m8/Historical1.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/rGHQtz7/Children1.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/5KZwW6D/fiction1.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/hyxcsnk/fiction2.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/xLGH7zv/Historical2.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/rGHQtz7/Children1.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/hyxcsnk/fiction2.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/cF4y7m8/Historical1.jpg" alt=""/></SwiperSlide>
      </Swiper>
        </div>
       </div>
    );
};

export default RecomandationOfBooks;