import "./productInCart.css";
import {useContext} from "react";
import StoreContext from "../context/storeContext";

const ProductInCart = (props) => {

    const removeProductFromCart = useContext(StoreContext).removeProductFromCart;

    const getTotal = () => {
        const total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }

    const deleteProduct = () => {
        removeProductFromCart(props.data._id);
    };

    return (
        <div className="product-cart">
            <img className="productImg" src={"/images/" + props.data.image} alt="product"></img>
            
            <div className="description">
                <h4>{props.data.title}</h4>
                <p>{props.data.category}</p>
            </div>

            <label>${props.data.price}</label>
            <label>{props.data.quantity}</label>
            <label>${getTotal()}</label>

            <button onClick={deleteProduct} className="btn btn-sm btn-danger">Remove</button>
        </div>
    );
};

export default ProductInCart;