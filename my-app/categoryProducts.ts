export interface categoryProduct{
    imgUrl:string,
    title:string,
    products:string,
    id:number
};

export const categoryProducts : categoryProduct[] = [
    {
        imgUrl:"/wingChair.svg",
        title : "Wing Chair",
        products:"3,584",
        id:1
    },
    {
        imgUrl:"/woodenChair.svg",
        title : "Wooden Chair",
        products:"157",
        id:2
    },
    {
        imgUrl:"/deskChair.svg",
        title : "Desk Chair",
        products:"154",
        id:1
    }
]