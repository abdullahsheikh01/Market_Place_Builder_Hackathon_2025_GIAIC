import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export interface cartType{
    cartItems: CartItem[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}
export interface CartItem{
        id:string|undefined,
        title:string|undefined,
        price:number|undefined,
        quantity?:number|undefined,
        image:{
            _type: string;
            asset: {
              _ref: string;
            },
    }|undefined,
}
const initialState : cartType= {
    cartItems:typeof window!=="undefined"?(localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems") as string):[]):[],
    cartTotalQuantity:0,
    cartTotalAmount:0
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart(state, action: { payload: CartItem; type: string }) {
        const index = state.cartItems.findIndex(
          (item: CartItem) => item.id === action.payload.id
        );
        if (index >= 0 && state.cartItems[index].quantity) {
          state.cartItems[index].quantity += 1;
          state.cartTotalAmount += action.payload.price ? action.payload.price : 0;
          toast.info(`${state.cartItems[index].title}'s quantity increased`);
        } else {
          state.cartItems.push(action.payload);
          state.cartTotalAmount += action.payload.price ? action.payload.price : 0;
          toast.success(`${action.payload.title} added to the cart`);
        }
  
        // Save to localStorage only in the browser
        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
      },
  
      removeItem(state, action: { payload: CartItem; type: string }) {
        const updatedCart: CartItem[] = state.cartItems.filter(
          (item: CartItem) => {
            return item.id !== action.payload.id;
          }
        );
  
        state.cartItems = updatedCart;
        toast.error(`${action.payload.title} has been deleted from Cart`);
  
        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
      },
  
      decreaseItem(state, action: { payload: CartItem; type: string }) {
        const index = state.cartItems.findIndex(
          (item: CartItem) => item.id === action.payload.id
        );
        if (index >= 0 && state.cartItems[index].quantity) {
          state.cartItems[index].quantity -= 1;
          state.cartTotalAmount -= action.payload.price
            ? action.payload.price
            : 0;
          toast.info(`${state.cartItems[index].title}'s quantity decreased`);
        }
      },
  
      maintainTotal(state) {
        if (state.cartItems.length === 0) {
          state.cartTotalAmount = 0;
        }
      },
    },
  });
  

export const {addToCart} = cartSlice.actions;
export const {removeItem} = cartSlice.actions;
export const {decreaseItem} = cartSlice.actions;
export const {maintainTotal} = cartSlice.actions;
export default cartSlice.reducer;