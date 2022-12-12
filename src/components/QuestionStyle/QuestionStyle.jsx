import React from "react";
import s from "./style.module.scss";
import MyButton from "../../UI/button/MyButton";

const QuestionStyle = ({ setState, state }) => {
  return (
    <div className={s.styling__btn}>
      <MyButton onClick={() => setState({ ...state, style: "classic" })}>
        BUSSINESS
      </MyButton>
      <MyButton onClick={() => setState({ ...state, style: "sport" })}>
        SPORT
      </MyButton>
      <MyButton onClick={() => setState({ ...state, style: "casual" })}>
        CASUAL
      </MyButton>
    </div>
  );
};

export default QuestionStyle;