import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.scss";

const CastomNav = () => {
  return (
    <div className={s.nav}>
      <Link className={s.nav__item} to="/shoplist">
        Shop
      </Link>
      <Link className={s.nav__item} to="/reviews">
        Reviews
      </Link>
      <Link className={s.nav__item} to="/basket">
        Basket
      </Link>
    </div>
  );
};

export default CastomNav;
