import './Filtermenu.css';
import CategoryCheckbox from './CategoryCheckbox';

const Filtermenu = () => {
    return(
        <div className="offer-filters">
            <div className="price-filter">
                <div className="price-filter__about">
                    <div className="price-filter__text">Сортировать по:</div>
                    <div className="price-filter__icon"></div>
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