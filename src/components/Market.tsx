import { store } from "../store";
import './Market.css';
import { FC, useEffect, useState, useCallback } from "react";
import { selectAllList, selectFilteredList, selectList } from "../store/selectors";
import Product from "./Product";
import { GoodCard} from "../types/storeTypes";
import Pagination from "./Paginator";

const Market : FC= () => {
    const ELEMENTS_PER_PAGE = 6;
    const [flag, setFlag] = useState(false);
    const [products, setProducts] = useState<GoodCard[]>([]);
    const [page, setPage] = useState<number>(1);


    useEffect(() => {
        setProducts(selectList(store.getState()));
    }, []);

    const changePageClick = useCallback((newPage: number) => {
        if(newPage !== page) {
            setPage(newPage);
        }
    }, [page]);

    function refresh() {
        setFlag(prevState => !prevState);
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(refresh);
        return () => {unsubscribe()};
    }, []);

    useEffect(() => {
        const state = store.getState();
        const list1 = selectAllList(state);
        const list = selectFilteredList(state);
        setProducts(list);
    }, [flag]);

    return(
        <section className="store">
                <ul className="store-items">
                    {products.map((item, index) => {
                        return(
                            (index >= ELEMENTS_PER_PAGE*(page-1) && index < ELEMENTS_PER_PAGE*(page)) && <Product key={index} product={item} />
                        )
                    })}
                </ul>
                <Pagination onChangePage={changePageClick} perPage={ELEMENTS_PER_PAGE} 
                nav={{current: page, total: products.length}}/>
        </section>
    );
}

export default Market;