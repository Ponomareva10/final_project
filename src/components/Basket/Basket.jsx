import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteBasketProductFunc,
  GetBasketFunc,
  totalSumPrice,
} from "../../store/slices/basketProduct";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import MyButton from "../../UI/button/MyButton";
import Product from "../Product/Product";
import s from "./style.module.scss";

const Basket = () => {
  const { basket, louder, total } = useSelector((state) => state.basketSlice);
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    let price = 0;
    basket.forEach((item) => (price += +item.price));
    return price;
  }, [basket]);

  useEffect(() => {
    dispatch(GetBasketFunc());
  }, []);

  useEffect(() => {
    dispatch(totalSumPrice(totalPrice));
  }, [totalPrice]);

  return (
    <div className={s.basket}>
      <div className={s.basket__wrapper}>
        {louder ? (
          <Spinner animation="grow" />
        ) : (
          basket.map((card) => <Product key={card.id} card={card} />)
        )}
      </div>
      <div className={s.total}>
        Total amount :<div className={s.total__price}>{total} $</div>
        <Link to="/checkout">
          <MyButton>Proceed to checkout</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
