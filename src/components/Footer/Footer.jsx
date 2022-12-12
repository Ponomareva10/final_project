import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.scss";
import facebook from "../../image/facebook.svg";
import instagram from "../../image/instagram.svg";
import twitter from "../../image/twitter.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <h2 className={s.footer__title}>YOUR LOOK</h2>
      <div className={s.footer__link}>
        <Link className={s.linkItem} to="/reviews">
          <div className={s.link__item}>Reviews</div>
        </Link>
        <Link className={s.linkItem} to="/shoplist">
          <div className={s.link__item}>Shop</div>
        </Link>
        <Link className={s.linkItem} to="/basket">
          <div className={s.link__item}>Basket</div>
        </Link>
      </div>
      <div className={s.footer__icon}>
        <Link className={s.iconItem} to="/point_order">
          <div className={s.item__item}>Point of issue of orders</div>
        </Link>
        <a href="https://www.facebook.com/">
          <img className={s.icon__item} src={facebook} alt="icon" />
        </a>
        <a href="https://www.instagram.com/">
          <img className={s.icon__item} src={instagram} alt="icon" />
        </a>
        <a href="https://twitter.com/">
          <img className={s.icon__item} src={twitter} alt="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
