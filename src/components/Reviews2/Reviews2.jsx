import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetReviewsFunc } from "../../store/slices/reviewsPost";
import s from "./style.module.scss";
import UserReview from "../UserReview/UserReview";
import Spinner from "react-bootstrap/Spinner";

const Reviews2 = () => {
  const dispatch = useDispatch();
  const { reviews, louder } = useSelector((state) => state.reviewsSlice);

  const noneArray = () => {
    if (reviews === []) return "no reviews";
  };

  useEffect(() => {
    dispatch(GetReviewsFunc());
  }, []);

  return (
    <section className={s.rev}>
      <h3 style={{ color: "red" }}>{noneArray()}</h3>
      {louder ? (
        <Spinner animation="grow" />
      ) : (
        reviews.map((review) => <UserReview key={review.id} review={review} />)
      )}
    </section>
  );
};

export default Reviews2;