import React, { useState } from 'react';
import MyInput from '../input/MyInput';
import s from './style.module.css';

const MyPassword = () => {
    const [glass, setGlass] = useState("password");
    
    return (
        <div>
            <div className={s.form__title}>Password *</div>
                <MyInput type={glass}
                autoComplete="current-password" />
                <label className='myCheced'>
                <input type="checkbox" 
                onChange={e => setGlass(e.target.checked ? "text" : "password")}/>
                Show password</label>
        </div>
    );
};

export default MyPassword;