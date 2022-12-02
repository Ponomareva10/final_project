import React from 'react';
import s from './style.module.scss';
import photo from '../../image/user_icon.svg';

const UserReview = ({review}) => {
    return (
        <div className={s.reviews__card}>
        <div className={s.card__img}>
          <img src={photo} alt="autor" className={s.img__autor} />
        </div>
        <p className={s.card__text}>
          {review.comment}
        </p>
        <div className={s.card__autor}>
          {review.user}
          <span className={s.date}>
            {review.created_at}
          </span>
        </div>
      </div>
    );
};

export default UserReview;