import { FC, useState, useEffect } from "react"
import './SingleProduct.css';
import { store } from "../store";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { selectProduct } from "../store/selectors";
import { GoodCard } from "../types/storeTypes";
import SingleProductSlider from "./SingleProductSlider";
import ProductInfo from "./ProductInfo";

const SingleProduct: FC = () => {
    const {key} = useParams();
    const [item, setItem] = useState<GoodCard>({id: '', title: '', price: 0});
    const [colorIndex, setColorIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if(key) {
            const selectedItem = selectProduct(store.getState(), key);
            if(selectedItem)
                setItem(selectedItem);
        }
    }, []);

    if(key && selectProduct(store.getState(), key)) {
        return (
            <main className="product-content">
                <div className="card-wrap">
                    <button className="card-prev-link" onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="card-prev-link__icon"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#181818" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 10L12 14L16 10" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        Назад
                    </button>
                    <SingleProductSlider product={item} slide={colorIndex} newSlide={setColorIndex}/>                
                </div>
                <ProductInfo product={item} slide={colorIndex} newSlide={setColorIndex}/>
            </main>
        )
    } else {
        return (
            <Navigate to={"/"} />
        );
    }
   
}

export default SingleProduct;

{/*             <div class="card-info">
                <div class="card-title">
                    Новая индонезийская шахматная доска 33333
                </div>
                <div class="card-code">
                    Артикул: RZ01-03050100-R3G1
                </div>
                <div class="card-props">
                    <div class="card-prop card-prop_new">New!</div>
                    <div class="card-prop card-prop_sale">Sale!</div>
                </div>
                <div class="card-desc">
                    <div class="card-desc-title">
                        Описание
                    </div>
                    <div class="card-desc-infotext">
                        Легкая унисекс футболка из качественного тонкого хлопка с добавлением лайкры, 
                        который обеспечивает идеальную и удобную посадку не только во время повседневных 
                        занятий, но и во время занятий спортом и любого рода активности. Срок 
                        производства от 30 дней!
                    </div>
                    <div class="card-desc-price">
                        <div>Цена:</div> 
                        <div class="card-desc-price_old">14 000 рублей</div> 
                        <div class="card-desc-price_new">14 000 рублей</div>
                    </div>
                    <div class="card-desc-size">
                        <div class="card-desc-size_title">Размер</div>
                        <div class="card-desc-size__items">
                            <div class="card-desc-size__item card-desc-size__item_active" data-size="XL">XL</div>
                            <div class="card-desc-size__item" data-size="L">L</div>
                            <div class="card-desc-size__item" data-size="M">M</div>
                            <div class="card-desc-size__item" data-size="S">S</div>
                            <div class="card-desc-size__item" data-size="XS">XS</div>
                            <div class="card-desc-size__item" data-size="4-10">4-10</div>
                            <div class="card-desc-size__item" data-size="4-8">4-8</div>
                            <div class="card-desc-size__item" data-size="11-12">11-12</div>
                        </div>
                    </div>
                    <div class="card-desc-quant">
                        <div class="card-desc-quant__title">Кол-во:</div>
                        <div class="card-desc-quant__inner">        
                            <button class="card-desc-quant__minus">-</button>
                            <input type="text" class="card-desc-quant__input" value="1" data-max-count="100">
                            <button class="card-desc-quant__plus">+</button>
                        </div>                        
                    </div>
                    <div class="card-desc-color">
                        <div class="card-desc-color__title">Цвет:</div>
                        <div class="card-desc-color__items">
                            <div class="card-desc-color__item card-desc-color__item_active" data-color="black"></div>
                            <div class="card-desc-color__item" data-color="orange"></div>
                            <div class="card-desc-color__item" data-color="blue"></div>
                            <div class="card-desc-color__item" data-color="pink"></div>
                            <div class="card-desc-color__item" data-color="white"></div>
                        </div>
                    </div>
                    <div class="card-desc-deliv">
                        <div class="card-desc-deliv__title">Доставка</div>
                        <div class="card-desc-deliv__items">
                            <div class="card-desc-deliv__item card-desc-deliv__item_active" data-deliv="pickup">
                                Самовывоз
                            </div>
                            <div class="card-desc-deliv__item" data-deliv="courier">
                                Курьером
                            </div>
                            <div class="card-desc-text">
                                Вы сможете забрать вашу покупку из Русской шахматной школы в ТРК VEGAS Крокус Сити. 
                                г. Красногорск, ул. Международная, д.12 (66 км МКАД | м. Мякинино), 3 этаж. +7 495 116 23 06.
                            </div>
                            <div class="card-forma">
                                <div class="card-forma__title">Заполните все поля ниже для доставки</div>
                                <form action="#" class="card-forma__form">
                                    <div class="card-forma__wrap">
                                        <input type="text" class="card-forma__text card-forma__name" placeholder="ФИО" required>
                                        <input type="text" class="card-forma__text card-forma__address" placeholder="Адрес" required>
                                        <input type="email" class="card-forma__text card-forma-email" placeholder="E-mail" required>
                                        <div class="card-form-phone">
                                            <div class="phone-code">
                                                <div class="phone-code__flag">
                                                    <img src="img/flag+7.svg" alt="">
                                                </div>
                                                <div class="phone-code__code">
                                                    +7
                                                </div>
                                                <div class="phone-code__switch phone-code__switch_more">
                                                    <img src="img/form-more.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="phone-input">
                                                <input type="text" class="phone-input-field" placeholder="Ваш телефон" required="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-forma__wrap">
                                        <input type="text" class="card-forma__text_s card-forma__city" placeholder="Город">
                                        <input type="text" class="card-forma__text_s card-forma__index" placeholder="Почтовый индекс">
                                        <input type="text" class="card-forma__text_s card-forma__podjezd" placeholder="Подъезд">
                                        <input type="text" class="card-forma__text_s card-forma__domofon" placeholder="Домофон">
                                        <input type="text" class="card-forma__text_s card-forma__kvartira" placeholder="Квартира/офис">
                                        <input type="text" class="card-forma__text_s card-forma__etazh" placeholder="Этаж">
                                        <textarea type="text" class="card-forma__textarea card-forma__comment" placeholder="Комментарий для курьера"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card-desc-buybtn" data-size="XL" data-kol="1" data-color="black">Купить</div>
                    <div class="card-desc-rollups">
                        <div class="card-desc-rollup card-desc-rollup_return">
                            <div class="card-desc-rollup__title">
                                Политика возврата
                                <img src="img/roll-less.svg" alt="" class="card-desc-rollup__less">
                                <img src="img/roll-more.svg" alt="" class="card-desc-rollup__more">
                            </div>
                            <div class="card-desc-rollup__text">
                                Легкая унисекс футболка из качественного тонкого хлопка с добавлением лайкры, 
                        который обеспечивает идеальную и удобную посадку не только во время повседневных 
                        занятий, но и во время занятий спортом и любого рода активности. Срок 
                        производства от 30 дней!
                        Легкая унисекс футболка из качественного тонкого хлопка с добавлением лайкры, 
                        который обеспечивает идеальную и удобную посадку не только во время повседневных 
                        занятий, но и во время занятий спортом и любого рода активности. Срок 
                        производства от 30 дней!
                            </div>
                        </div>
                        <div class="card-desc-rollup card-desc-rollup_compose">
                            <div class="card-desc-rollup__title">
                                Состав изделия
                                <img src="img/roll-less.svg" alt="" class="card-desc-rollup__less">
                                <img src="img/roll-more.svg" alt="" class="card-desc-rollup__more">
                            </div>
                            <div class="card-desc-rollup__text">
                                <div>100% Хлопок</div>
                                <div>75% Полиэстер</div>
                                <div> 50% Вода</div>
                                <div>25% Синтетика</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}