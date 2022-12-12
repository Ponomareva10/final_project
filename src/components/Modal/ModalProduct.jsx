import React, { useState } from "react";
import close from "../../image/x.svg";
import s from "./style.module.scss";

const ModalProduct = ({ setModActive, card }) => {
  return (
    <div
      className="modal_active"
      onClick={() => {
        setModActive(false);
      }}
    >
      <div>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <p
            className="close"
            onClick={() => {
              setModActive(false);
            }}
          >
            <img className="icon__close" src={close} alt="close" />
          </p>
          <h2 className="title_modal">Product details</h2>
          <div className={s.card} key={card.id}>
            <div className={s.card__image}>
              <img className={s.image} src={card.picture} alt="image" />
            </div>
            <div className={s.card__info}>
              <h2 className={s.info__title}>{card.title}</h2>
              <p className={s.info__description}>{card.description}</p>
              <div className={s.info__price}>{card.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
