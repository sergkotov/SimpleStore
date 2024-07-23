import { FC, useState, useEffect } from "react"
import './SingleProduct.css';
import { store } from "../store";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { selectProduct } from "../store/selectors";
import { GoodCard } from "../types/storeTypes";
import SingleProductSlider from "./SingleProductSlider";

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
            <main className="offer-content">
                <div className="card-wrap">
                <button className="card-prev-link" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="card-prev-link__icon"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#181818" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 10L12 14L16 10" stroke="#F1FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    Назад
                </button>
                <SingleProductSlider product={item} slide={colorIndex} newSlide={setColorIndex}/>
                </div>
            </main>
        )
    } else {
        return (
            <Navigate to={"/"} />
        );
    }
   
}

export default SingleProduct;

{/* <div class="card-wrap">
<a href="#" class="card-prev-link">
    <img src="img/card-previous.svg" alt="">
    Назад
</a>
<div class="card-slider card-slider_active" data-color="black">
    <div class="card-slider-main" data-sale="true" data-new="true">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img card-slider-main__img_active" data-slide="1" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="2" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="3" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="4" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="5" data-bg="img/slider-main-img.png">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gVgYH1y8oN4" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen  class="card-slider-main__img" data-slide="6" data-video="true"></iframe>
        <img src="img/zoom-icon.svg" alt="" class="card-slider-main__zoom">
        <div class="card-slider-props">
            <div class="card-slider-props-new">New!</div>
            <div class="card-slider-props-sale">Sale!</div>
        </div>
    </div>
    <div class="card-sliderline">
        <div class="card-sliderline-item card-sliderline-item_active" data-slide="1">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="2">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="3">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img" >
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="4">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="5">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="6" data-video="true">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item card-sliderline-item_active" data-slide="1">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="2">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="3">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img" >
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="4">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="5">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="6" data-video="true">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item card-sliderline-item_active" data-slide="1">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="2">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="3">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img" >
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="4">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>

    </div>
</div>
<div class="card-slider" data-color="orange">
    <div class="card-slider-main" data-sale="true" data-new="true">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img card-slider-main__img_active" data-slide="1" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="2" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="3" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="4" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="5" data-bg="img/slider-main-img.png">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gVgYH1y8oN4" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen  class="card-slider-main__img" data-slide="6" data-video="true"></iframe>
        <img src="img/zoom-icon.svg" alt="" class="card-slider-main__zoom">
        <div class="card-slider-props">
            <div class="card-slider-props-new">New!</div>
            <div class="card-slider-props-sale">Sale!</div>
        </div>
    </div>
    <div class="card-sliderline">
        <div class="card-sliderline-item card-sliderline-item_active" data-slide="1">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="2">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="3">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img" >
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="4">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="5">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="6" data-video="true">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
    </div>
</div>
<div class="card-slider" data-color="blue">
    <div class="card-slider-main" data-sale="true" data-new="true">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img card-slider-main__img_active" data-slide="1" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="2" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="3" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="4" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="5" data-bg="img/slider-main-img.png">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gVgYH1y8oN4" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen  class="card-slider-main__img" data-slide="6" data-video="true"></iframe>
        <img src="img/zoom-icon.svg" alt="" class="card-slider-main__zoom">
        <div class="card-slider-props">
            <div class="card-slider-props-new">New!</div>
            <div class="card-slider-props-sale">Sale!</div>
        </div>
    </div>
    <div class="card-sliderline">
        <div class="card-sliderline-item card-sliderline-item_active" data-slide="1">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="2">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="3">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img" >
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="4">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="5">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="6" data-video="true">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
    </div>
</div>
<div class="card-slider" data-color="pink">
    <div class="card-slider-main" data-sale="true" data-new="true">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img card-slider-main__img_active" data-slide="1" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="2" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="3" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="4" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="5" data-bg="img/slider-main-img.png">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gVgYH1y8oN4" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen  class="card-slider-main__img" data-slide="6" data-video="true"></iframe>
        <img src="img/zoom-icon.svg" alt="" class="card-slider-main__zoom">
        <div class="card-slider-props">
            <div class="card-slider-props-new">New!</div>
            <div class="card-slider-props-sale">Sale!</div>
        </div>
    </div>
    <div class="card-sliderline">
        <div class="card-sliderline-item card-sliderline-item_active" data-slide="1">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="2">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="3">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img" >
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="4">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="5">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="6" data-video="true">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
    </div>
</div>
<div class="card-slider" data-color="white">
    <div class="card-slider-main" data-sale="true" data-new="true">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img card-slider-main__img_active" data-slide="1" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="2" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="3" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="4" data-bg="img/slider-main-img.png">
        <img src="img/slider-main-img.png" alt="" class="card-slider-main__img" data-slide="5" data-bg="img/slider-main-img.png">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gVgYH1y8oN4" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen  class="card-slider-main__img" data-slide="6" data-video="true"></iframe>
        <img src="img/zoom-icon.svg" alt="" class="card-slider-main__zoom">
        <div class="card-slider-props">
            <div class="card-slider-props-new">New!</div>
            <div class="card-slider-props-sale">Sale!</div>
        </div>
    </div>
    <div class="card-sliderline">
        <div class="card-sliderline-item card-sliderline-item_active" data-slide="1">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="2">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="3">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img" >
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="4">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="5">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
        <div class="card-sliderline-item" data-slide="6" data-video="true">
            <img src="img/slider-img-min.png" alt="" class="card-sliderline-img">
            <div class="card-sliderline-videobtn"></div>
        </div>
    </div>
</div>
</div> */}