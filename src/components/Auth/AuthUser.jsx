import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostLoginFunc } from "../../store/slices/loginUser";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";
import MyPassword from "../../UI/password/MyPassword";
import s from "./style.module.scss";

const AuthUser = () => {
  const dispatch = useDispatch();
  const { error, isAuthed } = useSelector((state) => state.loginSlice);

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const errorMessege = () => {
    if (error.email) return error.email[0];
    if (error.password) return error.password[0];
    if (error.password2) return error.password2[0];
    if (error.detail) return error.detail;
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(PostLoginFunc(auth));
  };

  if (isAuthed) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <form className={s.form}>
      <h2 className={s.form__title}>Sing in</h2>
      <div className={s.form__text}>Your email *</div>
      <MyInput
        type="email"
        value={auth.email}
        onChange={(e) => setAuth({ ...auth, email: e.target.value })}
      />
      <MyPassword
        value={auth.password}
        onChange={(e) => setAuth({ ...auth, password: e.target.value })}
      />
      <p style={{ color: "red" }}>{errorMessege()}</p>
      <MyButton onClick={login}>Login</MyButton>
      <div className={s.form__text}>Your don't have an account?</div>
      <Link to="/registration">
        <MyButton>Create an account</MyButton>
      </Link>
    </form>
  );
};

export default AuthUser;
