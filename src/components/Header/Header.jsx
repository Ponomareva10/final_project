import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import arrow from '../../image/arrow.svg';
import ListExample from '../Navigation/Navigation';
import MyButton from '../../UI/button/MyButton';
import s from './style.module.scss';
import CastomNav from '../CastomNav/CastomNav';
import { isAuth } from '../../pages/MainPage';

const Header = () => {
    const location = useLocation();
    return (
        <header className={s.header}>
            <h2 className={s.header__title}>
                <Link to='/'>
                    {location.pathname !== '/' && <img className={s.arrow} src={arrow} alt="arrow" />}
                </Link>
            Your Look
            </h2>

            <div className={s.btn}>
                { location.pathname === '/' ||  location.pathname === '/reviews' ? 
                <Link to='/question'>
                    <MyButton>LETS GET STYLING</MyButton>
                </Link>
                : false}
            </div>
            <div className={s.header__link}>
                <ListExample />
                <CastomNav />
            </div>
        </header>
    );
};

export default Header;