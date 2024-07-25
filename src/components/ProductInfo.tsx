import { ChangeEvent, FC, useState } from "react"
import { SingleProductProps } from "../types/storeTypes";
import { endingsForWords, getReturnPolicy } from "../api";

const ProductInfo: FC<SingleProductProps> = (props: SingleProductProps) => {
    const maxQuantity = 100;
    const [currSize, setCurrSize] = useState(0);
    const [policyOpen, setPolicyOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    function handleQuantityInputChange(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        if(value.match(/^\d+$/)) {
            setQuantity(+value);
        }
    }

    return(
        <div className="card-info">
            <div className="card-title">{props.product.title}</div>
            {props.product.code && <div className="card-title">{props.product.code}</div>}
            <div className="card-props">
                {props.product.new && <div className="card-prop card-prop_new">New!</div>}
                {props.product.sale && <div className="card-prop card-prop_sale">Sale!</div>}
                {props.product.saleNum && <div className="card-prop_salenum">{props.product.saleNum}%</div>}
            </div>
            <div className="card-desc">
                <div className="card-desc-title">Описание</div>
                {props.product.infotext && <div className="card-desc-infotext">{props.product.infotext}</div>}
                <div className="card-desc-price">
                    <div>Цена:</div>
                    {props.product.salePrice && <div className="card-desc-price_old">
                        {props.product.price + ' ' + endingsForWords(props.product.price, ['рубль', 'рубля', 'рублей'])} 
                    </div>}
                    <div className="card-desc-price_new">
                        {props.product.salePrice ? (props.product.salePrice + ' ' + endingsForWords(props.product.salePrice, ['рубль', 'рубля', 'рублей'])) 
                            : (props.product.price + ' ' + endingsForWords(props.product.price, ['рубль', 'рубля', 'рублей']))}
                    </div>
                </div>
                {props.product.sizes && props.product.sizes.length > 0 && <div className="card-desc-size">
                    <div className="card-desc-size_title">Размер</div>
                    <div className="card-desc-size__items">
                        {props.product.sizes.map((size, index) => (
                            <div key={index} className={"card-desc-size__item" + (currSize === index ? " card-desc-size__item_active" : "")}
                            onClick={() => setCurrSize(index)}>{size}</div>
                        ))}
                    </div>
                </div>}
                <div className="card-desc-quant">
                    <div className="card-desc-quant__title">Кол-во:</div>
                    <div className="card-desc-quant__inner">        
                        <button className="card-desc-quant__minus" onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)}>-</button>
                        <input type="text" className="card-desc-quant__input" value={quantity} onChange={(e) => handleQuantityInputChange(e)}/>
                        <button className="card-desc-quant__plus" onClick={() => setQuantity(prev => prev < maxQuantity ? prev + 1 : prev)}>+</button>
                    </div>                        
                </div>
                {props.product.colors && props.product.colors.length && <div className="card-desc-color">
                    <div className="card-desc-color__title">Цвет:</div>
                    <div className="card-desc-color__items">
                        {props.product.colors.map((color, index) => (
                            <button key={index} className={"card-desc-color__item" + (index === props.slide ? " card-desc-color__item_active" : "")} 
                                style={{background: color}} onClick={() => props.newSlide(index)}></button>
                        ))}
                    </div>
                </div>}
                <button className="card-desc-buybtn">Купить</button>
                <div className={"card-desc-rollup" + (policyOpen ? " card-desc-rollup_return" : "")}>
                    <div className="card-desc-rollup__title" onClick={() => {setPolicyOpen(prev => !prev)}}>
                        Политика возврата
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                        className={"card-desc-more__icon" + (policyOpen ? " card-desc-more__icon_reversed" : "")}>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#181818" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 10L12 14L16 10" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="card-desc-rollup__text">
                        {getReturnPolicy()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;