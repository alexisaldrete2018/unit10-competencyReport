import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {

    let cart = useContext(StoreContext).cart;
    
    let getNumItems = () => {
        let total = 0;
        for (let index = 0; index < cart.length; index++) {
            const product = cart[index];
            total += product.quantity
        }

        return total;
    }

    let getTotalCart = () => {
        let totalInCart = 0
        for (let index = 0; index < cart.length; index++) {
            const product = cart[index];
            let subtotal = (product.price * product.quantity);
            totalInCart += subtotal;
        }
        return totalInCart.toFixed(2);
    }

    return(
        <div className="cart-page">
            <h1>You have {getNumItems()} items in your cart</h1>
            <br/>
            <div className="parent">
                <div className="cart-list">
                    {cart.map((prod) => (
                        <ProductInCart key={prod._id} data={prod}></ProductInCart>
                    ))}
                </div>

                <br/>
                
                <div className="total-panel">
                    <h3>Your total:</h3>
                    <h2>${getTotalCart()}</h2>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;