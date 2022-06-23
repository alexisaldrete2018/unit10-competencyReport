import "./navbar.css";
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import StoreContext from "../context/storeContext";


function Navbar(){

    let cart = useContext(StoreContext).cart;

    let getNumItems = () => {
        let total = 0;
        for (let index = 0; index < cart.length; index++) {
            const product = cart[index];
            total += product.quantity
        }

        return total;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
             <div className="container-fluid">
                <Link className="navbar-brand" to="/">Organika</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todo">Shopping List</Link>
                        </li>
                        
                    </ul>
                    
                    <form className="d-flex">
                        <div className="nav-item">
                            <Link className="btn btn-outline-light" to="/cart">
                                {getNumItems()} View Cart
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;