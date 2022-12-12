import React, { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import ImageItem from "../ImageItem/ImageItem";
import ModalReadyLook from "../../components/Modal/ModalReadyLook";
import s from "./style.module.scss";

const SetLookItem = ({ looksItem }) => {
  const [modalLookActive, setModalLookActive] = useState(false);

  return (
    <div className={s.setLook}>
      {looksItem.map((card) => (
        <ImageItem key={card.id} card={card} />
      ))}
      <MyButton onClick={() => setModalLookActive(!modalLookActive)}>
        See more
      </MyButton>
      {modalLookActive && (
        <ModalReadyLook
          key={looksItem.id}
          looksItem={looksItem}
          setModalLookActive={setModalLookActive}
        />
      )}
    </div>
  );
};

export default SetLookItem;
