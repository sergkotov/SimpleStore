import { FC, MouseEventHandler, ReactEventHandler, useEffect, useState } from "react";
import { ProductProps } from "../types/storeTypes";
import { mustHaveIndex, endingsForWords } from "../api";



const Product: FC<ProductProps> = (props: ProductProps) => {
    const [slideNum, setSlideNum] = useState<number>(0);

    return (
        <li className="store-item">
            <div className="store-item__props">
                {props.product.new && <div className="store-item__props_new">New!</div>}
                {props.product.sale && <div className="store-item__props_sale">Sale!</div>}
            </div>
            <div className="store-item__pics">
                {
                    props.product.colors && props.product.colors.map((_, index) => (
                        <img src={mustHaveIndex(props.product.img, index)} key={index} 
                            className={"store-item__img" + (index===slideNum ? ' store-item__img_active' : '')} alt="" />
                    )
                )}
            </div>
            <div className="store-item__info">
                <div className="store-item__sales">
                    {props.product.saleNum && <div className="store-item__salenum">-{props.product.saleNum}%</div>}
                </div>
                {props.product.title && <div className="store-item__title">{props.product.title}</div>}
                {props.product.salePrice && <div className="store-item__price store-item__price_old">
                    <span>{props.product.salePrice}</span> {endingsForWords(props.product.salePrice, ['рубль', 'рубля', 'рублей'])}
                </div>}
                {props.product.price && <div className="store-item__price store-item__price_new">
                    <span>{props.product.price}</span> {endingsForWords(props.product.price, ['рубль', 'рубля', 'рублей'])}
                </div>}
                <div className="store-item__colors">
                {
                    props.product.colors && props.product.colors.map((color, index) => 
                        <button className={"store-item__color" + (index===slideNum ? ' store-item__color_active' : '')} 
                            key={index} style={{ background: color}}
                            onClick={() => setSlideNum(index)}></button>
                    )
                }
                </div>
            </div>
            <a href="#yellow" className="store-item__buybtn">Купить</a>
        </li>
    );
}

export default Product;