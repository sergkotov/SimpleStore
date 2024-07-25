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