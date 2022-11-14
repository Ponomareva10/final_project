import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import s from "./style.module.scss";
import UserReview from "../UserReview/UserReview";

const Reviews = () => {
  return (
    <section className={s.wrapper__reviews}>
      <div className={s.reviews__title}>Reviews</div>
      <div className={s.wrapper__cards}>
        <Swiper 
            slidesPerView={3} 
            spaceBetween={30} 
            freeMode={true} 
            pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <UserReview />
          </SwiperSlide>
          <SwiperSlide>
            <UserReview />
          </SwiperSlide>
          <SwiperSlide>433455445</SwiperSlide>
          <SwiperSlide>656565</SwiperSlide>
          <SwiperSlide>676776</SwiperSlide>
          <SwiperSlide>787878</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
