import { store } from '../store';
import { FC, useEffect, useState } from 'react';
import './Cart.css';
import { getCartList } from '../store/selectors';
import { CartProductType } from '../types/storeTypes';

const Cart : FC = () => {
    const [currCart, setCurrCart] = useState<CartProductType[]>([]);

    useEffect(() => {
        const cartData = getCartList(store.getState());
        setCurrCart(cartData);
    }, []);

    return(
        <main className="cart-content">
            {currCart.map((item, index) => (
                <div className='cart-item' key={index}>
                    <div className='cart-item__info'>
                        <div className='cart-item__title'>{item.product.title}</div>
                        <div className='cart-item__id'>{item.product.id}</div>
                        <div className='cart-item__id'>Num: {item.num}</div>
                    </div>
                </div>
            ))}
            <></>
        </main>


    );
}

export default Cart;