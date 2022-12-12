import { isUnitless } from "@mui/material/styles/cssUtils";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrderFunc } from "../../store/slices/orderPoint";
import s from "./style.module.scss";

const PointOrder = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orderSlice);

  useEffect(() => {
    dispatch(GetOrderFunc());
  }, []);

  return (
    <div className={s.order}>
      <h3 className={s.order__title}>YOUR LOOK </h3>
      <h4 className={s.order__description}>Point of issue of the order:</h4>
      <div className={s.order__description}>{order.address}</div>
      <div className={s.order__description}>Working hours:</div>
      <div className={s.order__time}>
        <div className={s.time}>from</div>
        <p className={s.time}>{order.from_time}</p>
        <div className={s.time}>to</div>
        <p className={s.time}>{order.to_time}</p>
      </div>
      <div className={s.order__description}>Phone number:</div>
      <a className={s.order__description} href={order.phone}>
        {order.phone}
      </a>
    </div>
  );
};

export default PointOrder;
