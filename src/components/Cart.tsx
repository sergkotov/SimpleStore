import { store } from '../store';
import { FC, useEffect, useState } from 'react';
import './Cart.css';
import { getCartList } from '../store/selectors';
import { CartProductType } from '../types/storeTypes';
import { NavLink } from 'react-router-dom';

const Cart : FC = () => {
    const [currCart, setCurrCart] = useState<CartProductType[]>([]);

    useEffect(() => {
        const cartData = getCartList(store.getState());
        setCurrCart(cartData);
    }, []);

    if(currCart.length > 0) {
        return(
            <main className="cart-content">
                <div className='cart-content__items'>
                {currCart.map((item, index) => (
                    <div className='cart-item' key={index}>
                        <img src={(item.product.img && item.product.img.length > 0) ? `/${item.product.img[0]}` : ''} alt="" className='cart-item__img'/>
                        <h6 className='cart-item__title'>{item.product.title}</h6>
                        <div className="cart-item__quant">
                            <div className="cart-item__quant-inner">
                                <button className="cart-item__quant-minus">-</button>
                                <input type="text" className="cart-item__quant-input" value={item.num}/>
                                <button className="cart-item__quant-plus">+</button>
                            </div>
                        </div>
                        <div className='cart-item__price'>{item.product.salePrice ? item.product.salePrice * item.num : item.product.price * item.num}</div>
                        <button className='cart-item__remove'>
                            <img src="/img/remove-bin.png" alt="remove" />
                        </button>
                    </div>
                ))}
                    <div className='cart-item cart-item_total'>
                        <h6 className='cart-item__title'>Итого:</h6>
                        <div className='cart-item__price'></div>
                    </div>
                </div>
            </main>
        );
    } else {
        return (
            <main className="cart-content">
                <h3 className='cart-content__title'>Корзина</h3>
                <div className='cart-content__items'>
                    <div className='cart-content__empty'>
                        <img src="/img/shopping-cart.png" alt="cart" className='cart-content__empty-icon' />
                        <p className='cart-content__empty-title'>В корзине пока пусто</p>
                        <NavLink to="/" className='cart-content__empty-redirect'>За покупками</NavLink>
                    </div>
                </div>
            </main>
        );
    }

}

export default Cart;