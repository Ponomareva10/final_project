import React from "react";
import s from "./style.module.scss";

const ImageComponentsForReviews = () => {
  return (
    <div className={s.imgCmponentRev}>
      <h2 className={s.title}>What clients say</h2>
      <p className={s.text}>
        We attach great importance to strong relationships and see the benefits
        they bring to our business. Customer feedback is very important in
        helping us get things right.
      </p>
    </div>
  );
};

export default ImageComponentsForReviews;