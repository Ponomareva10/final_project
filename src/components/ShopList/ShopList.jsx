import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import s from './style.module.scss';
import ImageComponents from '../imageComponents/imageComponents';
import Spinner from 'react-bootstrap/Spinner';

const ShopList = () => {
    const { cards, louder } = useSelector((state) => state.ProductSlice)
    console.log(cards)
    return (
        <>
        <ImageComponents />
        <div className={s.shop}>
            <aside className={s.shop__aside}>
                <div className={s.aside__cotegory} >dresess</div>
                <div className={s.aside__cotegory} >shoes</div>
                <div className={s.aside__cotegory} >bags</div>
                <div className={s.aside__cotegory} >accesories</div>
            </aside>
            <section className={s.shop__products}>
                {
                    louder ? <Spinner animation="grow" /> : cards.map(( card ) => (<Product key={card.id} card={card} />))
                    
                }
            </section>
        </div>
        </>
    );
};

export default ShopList;