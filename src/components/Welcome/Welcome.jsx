import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.scss";
import MyButton from "../../UI/button/MyButton";

const Welcome = () => {
  return (
    <section className={s.welcome}>
      <div className={s.welcome__apacity}></div>
      <h1 className={s.welcome__title}>Great style Is for everyone!</h1>
      <p className={s.welcome__text}>
        connects you with style experts to help you shop online while
        incorporating what you already own to build your perfect wardrobe.
      </p>
      <div className={s.welcome__btn}>
        <Link to="/question">
          <MyButton>LETS GET STYLING</MyButton>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;