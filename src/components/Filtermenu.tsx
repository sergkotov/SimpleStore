import { store } from '../store';
import './Filtermenu.css';
import CategoryCheckbox from './CategoryCheckbox';
import { ChangeEvent, FC, useEffect, useState} from 'react';
import { selectList } from '../store/selectors';
import { findMaxPrice } from '../api';
import { useDebounce } from '../api';
import { setFilter } from '../store/actionCreators';

const Filtermenu : FC = () => {
    const [priceOpen, setPriceOpen] = useState(true);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1000000);
    const [checkboxes, setCheckboxes] = useState({new: true, sale: true});
    const debouncedFromPrice = useDebounce(fromPrice, 120);
    const debouncedToPrice = useDebounce(toPrice, 120);

    useEffect(() => {
        const state = store.getState();
        const list = selectList(state);
        const maxPriceValue = findMaxPrice(list);
        setMaxPrice(maxPriceValue);
        setToPrice(maxPriceValue);
    }, []);

    function handleFromPriceInput(evt: ChangeEvent<HTMLInputElement>) {
        const currFromValue = +evt.target.value;
        setFromPrice(currFromValue);
        if(toPrice < currFromValue)
            setToPrice(currFromValue);
    }

    function handleToPriceInput(evt: ChangeEvent<HTMLInputElement>) {
        const currToValue = +evt.target.value;
        setToPrice(currToValue);
        if(fromPrice > currToValue)
            setFromPrice(currToValue);
    }

    function handleFromInputChange(evt: ChangeEvent<HTMLInputElement>) {
        let value = evt.target.value;
        if(value === ''){
            value = '0';
        }
        if(value.match(/^\d+$/)) {
            if(+value >= 0 && +value <= maxPrice) {
                setFromPrice(+value);
                if(toPrice < +value)
                    setToPrice(+value);
            } else if(+value < 0) {
                setFromPrice(0);
            } else if(+value > maxPrice) {
                setFromPrice(maxPrice);
                setToPrice(maxPrice);
            }
        }
    }

    function handleToInputChange(evt: ChangeEvent<HTMLInputElement>) {
        let value = evt.target.value;
        if(value === ''){
            value = '0';
        }
        if(value.match(/^\d+$/)) {
            if(+value >= 0 && +value <= maxPrice) {
                setToPrice(+value);
                if(fromPrice > +value)
                    setFromPrice(+value);
            } else if(+value < 0) {
                setFromPrice(0);
                setToPrice(0);
            } else if(+value > maxPrice) {
                setToPrice(maxPrice);
            }
        }
    }

    const handleCheckboxClick = (name: string) => {
        setCheckboxes((prevState) => {
            if(name === "new" || name === "sale") {
                prevState[name] = !prevState[name];
            }
            return prevState;
        });
        store.dispatch(setFilter(fromPrice, toPrice, checkboxes.new, checkboxes.sale));
    };

    useEffect(() => {
        store.dispatch(setFilter(fromPrice, toPrice, checkboxes.new, checkboxes.sale));
    }, [debouncedFromPrice, debouncedToPrice]);

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
                        <div className="price-filter__progress" style={{left: fromPrice/maxPrice*100 + "%", right: 100 - toPrice/maxPrice*100 + "0%"}}></div>
                    </div>
                    <div className="price-filter__range">
                        <input type="range" className="price-filter__range_min" min="0" max={maxPrice} value={fromPrice} 
                            onChange={(evt) => handleFromPriceInput(evt)}/>
                        <input type="range" className="price-filter__range_max" min="0" max={maxPrice}  value={toPrice} 
                            onChange={(evt) => handleToPriceInput(evt)}/>
                    </div>
                    <div className="price-filter__wrap">
                        <div className="price-filter__number price-filter__from">
                            <input type="number" className="price-filter__min" min="0" max={maxPrice} value={fromPrice} 
                                onChange={(e) => handleFromInputChange(e)} />
                        </div>
                        <div className="price-filter__span">до</div>
                        <div className="price-filter__number price-filter__to">
                            <input type="number" className="price-filter__max" min="0" max={maxPrice} value={toPrice} 
                                onChange={(e) => handleToInputChange(e)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="type-filter">
                <CategoryCheckbox name={"new"} value={"Новинки"} onClickCheckbox={handleCheckboxClick}/>
                <CategoryCheckbox name={"sale"} value={"Распродажи"} onClickCheckbox={handleCheckboxClick}/>
            </div>
        </div>
    );
}

export default Filtermenu;