import './product.css';
import QuantityPicker from './quantityPicker';
import { useState , useContext} from 'react';
import StoreContext from "../context/storeContext";

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);
    let addProductToCart = useContext(StoreContext).addProductToCart;

    const onQuantityChange = (value) => {
        setQuantity(value);
    }

    const getTotal = () => {
        return ((props.data.price * quantity).toFixed(2));
    }

    const addProduct = () => {
        console.log("adding product ", props.data.title);
        let prodForCart = {...props.data, quantity};
        addProductToCart(prodForCart);
    } 

    return (
        <div className='product'>
            <img className='productImage' src={'/images/'+props.data.image} alt="Poruduct"></img>
            <h2>{props.data.title}</h2>
            <br/>
            <label>Price: ${(props.data.price).toFixed(2)}</label>
            <label>Total: {getTotal()}</label>
            <QuantityPicker onChange = {onQuantityChange}></QuantityPicker>
            <button onClick={addProduct} className='addButton'>Add</button>
        </div>
    );
}

export default Product;