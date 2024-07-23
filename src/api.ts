import { GoodCard, FilterDetails } from "./types/storeTypes";
import { useState, useEffect } from 'react';

//api simulation
function getData() : GoodCard[] {
    return [
        {
            id: "xdsd34242",
            title: 'Ветровка Женская',
            price: 6500,
            salePrice: 4875,
            new: true,
            sale: true,
            saleNum: 25,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg'],
            code: 'Артикул: RZ01-03050100-R3G1',
            infotext: "Лёгкая куртка",
            sizes: ['M', 'L', 'XL', 'XXL']
        },
        {
            id: "xdsd34212",
            title: 'Футболка Мужская',
            price: 5000,
            new: true,
            sale: true,
            colors: ['#FA6851', '#B7CA32', '#EBE8EF', '#BE0223'],
            img:['img/f-pink-min.jpg', 'img/f-green.jpg', 'img/f-white-min.jpg', 'img/f-red-min.jpg'],
            code: 'Артикул: RZ01-023424100-R3G1',
            infotext: "Легкая унисекс футболка из качественного тонкого хлопка с добавлением лайкры, который обеспечивает идеальную и удобную посадку не только во время повседневных занятий, но и во время занятий спортом и любого рода активности. Срок производства от 30 дней!",
            sizes: ['M', 'L', 'XL', 'XXL']
        },
        {
            id: "xdsd12313231",
            title: 'Деловой Костюм Женский',
            price: 11800,
            new: true,
            colors: ['#CFCFCF', '#626262', '#292526'],
            img:['img/c-1-min.jpeg', 'img/c-2-min.jpeg', 'img/c-3-min.jpeg'],
            code: 'Артикул: RZ07-03050100-R3G1'
        },
        {
            id: "xdsd123cc3231",
            title: 'Деловой Костюм Женский',
            price: 11800,
            colors: ['#CFCFCF', '#626262', '#292526'],
            img:['img/c-1-min.jpeg', 'img/c-2-min.jpeg', 'img/c-3-min.jpeg'],
            sizes: ['M', 'L', 'XL', 'XXL']
        },
        {
            id: "xdsd123c66",
            title: 'Футболка Мужская',
            price: 5000,
            new: true,
            sale: true,
            colors: ['#FA6851', '#B7CA32', '#EBE8EF', '#BE0223'],
            img:['img/f-pink-min.jpg', 'img/f-green.jpg', 'img/f-white-min.jpg', 'img/f-red-min.jpg'],
            notAvailable: true
        },
        {
            id: "xdsd155f31",
            title: 'Ветровка Женская',
            price: 6500,
            salePrice: 4875,
            new: true,
            sale: true,
            saleNum: 25,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg'],
            sizes: ['M', 'L', 'XL', 'XXL']
        },
        {
            id: "xdsd1287dd4",
            title: 'Ветровка Женская',
            price: 7801,
            salePrice: 4915,
            new: true,
            sale: true,
            saleNum: 37,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg'],
            sizes: ['M', 'L', 'XL', 'XXL']
        },
        {
            id: "xdsd15234g",
            title: 'Ветровка Женская',
            price: 6500,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            id: "xdsd199ty1",
            title: 'Деловой Костюм Женский',
            price: 11800,
            new: true,
            colors: ['#CFCFCF', '#626262', '#292526'],
            img:['img/c-1-min.jpeg', 'img/c-2-min.jpeg', 'img/c-3-min.jpeg'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            id: "xdsd344446m1",
            title: 'Деловой Костюм Женский с юбкой',
            price: 11800,
            new: true,
            colors: ['#CFCFCF', '#626262', '#292526'],
            img:['img/c-1-min.jpeg', 'img/c-2-min.jpeg', 'img/c-3-min.jpeg'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
    ];
}

export let allGoods : GoodCard[] = getData();

export function mustHaveIndex(arr: string[] | undefined, ind: number) {
    if(!arr || !arr[ind])
        throw new Error('No such element');
    return arr[ind]
}

export function endingsForWords(num: number, str: string[]) {
    const cases = [2, 0, 1, 1, 1, 2];
    return str[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
}

export function filterStoreItems(item : GoodCard, payload: FilterDetails) {
    let itemPrice = item.price;
    if (item.salePrice)
        itemPrice = item.salePrice;
    if(itemPrice < payload.priceFrom || itemPrice > payload.priceTo){
        return false;
    }
    if(!payload.new && item.new){
        return false;
    }
    if(!payload.sale && item.sale){
        return false;
    }
    return true;
}

export function findMaxPrice(arr: GoodCard[]) : number {
    let maxPrice = 0;
    arr.forEach(item => {
        if(item.price > maxPrice)
            maxPrice = item.price;
    });
    return maxPrice;
}

export const useDebounce = <T>(value: T, delay = 200) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {clearTimeout(timer);};
    }, [value, delay]);
    return debouncedValue;
}

export function getReturnPolicy() {
    return "Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата! Политика возврата!"
}