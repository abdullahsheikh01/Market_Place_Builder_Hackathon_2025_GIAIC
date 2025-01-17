interface cartProduct{
    imgUrl: string ,
    title:string,
    price:number,
};
export const cart : cartProduct[] = [
    {
        title:"Library Stool Chair",
        imgUrl:"/product3.svg",
        price:99
    },
    {
        imgUrl:"/wingChair.svg",
        title : "Wing Chair",
        price:99
    }
]