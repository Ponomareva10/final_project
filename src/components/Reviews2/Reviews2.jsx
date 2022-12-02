import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.scss';
import UserReview from '../UserReview/UserReview';
import Spinner from 'react-bootstrap/Spinner';
import {GetReviewsFunc} from '../../store/slices/reviewsPost';

const Reviews2 = () => {
  const dispatch = useDispatch();
  const {reviews, louder} = useSelector((state) => state.reviewsSlice);

  useEffect(() => {
    dispatch(GetReviewsFunc())
  }, []);

    return (
        <section className={s.rev}>
          {
          louder ? <Spinner animation="grow" />
          : reviews.map((review) => (
            <UserReview key={review.id} review={review} />
            ))
        }
        </section>
    );
};

export default Reviews2;