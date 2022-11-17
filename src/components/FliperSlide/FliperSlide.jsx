import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import img from '../../image/img1.png';
import img1 from '../../image/img1.jpg';
import img2 from '../../image/img2.jpg';
import img3 from '../../image/img3.jpg';
import img4 from '../../image/img4.jpg';
import img5 from '../../image/img5.jpg';


export default function FliperSlide() {
  return (
    <>
      <Swiper 
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="image"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="image"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="image"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="image"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
