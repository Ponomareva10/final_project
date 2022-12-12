import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PostRegisterFunc } from "../../store/slices/userSlice";
import s from "./style.module.scss";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";
import MyPassword from "../../UI/password/MyPassword";
import MyRepeatPassword from "../../UI/myPassword2/MyRepeatPassword";

const RegisUser = () => {
  const dispatch = useDispatch();
  const { error, isRegistrated } = useSelector((state) => state.userSlice);

  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const errorMessege = () => {
    if (error.email) return error.email[0];
    if (error.password) return error.password[0];
    if (error.password2) return error.password2[0];
    if (error.detail) return error.detail;
  };

  const registration = (e) => {
    e.preventDefault();
    dispatch(PostRegisterFunc(form));
  };

  if (isRegistrated) {
    return <Navigate to="/auth" replace={true} />;
  }

  return (
    <section className={s.auth}>
      <h2 className={s.auth__title}>Let's get to know each other better</h2>
      <h3 className={s.auth__text}>
        Tell us your name, phone number and your email
      </h3>
      <form className={s.auth__form}>
        <div className={s.form__title}>EMAIL ADDRES*</div>
        <MyInput
          type="email"
          autoComplete="username"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <MyPassword
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <MyRepeatPassword
          value={form.password2}
          onChange={(e) => setForm({ ...form, password2: e.target.value })}
        />
        <label>
          <div className={s.form__title}>Not necessary :</div>
          <select
            className={s.form__select}
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <option className={s.form__optoion} disabled={true}>
              What is you gender?
            </option>
            <option className={s.form__optoion} value="male">
              male
            </option>
            <option className={s.form__optoion} value="female">
              female
            </option>
          </select>
        </label>
        <p style={{ color: "red" }}>{errorMessege()}</p>
        <br />
        <MyButton style={{ marginTop: "30px" }} onClick={registration}>
          next
        </MyButton>
      </form>
    </section>
  );
};

export default RegisUser;