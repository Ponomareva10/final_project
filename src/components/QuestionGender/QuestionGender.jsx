import React from "react";
import s from "./style.module.scss";
import MyButton from "../../UI/button/MyButton";

const QuestionGender = ({ setState, state }) => {
  return (
    <div className={s.styling__btn}>
      <MyButton onClick={() => setState({ ...state, gender: "man" })}>
        MALE
      </MyButton>
      <MyButton onClick={() => setState({ ...state, gender: "woman" })}>
        FEMALE
      </MyButton>
    </div>
  );
};

export default QuestionGender;