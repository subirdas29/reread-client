import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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