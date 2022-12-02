import React, { useState } from 'react';
import MyInput from '../input/MyInput';
import s from './style.module.css';

const MyRepeatPassword = (props) => {
    const [glass, setGlass] = useState("password");
    
    return (
        <div>
            <div className={s.form__title}>Repeat password *</div>
                <input 
                    type={glass}
                    className='myInput' 
                    autoComplete="current-password" 
                    {...props}
                />
                <label className='myCheced'>
                <input type="checkbox" 
                onChange={e => setGlass(e.target.checked ? "text" : "password")}/>
                Show password</label>
        </div>
    );
};

export default MyRepeatPassword;