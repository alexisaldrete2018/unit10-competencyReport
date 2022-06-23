import Product from "./product";
import DataService from "../services/dataService";
import { useState , useEffect} from "react";

const Catalog = () => {

    let [products, setProducts] = useState([]);
    
    const loadCatalogData = () => {
        let dataService = new DataService();
        let catalogData = dataService.getCatalog();
        setProducts(catalogData);
    }

    useEffect(() => {
        loadCatalogData();
    });

    return(
        <div className="catalog">
            <br></br>
            <h2>Checkout our fresh catalog</h2>
            <h3>We have {products.length} items</h3>
            {
                products.map((product) => (<Product key={product._id} data={product}></Product>))
            }
        </div>
    );

}

export default Catalog;
