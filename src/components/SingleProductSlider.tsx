import { FC } from "react";
import { SingleProductProps } from "../types/storeTypes";

const SingleProductSlider: FC<SingleProductProps> = (props: SingleProductProps) => {
    if(props.product.img && props.product.img?.length > 0) {
        return (
            (<div className="card-slider">
                <div className="card-slider-main">
                    <img src={`/${props.product.img[props.slide]}`} alt="" className="card-slider-main__img" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="card-slider-main__zoom">
                        <path d="M23 31C27.4183 31 31 27.4183 31 23C31 18.5817 27.4183 15 23 15C18.5817 15 15 18.5817 15 23C15 27.4183 18.5817 31 23 31Z" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M33 32.9999L28.65 28.6499" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23 20V26" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 23H26" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="24" cy="24" r="24" fill="#F1FFFF" fill-opacity="0.25"/>
                    </svg>
                    <div className="card-slider-props">
                        {props.product.new && <div className="card-slider-props-new">New!</div>}
                        {props.product.sale && <div className="card-slider-props-sale">Sale!</div>}                    
                    </div>
                </div>
                <div className="card-sliderline">
                    {props.product.img.map((item, index) => (                    
                        <div key={index} className={"card-sliderline-item" + (index == props.slide ? " card-sliderline-item_active" : "")}
                            onClick={() => props.newSlide(index)}>
                            <img src={`/${item}`} alt="" className="card-sliderline-img" />
                        </div>                    
                    ))}
                </div>
            </div>)
        );
    } else {
        return (<></>);
    }
}

export default SingleProductSlider;