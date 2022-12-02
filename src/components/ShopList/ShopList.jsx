import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import s from './style.module.scss';
import ImageComponents from '../imageComponents/imageComponents';
import Spinner from 'react-bootstrap/Spinner';
import { GetOutermostFunc, GetShoesFunc, GetPantsFunc, GetAccesoriesFunc, GetProductFunc } from '../../store/slices/Products';

const ShopList = () => {
    const dispatch = useDispatch();
    const { cards, louder } = useSelector((state) => state.ProductSlice);

    useEffect(() => {
        dispatch(GetProductFunc());
    }, []);
    
    return (
        
        <>
        <ImageComponents />
        <div className={s.shop}>
            <aside className={s.shop__aside}>
                <div className={s.aside__cotegory} onClick={() => dispatch(GetOutermostFunc())}>outermost</div>
                <div className={s.aside__cotegory} onClick={() => dispatch(GetShoesFunc())} >shoes</div>
                <div className={s.aside__cotegory} onClick={() => dispatch(GetPantsFunc())} >pants</div>
                <div className={s.aside__cotegory} onClick={() => dispatch(GetAccesoriesFunc())} >accesories</div>
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