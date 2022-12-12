import React, { useState } from "react";
import MyInput from "../input/MyInput";
import s from "./style.module.css";

const MyPassword = (props) => {
  const [glass, setGlass] = useState("password");

  return (
    <div>
      <div className={s.form__title}>Password *</div>
      <input {...props} type={glass} className="myInput" />
      <label className="myCheced">
        <input
          type="checkbox"
          onChange={(e) => setGlass(e.target.checked ? "text" : "password")}
        />
        Show password
      </label>
    </div>
  );
};

export default MyPassword;