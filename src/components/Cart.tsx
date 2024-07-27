import { store } from '../store';
import { FC, useEffect, useState, MouseEvent } from 'react';
import './Cart.css';
import { getCartList } from '../store/selectors';
import { CartProductType } from '../types/storeTypes';
import { NavLink } from 'react-router-dom';
import { addNewProductToCart, removeProductFromCart } from '../store/actionCreators';

const Cart : FC = () => {
    const [currCart, setCurrCart] = useState<CartProductType[]>([]);
    const [totalSum, setTotalSum] = useState(0);
    const [subscribe, setSubscribe] = useState(false);

    function refresh() {
        setSubscribe(prev => !prev);
    }

    useEffect(() => {
        const cartData = getCartList(store.getState());
        setCurrCart(cartData);
        const sum = cartData.reduce((initial, item) => {
            if(item.product.salePrice) {
                return initial + item.num * item.product.salePrice;
            } else {
                return initial + item.num * item.product.price;
            }
        }, 0);
        setTotalSum(sum);
    }, [subscribe]);

    useEffect(() => {
        const unsubscribe = store.subscribe(refresh);
        return () => {unsubscribe()};
    }, []);

    function handleMinusProductClick(evt: MouseEvent<HTMLButtonElement>, id: string){
        evt.preventDefault();
        const currProduct = currCart.find(item => item.product.id === id);
        if(currProduct) {
            store.dispatch(addNewProductToCart({product: currProduct.product, num: -1}));
        }
    }

    function handlePlusProductClick(evt: MouseEvent<HTMLButtonElement>, id: string){
        evt.preventDefault();
        const currProduct = currCart.find(item => item.product.id === id);
        if(currProduct) {
            store.dispatch(addNewProductToCart({product: currProduct.product, num: 1}));
        }
    }

    function  handleRemoveBtnClick(evt: MouseEvent<HTMLButtonElement>, id: string) {
        evt.preventDefault();
        const currProduct = currCart.find(item => item.product.id === id);
        if(currProduct) {
            store.dispatch(removeProductFromCart(currProduct));
        }
    }

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
                                <button className="cart-item__quant-minus" onClick={(e) => {handleMinusProductClick(e, item.product.id)}}>-</button>
                                <input type="text" className="cart-item__quant-input" name='num' value={item.num} disabled />
                                <button className="cart-item__quant-plus" onClick={(e) => {handlePlusProductClick(e, item.product.id)}}>+</button>
                            </div>
                        </div>
                        <div className='cart-item__price'>{item.product.salePrice ? item.product.salePrice * item.num : item.product.price * item.num}</div>
                        <button className='cart-item__remove' onClick={(e) => {handleRemoveBtnClick(e, item.product.id)}}>
                            <img src="/img/remove-bin.png" alt="remove" />
                        </button>
                    </div>
                ))}
                    <form className='cart-item cart-item_total'>
                        <div className="cart-item_total__wrap">
                            <h6 className='cart-item__title'>Итого:</h6>
                            <input type="text" name="price" className='cart-item__price_input' required disabled value={totalSum}/>
                        </div>
                        <button type='submit' name='submit' className="cart-item__buybtn">
                            Оформить заказ
                        </button>
                    </form>
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