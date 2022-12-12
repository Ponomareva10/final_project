import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../UI/button/MyButton";
import s from "./style.module.scss";

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.main__img}></div>
      <div className={s.wrapper}>
        <div className={s.main__hello}>
          <h3 className={s.hello__title}>Hi! I'm Karla.</h3>
          <p className={s.hello__text}>
            Whenever I start with a client, there are some questions I ask to
            get a feel about where we are going style wise.... so let's get
            started and match you with one of our amazing personal stylists!
          </p>
          <Link to="/question">
            <MyButton>LETS GET STYLING</MyButton>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;