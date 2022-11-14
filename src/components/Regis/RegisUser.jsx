import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import MyPassword from '../../UI/password/MyPassword';
import {setUser} from '../../store/slices/userSlice'

const RegisUser = () => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        gender: 'What is you gender?'
    });

    return (
        <section className={s.auth}>
            <h2 className={s.auth__title}>Let's get to know each other better</h2>
            <h3 className={s.auth__text}>Tell us your name, phone number and your email</h3>
            <form className={s.auth__form}>
                <div className={s.form__title}>FULL NAME *</div>
                <MyInput type='text'
                autoComplete="username"
                value={form.fullName}
                onChange={(e) => setForm({...form, fullName: e.target.value})} />
                <div className={s.form__title}>Phone *</div>
                <MyInput type='phone'
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})} />
                <div className={s.form__title}>EMAIL ADDRES*</div>
                <MyInput type='email'
                autoComplete="username"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})} />
                <MyPassword
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})} />
                <label>
                <select className={s.form__select}
                value={form.gender}
                onChange={(e) => setForm({...form, gender: e.target.value})} >
                    <option className={s.form__optoion} disabled={true}>What is you gender?</option>
                    <option className={s.form__optoion} value="male">male</option>
                    <option className={s.form__optoion} value="female">female</option>
                </select>
                </label><br/>
                <MyButton style={{marginTop: "30px"}}
                onClick={() => dispatch(setUser(form))}
                >next
                </MyButton>
            </form>
        </section>
    );
};

export default RegisUser;