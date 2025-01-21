"use client";
import { addToCart, CartItem, cartType, decreaseItem, maintainTotal} from "@/app/features/cartSlice";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {removeItem } from "@/app/features/cartSlice";
import { useEffect } from "react";
const Cart = () => {
    const cartt = useSelector((state: { cart: cartType }) => state.cart);
    const cart = cartt.cartItems;
    const dispatch = useDispatch();
        function removeCartItemm(param:CartItem){
        dispatch(
            removeItem({
                title:param.title,
                id:param.id,
                image:param.image,
                price:param.price,
                quantity:1
            })
        )
    }
    function increaseItem(param:CartItem){
        dispatch( addToCart(
            {
                title:param.title,
                id:param.id,
                image:param.image,
                price:param.price,
                quantity:1
            }))
        
    }
    function decreaseItemm(param:CartItem){
        if(param.quantity==1){}
        else{
            dispatch( decreaseItem(
                {
                    title:param.title,
                    id:param.id,
                    image:param.image,
                    price:param.price,
                    quantity:1
                }))
        }
        
    };
    const totalAmount = useSelector((state: { cart: cartType }) => state.cart.cartTotalAmount)
    useEffect(()=>{
        dispatch(maintainTotal())
    },[cart])
  return (
    <div>{
            cart.length==0?
            <div className="h-[50vh] flex justify-center items-center text-center flex-col">
                <h2 className="font-inter font-bold text-[40px]">You do not have any product in your cart</h2>
                <Link href="/pages/products">
                <button type="submit" className="h-14 w-[150.6px] bg-[#029FAE] rounded-[8px] font-inter 
                font-semibold text-base text-white ml-3 hover:bg-blue-300"
                >Browse Products</button>
                </Link>
            </div>
            :<div className="pl-[226.4px] pr-[232px] flex gap-[100px] 2xl:gap-[100px] xl:gap-[86px] lg:gap-[73px] md:gap-[52px] sm:gap-2 exsm:gap-[17px] 
            2xl:pl-[226.4px] xl:pl-[194px] 
               lg:pl-[165px] md:pl-[110px] sm:pl-[100px] exsm:pl-[38px] 2xl:pr-[232px] xl:pr-[200px] lg:pr-[169px] md:pr-[130px]
               sm:pr-[102px] exsm:pr-[39px] sm:flex-col exsm:flex-col">
            <div className="mt-[89px] mb-[84px] sm:mt-3 exsm:mt-3">
            <h4 
            className="font-inter font-bold text-[22px] text-[#111111]">
            Cart Items</h4>
            <div className="flex-col">
                {
                    cart.map(
                        (product,index)=>{
                            const image = product.image?urlFor(product.image).url():"/im.png";
                            return(
                                <div key={index} className="w-[770.4px] 2xl:w-[770.7px] xl:w-[662px] lg:w-[563px] md:w-[401px] sm:w-full exsm:w-[128px] 
                                border-b-[1px] border-b-[#757575] flex 
                                lg:flex-col gap-6
                                pb-8 relative mt-6">
                                    <Image src={image} height={150} width={150}
                                    alt={product.title?product.title:""}
                                    />
                                    <div>
                                        <div className="flex flex-col gap-6 lg:gap-2">
                                            <h6 className="font-inter text-base text-[#272343]"
                                            >{product.title}</h6>
                                            <div className="font-inter text-[15px] text-[#757575]">
                                                <p>
                                                    Ashen Slate/Cobalt Bliss</p>
                                                <div className="flex gap-16">
                                                    <div>Size L</div>
                                                    <div>Quantity {product.quantity}</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <Image src="/love.svg" height={24} width={24}
                                                alt="Love Icon"
                                                />
                                                <button>
                                                <Image src="/bin.svg" height={24} width={24}
                                                alt="Delete Icon" onClick={()=>{removeCartItemm(product)}}
                                                />
                                                </button>
                                                <button onClick={()=>{increaseItem(product);
                                                }} 
                                                    className="font-bold text-[30px]">
                                                    +
                                                </button>
                                                <button  className="font-bold text-[40px]"
                                                onClick={()=>{decreaseItemm(product);
                                                }}>
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                        <div className="absolute right-0 top-0">
                                            <p
                                            className="font-inter text-[15px] text-[#111111]"
                                            >MRP: ${product.price&&product.quantity?
                                                product.price*product.quantity:0
                                            }</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
        <div className="mt-[94px] sm:mt-1 exsm:mt-1 flex flex-col w-[280px]">
            <h4 className="font-inter font-medium text-[21px]">Summary</h4>
            <div className="mt-6">
                <div>
                    <div className="border-b-[1px] border-b-[#75757 pb-8">
                    <div className="flex  gap-[100px]">
                        <div className="font-inter text-[15px]">Sub Total</div>
                        <div className="font-inter text-[14px] font-medium text-[#111111]">{totalAmount}</div>
                    </div>
                    <div className="flex  gap-[100px]">
                        <div className="font-inter text-[15px]">Estimated Delivery & Handling</div>
                        <div className="font-inter text-[14px] font-medium text-[#111111]">Free</div>
                    </div>
                    </div>
                    <div className="border-b-[1px] border-b-[#75757 pb-8 mt-5">
                    <div className="flex  gap-[100px]">
                        <div className="font-inter text-[15px]">Total</div>
                        <div className="font-inter text-[14px] font-medium text-[#111111]">Free</div>
                    </div>
                    </div>
                </div>
            </div>
            <button className="mt-8 w-full bg-[#029FAE] h-12 rounded-[30px] font-inter font-medium text-white">
                Member Checkout
            </button>
        </div>
            </div>
            }
    </div>
  )
};
export default Cart;