import './Marketplace.css';
import Filtermenu from "./Filtermenu";
import Market from "./Market";

const Marketplace = () => {
    return(
        <main className="offer-content">
            <Filtermenu />
            <Market />
        </main>
    );
}

export default Marketplace;