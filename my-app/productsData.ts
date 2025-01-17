import { categoryProducts } from "./categoryProducts";
export interface Products{
    imgUrl:string,
    label?:"New"|"Sales",
    title:string,
    price:string,
    oldPrice?:string,
    id:number,
}
export interface ProductsImg{
    imgUrl:string,
    id:number,
    title:string
}
export const ProductSection1:Products[]=[
    {
        title:"Library Stool Chair",
        imgUrl:"/product1.svg",
        label:"New",
        price:"$20",
        id:1,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product2.svg",
        label:"Sales",
        price:"$20",
        id:2,
        oldPrice:"$30",
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product3.svg",
        price:"$20",
        id:3,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product4.svg",
        price:"$20",
        id:4,
    },
];

export const ProductSection2:Products[]=[
    {
        title:"Library Stool Chair",
        imgUrl:categoryProducts[0].imgUrl,
        label:"New",
        price:"$20",
        id:1,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/gray_chair.svg",
        label:"Sales",
        price:"$20",
        id:2,
        oldPrice:"$30",
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/chairWithPillow.svg",
        price:"$20",
        id:3,
    },
    {
        title:"Library Stool Chair",
        imgUrl:ProductSection1[0].imgUrl,
        price:"$20",
        id:4,
    },
];
export const productSection1_2 :Products[] = [
    {
        title:"Library Stool Chair",
        imgUrl:"/product1.svg",
        label:"New",
        price:"$20",
        id:1,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product2.svg",
        label:"Sales",
        price:"$20",
        id:2,
        oldPrice:"$30",
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product3.svg",
        price:"$20",
        id:3,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product4.svg",
        price:"$20",
        id:4,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product1.svg",
        label:"New",
        price:"$20",
        id:5,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product2.svg",
        label:"Sales",
        price:"$20",
        id:6,
        oldPrice:"$30",
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product3.svg",
        price:"$20",
        id:7,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product4.svg",
        price:"$20",
        id:8,
    },
];

export const ProductSection2b:Products[]=[
    {
        title:"Library Stool Chair",
        imgUrl:categoryProducts[0].imgUrl,
        label:"New",
        price:"$20",
        id:1,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/gray_chair.svg",
        label:"Sales",
        price:"$20",
        id:2,
        oldPrice:"$30",
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/chairWithPillow.svg",
        price:"$20",
        id:3,
    },
    {
        title:"Library Stool Chair",
        imgUrl:ProductSection1[0].imgUrl,
        price:"$20",
        id:4,
    },
]

export const ProductSection3 : Products[] = [
    ProductSection1[0],
    ProductSection1[1],
    ProductSection1[2],
    ProductSection1[3],
];

export const ProductSection4 : Products[] = [
    {
        title:categoryProducts[1].title,
        imgUrl:categoryProducts[1].imgUrl,
        id:1,
        price:"$20",
        label:"New",
    },
    ProductSection2[1],
    ProductSection2[2],
    {
        title:ProductSection3[0].title,
        imgUrl:ProductSection3[0].imgUrl,
        id:4,
        price:"$20"
    }
];

export const ProductSection5:Products[]=[
    {
        title:categoryProducts[0].title,
        imgUrl:categoryProducts[0].imgUrl,
        id:1,
        price:"$20",
        label:"New",
    },
    ProductSection1[1],
    ProductSection1[2],
    {
        title:categoryProducts[2].title,
        imgUrl:categoryProducts[2].imgUrl,
        id:4,
        price:"$20"
    }
];

export const ProductSection6 : ProductsImg[] = [
    {
        imgUrl:ProductSection4[0].imgUrl,
        id:1,
        title:ProductSection4[0].title
    },
    {
        imgUrl:ProductSection5[0].imgUrl,
        id:2,
        title:ProductSection5[0].title
    },
    {
        imgUrl:ProductSection5[1].imgUrl,
        id:3,
        title:ProductSection5[1].title
    },
    {
        imgUrl:ProductSection5[2].imgUrl,
        id:4,
        title:ProductSection5[2].title
    },
    {
        imgUrl:ProductSection5[3].imgUrl,
        id:5,
        title:ProductSection5[3].title
    },
];

export const ProductSection7: Products[] = [
    ProductSection4[2],
    ProductSection3[0],
    ProductSection5[3],
    ProductSection5[2],
    ProductSection5[0]
]