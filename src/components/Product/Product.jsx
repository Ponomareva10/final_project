import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  PostAddedToBasketFunc,
  DeleteBasketProductFunc,
  GetBasketFunc,
} from "../../store/slices/basketProduct";
import s from "./style.module.scss";
import ModalProduct from "../../components/Modal/ModalProduct";
// import imageCard from '../../image/dress.jpg';
import imageIcon from "../../image/basket.svg";
import imageDelete from "../../image/delete.svg";

const Product = ({card }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [modActive, setModActive] = useState(false);

  return (
    <div className={s.card} key={card.id}>
      <div className={s.card__image}>
        <img className={s.img} src={card.picture} alt="image" />
      </div>
      <div className={s.card__info}>
        <h2 className={s.info__title}>{card.title}</h2>
        <p className={s.info__description}>{card.description}</p>
        <button
          onClick={() => {
            setModActive(true);
          }}
        >
          See more
        </button>
        <div className={s.info__price}>
          {card.price}
          <div className={s.info__icon}>
            {location.pathname !== "/basket" ? (
              <img
                className={s.icon}
                src={imageIcon}
                alt="icon"
                onClick={() => dispatch(PostAddedToBasketFunc(card))}
              />
            ) : (
              <img
                className={s.icon}
                src={imageDelete}
                alt="icon"
                on
                onClick={() => dispatch(DeleteBasketProductFunc(card.id))}
              />
            )}
          </div>
        </div>
      </div>
      {modActive && <ModalProduct card={card} setModActive={setModActive} />}
    </div>
  );
};

export default Product;