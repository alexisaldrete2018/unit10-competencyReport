import { createContext } from "react";

// Context: Describe the global data
// will describe the data structure
// promise
// it will not hold any implementation

let StoreContext = createContext({
    cart: [],

    addProductToCart: () => {},
    removeProductFromCart: () => {},
});

export default StoreContext;