import './Filtermenu.css';
import CategoryCheckbox from './CategoryCheckbox';
import { FC, FunctionComponent } from 'react';

const Filtermenu : FC = () => {
    return(
        <div className="offer-filters">
            <div className="price-filter">
                <div className="price-filter__about">
                    <div className="price-filter__text">Сортировать по:</div>
                    <button className="price-filter__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#181818" stroke="#F1FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 10L12 14L16 10" stroke="#F1FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="price-filter__filter">
                    <div className="price-filter__title">Цена</div>
                    <div className="price-filter__slider">
                        <div className="price-filter__progress"></div>
                    </div>
                    <div className="price-filter__range">
                        <input type="range" className="price-filter__range_min" min="0" max="10000" value="0" />
                        <input type="range" className="price-filter__range_max" min="0" max="10000"  value="10000" />
                    </div>
                    <div className="price-filter__wrap">
                        <div className="price-filter__number price-filter__from">
                            <input type="number" className="price-filter__min" min="0" max="10000" value="0" />
                        </div>
                        <div className="price-filter__span">до</div>
                        <div className="price-filter__number price-filter__to">
                            <input type="number" className="price-filter__max" min="0" max="10000"  value="10000" />
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