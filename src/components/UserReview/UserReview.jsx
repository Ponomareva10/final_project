import React from 'react';
import s from './style.module.scss';

const UserReview = () => {
    return (
        <div className={s.reviews__card}>
        <div className={s.card__img}></div>
        <p className={s.card__text}>
          My stylist just “gets me” even though we've never met. She puts
          together looks that accentuate my best features. She really
          listens to me and has helped me dress for so many dates and job
          interviews.
        </p>
        <div className={s.card__autor}>
          You name
          <span className={s.date}>23 iun</span>
        </div>
      </div>
    );
};

export default UserReview;