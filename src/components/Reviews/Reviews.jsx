import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetReviewsFunc } from "../../store/slices/reviewsPost";
import s from "./style.module.scss";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Spinner from "react-bootstrap/Spinner";
import UserReview from "../UserReview/UserReview";
import useMediaQuery from "@mui/material/useMediaQuery";

const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews, louder, error } = useSelector((state) => state.reviewsSlice);
  const [slidersPreview, setSlidersPreview] = useState(4);

  const errorMessege = () => {
    if (error.detail) return error.detail;
  };

  const matchesDesktop = useMediaQuery("(min-width:1400px)");
  const matches = useMediaQuery("(min-width:1020px)");
  const matchesTable = useMediaQuery("(min-width:750px)");
  const matchesModile = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    if (matchesDesktop) {
      setSlidersPreview(4);
    } else if (matches) {
      setSlidersPreview(3);
    } else if (matchesTable) {
      setSlidersPreview(2);
    } else if (matchesModile) {
      setSlidersPreview(1);
    }
  }, [matches, matchesTable, matchesModile, matchesDesktop]);

  useEffect(() => {
    dispatch(GetReviewsFunc());
  }, []);

  return (
    <section className={s.wrapper__reviews}>
      <div className={s.reviews__title}>Reviews</div>
      <h3 style={{ color: "red" }}>{errorMessege()}</h3>
      <div className={s.wrapper__cards}>
        <Swiper
          slidesPerView={slidersPreview}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {louder ? (
            <Spinner animation="grow" />
          ) : reviews !== [] ? (
            reviews.map((review) => {
              return (
                <SwiperSlide key={review.id}>
                  <UserReview key={review.id} review={review} />
                </SwiperSlide>
              );
            })
          ) : (
            <></>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;