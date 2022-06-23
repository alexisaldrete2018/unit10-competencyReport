import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalStoreProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "admin", id: 42});

    const addProductToCart = (prod) => {
        console.log("Global add product", prod);
        let found = false;

        let cartCopy = [...cart];
        for (let index = 0; index < cartCopy.length; index++) {
            let product = cartCopy[index];

            if(product._id === prod._id){
                product.quantity += prod.quantity;
                found = true;
            }            
        }

        if(!found){
            cartCopy.push(prod);
        }
        setCart(cartCopy);
        
    }

    const removeProductFromCart = (_id) => {
        console.log("Global remove product");

        let cartCopy = [...cart];

        for (let index = 0; index < cartCopy.length; index++) {
        
            if(cartCopy[index]._id === _id){
                cartCopy.splice(index, 1);
            }
        }
        setCart(cartCopy);
    }

    return ( 
        <StoreContext.Provider 
        value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}
        >
            {props.children}
        </StoreContext.Provider>
    );
}

export default GlobalStoreProvider;