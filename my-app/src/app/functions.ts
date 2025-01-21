import { categoryProduct } from "../../categoryProducts";

export function cartAdder(cart:categoryProduct[],obj:categoryProduct) {
    cart.push(obj);
}