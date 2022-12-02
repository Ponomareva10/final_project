import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import MyPassword from '../../UI/password/MyPassword';
import MyRepeatPassword from '../../UI/myPassword2/MyRepeatPassword';
import {PostRegisterFunc} from '../../store/slices/userSlice'

const RegisUser = () => {

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.userSlice)

    const [form, setForm] = useState({
        email: 'beks@gmail.com',
        password: 'Q1w2##e4r',
        password2: 'Q1w2##e4r',
    });
    console.log(form)

    return (
        <section className={s.auth}>
            <h2 className={s.auth__title}>Let's get to know each other better</h2>
            <h3 className={s.auth__text}>Tell us your name, phone number and your email</h3>
            <form className={s.auth__form}>
                <div className={s.form__title}>EMAIL ADDRES*</div>
                <MyInput type='email'
                    autoComplete="username"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})} />
                <MyPassword
                    value={form.password}
                    onChange={(e) => setForm({...form, password: e.target.value})} 
                />
                <MyRepeatPassword
                    value={form.password2}
                    onChange={(e) => setForm({...form, password2: e.target.value})} 
                />
                {error && <p>{error}</p>}
                <label>
                <div className={s.form__title}>Not necessary :</div>
                <select className={s.form__select}
                    value={form.gender}
                    onChange={(e) => setForm({...form, gender: e.target.value})} 
                >
                    <option className={s.form__optoion} disabled={true}>What is you gender?</option>
                    <option className={s.form__optoion} value="male">male</option>
                    <option className={s.form__optoion} value="female">female</option>
                </select>
                </label>
                <br/>
                <MyButton style={{marginTop: "30px"}}
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(PostRegisterFunc(form))
                    }}
                >
                    next
                </MyButton>
            </form>
        </section>
    );
};

export default RegisUser;