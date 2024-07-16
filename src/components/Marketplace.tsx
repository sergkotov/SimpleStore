import './Marketplace.css';
import Filtermenu from "./Filtermenu";
import Market from "./Market";
import { FC } from 'react';

const Marketplace : FC = () => {
    return(
        <main className="offer-content">
            <Filtermenu />
            <Market />
        </main>
    );
}

export default Marketplace;