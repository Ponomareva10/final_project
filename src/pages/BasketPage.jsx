import React from 'react';
import Basket from '../components/Basket/Basket';
import Header from '../components/Header/Header';
import ImageCompopnentsForBasket from '../components/ImageComponentsForBasket/ImageCompopnentsForBasket';
import Footer from '../components/Footer/Footer';

const BasketPage = () => {
    return (
        <div>
            <Header />
            <ImageCompopnentsForBasket />
            <Basket />
            <Footer />
        </div>
    );
};

export default BasketPage;