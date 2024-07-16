interface GoodCard {
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

//api simulation
function getData() : GoodCard[] {
    return [
        {
            title: 'Ветровка Женская',
            price: 6500,
            salePrice: 4875,
            new: true,
            sale: true,
            saleNum: 25,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg']
        },
        {
            title: 'Футболка Мужская',
            price: 5000,
            new: true,
            sale: true,
            colors: ['#FA6851', '#B7CA32', '#EBE8EF', '#BE0223'],
            img:['img/f-pink-min.jpg', 'img/f-green.jpg', 'img/f-white-min.jpg', 'img/f-red-min.jpg']
        },
        {
            title: 'Деловой Костюм Женский',
            price: 11800,
            new: true,
            colors: ['#CFCFCF', '#626262', '#292526'],
            img:['img/c-1-min.jpeg', 'img/c-2-min.jpeg', 'img/c-3-min.jpeg']
        },
        {
            title: 'Деловой Костюм Женский',
            price: 11800,
            new: true,
            colors: ['#CFCFCF', '#626262', '#292526'],
            img:['img/c-1-min.jpeg', 'img/c-2-min.jpeg', 'img/c-3-min.jpeg']
        },
        {
            title: 'Футболка Мужская',
            price: 5000,
            new: true,
            sale: true,
            colors: ['#FA6851', '#B7CA32', '#EBE8EF', '#BE0223'],
            img:['img/f-pink-min.jpg', 'img/f-green.jpg', 'img/f-white-min.jpg', 'img/f-red-min.jpg'],
            notAvailable: true
        },
        {
            title: 'Ветровка Женская',
            price: 6500,
            salePrice: 4875,
            new: true,
            sale: true,
            saleNum: 25,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg']
        },
        {
            title: 'Ветровка Женская',
            price: 6500,
            salePrice: 4875,
            new: true,
            sale: true,
            saleNum: 25,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg']
        },
        {
            title: 'Ветровка Женская',
            price: 6500,
            salePrice: 4875,
            new: true,
            sale: true,
            saleNum: 25,
            colors: ['#1E253F', '#C0BABC'],
            img:['img/v-blue-min.jpg', 'img/v-white-min.jpeg']
        },
        {
            title: 'Деловой Костюм Женский',
            price: 11800,
            new: true,
            colors: ['#CFCFCF', '#626262', '#292526'],
            img:['img/c-1-min.jpeg', 'img/c-2-min.jpeg', 'img/c-3-min.jpeg']
        },
    ];
}

export let allGoods : GoodCard[] = getData();