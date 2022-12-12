import React from "react";
import { Link, useLocation } from "react-router-dom";
import arrow from "../../image/arrow.svg";
import ListExample from "../Navigation/Navigation";
import s from "./style.module.scss";
import CastomNav from "../CastomNav/CastomNav";

const Header = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <h2 className={s.header__title}>
        <Link to="/">
          {location.pathname !== "/" && (
            <img className={s.arrow} src={arrow} alt="arrow" />
          )}
        </Link>
        Your Look
      </h2>
      <div className={s.header__link}>
        <ListExample />
        <CastomNav />
      </div>
      <div className={s.header__btn}>
        <Link to="/auth">
          <button className={s.logaut}>login</button>
        </Link>
        <Link to="/registration">
          <button
            className={s.logaut}
            onClick={() => {
              localStorage.removeItem("access");
              localStorage.removeItem("refresh");
            }}
          >
            logaut
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;