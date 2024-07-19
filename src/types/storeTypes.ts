export interface UserAction {
    type: string;
    payload: FilterDetails;
}

export interface FilterDetails {
    priceFrom: number;
    priceTo: number;
    new?: boolean;
    sale?: boolean;
}

export interface GoodCard {
    id: string;
    title: string;
    price: number;
    salePrice?: number;
    new?: boolean;
    sale?: boolean;
    saleNum?: number;
    colors?: string[];
    img?: string[];
    notAvailable?: boolean;
}

export interface StoreType {
    data: GoodCard[];
}

export interface ProductProps {
    product: GoodCard;
}

export type PaginationProps = {
    onChangePage: (newPage: number) => void;
    perPage: number;
    nav: {
        current: number;
        total: number;
    }
}

export type MouseButtonEvent = React.MouseEvent<HTMLButtonElement>