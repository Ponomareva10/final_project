import React from "react";
import s from "./style.module.scss";
// import imageCard from '../../image/bag2.png';

const ImageItem = ({ card }) => {
  return (
    <div className={s.image}>
      <img className={s.image__picture} src={card.picture} alt="product" />
    </div>
  );
};

export default ImageItem;