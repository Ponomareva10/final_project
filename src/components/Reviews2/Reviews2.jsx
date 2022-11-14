import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import s from './style.module.scss';
import UserReview from '../UserReview/UserReview';

const Reviews2 = () => {
    return (
        <section className={s.rev}>

            <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <UserReview />
        </SwiperSlide>
        <SwiperSlide>
          <UserReview />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Reviews2;