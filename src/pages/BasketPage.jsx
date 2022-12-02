import React, { useState } from 'react';
import Basket from '../components/Basket/Basket';
import Header from '../components/Header/Header';
import ImageCompopnentsForBasket from '../components/ImageComponentsForBasket/ImageCompopnentsForBasket';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';

const BasketPage = () => {
    const [isLogin, setIsLogin] = useState(false)
    localStorage.setItem('token', JSON.stringify("Пропуск"))
    const local = JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
        setIsLogin(local ? true : false)
    }, [])
    return (
        <div>
            <Header />
            <ImageCompopnentsForBasket />
            {isLogin ? <Basket />  : <h1>Вали отсюда</h1>}
            <Footer />
        </div>
    );
};

export default BasketPage;