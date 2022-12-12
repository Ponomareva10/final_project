import React from "react";
import s from "./style.module.scss";

const ImageCompopnentsForBasket = () => {
  return (
    <div className={s.imgComponent}>
      <div className={s.apacity}></div>
      <h3 className={s.title}>
        Buying in our store, you will always be happy and glad to come back to
        us again.{" "}
      </h3>
      <div className={s.text}>Your favorites</div>
    </div>
  );
};

export default ImageCompopnentsForBasket;