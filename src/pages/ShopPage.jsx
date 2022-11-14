import React from 'react';
import { useDispatch } from 'react-redux';
import { GetProductFunc } from '../store/slices/Products';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ShopList from '../components/ShopList/ShopList';
import { useEffect } from 'react';

const ShopPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProductFunc())
    }, [])

    return (
        <div>
            <Header />
            <ShopList />
            <Footer />
        </div>
    );
};

export default ShopPage;