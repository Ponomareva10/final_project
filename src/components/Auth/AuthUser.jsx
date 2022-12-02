import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput'
import MyPassword from '../../UI/password/MyPassword';
import s from './style.module.scss'
import { PostLoginFunc } from '../../store/slices/loginUser';

const AuthUser = () => {

    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.loginSlice);

    const [auth, setAuth] = useState ({
        email: '',
        password: ''
    });
        console.log(userAuth)
    return (
        <form className={s.form}>
            <h2 className={s.form__title}>Sing in</h2>
            <div className={s.form__text}>Your email *</div>
            <MyInput type='email'
                value={auth.email}
                onChange={(e) => setAuth({...auth, email:e.target.value})} 
            />
            <MyPassword 
                value={auth.password}
                onChange={(e) => setAuth({...auth, password:e.target.value})}
            />
            <MyButton
                onClick={() => dispatch(PostLoginFunc(auth))}
            >
                Login
            </MyButton>
            <div className={s.form__text}>Your don't have an account?</div>
            <Link to="/registration">
                <MyButton>
                    Create an account
                </MyButton>
            </Link>
        </form>
    );
};

export default AuthUser;