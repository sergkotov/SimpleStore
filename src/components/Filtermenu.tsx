import { store } from '../store';
import './Filtermenu.css';
import CategoryCheckbox from './CategoryCheckbox';
import { FC, useEffect, useState } from 'react';
import { selectList } from '../store/selectors';
import { findMaxPrice } from '../api';

const Filtermenu : FC = () => {
    const [flag, setFlag] = useState(false);
    const [priceOpen, setPriceOpen] = useState(true);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [fromPrice, setFromPrice] = useState(0);


    function refresh() {
        setFlag(prevState => !prevState);
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(refresh);
        return () => {unsubscribe()};
    }, []);

    useEffect(() => {
        const state = store.getState();
        const list = selectList(state);
        setMaxPrice(findMaxPrice(list));
    }, [flag]);

    return(
        <div className="offer-filters">
            <div className="price-filter">
                <div className="price-filter__about">
                    <div className="price-filter__text">Сортировать по:</div>
                    <button className="price-filter__icon" onClick={() => setPriceOpen(prevState => {return !prevState;})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                            className={priceOpen ? 'price-filter__icon_rotate' : ''}>
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#181818" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 10L12 14L16 10" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className={"price-filter__filter" + (priceOpen ? '' : ' d-none')}>
                    <div className="price-filter__title">Цена</div>
                    <div className="price-filter__slider">
                        <div className="price-filter__progress" style={{left: fromPrice/maxPrice*100 + '%', right: "0%"}}></div>
                    </div>
                    <div className="price-filter__range">
                        <input type="range" className="price-filter__range_min" min="0" max={maxPrice} value={fromPrice} 
                            onChange={(evt) => setFromPrice(+evt.target.value)}/>
                        <input type="range" className="price-filter__range_max" min={fromPrice} max={maxPrice}  value={maxPrice} />
                    </div>
                    <div className="price-filter__wrap">
                        <div className="price-filter__number price-filter__from">
                            <input type="number" className="price-filter__min" min="0" max={maxPrice} value={fromPrice} />
                        </div>
                        <div className="price-filter__span">до</div>
                        <div className="price-filter__number price-filter__to">
                            <input type="number" className="price-filter__max" min={fromPrice} max={maxPrice}  value={maxPrice} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="type-filter">
                <CategoryCheckbox/>
            </div>
        </div>
    );
}

export default Filtermenu;