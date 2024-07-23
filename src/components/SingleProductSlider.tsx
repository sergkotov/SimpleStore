import { FC } from "react";
import { SingleProductProps } from "../types/storeTypes";

const SingleProductSlider: FC<SingleProductProps> = (props: SingleProductProps) => {
    if(props.product.img && props.product.img?.length > 0) {
        return (
            (<div className="card-slider">
                <div className="card-slider-main">
                    <img src={`/${props.product.img[props.slide]}`} alt="" className="card-slider-main__img" />
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