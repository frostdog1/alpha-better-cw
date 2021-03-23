import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

// import the product actions to allow for displaying the data
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
    
    const dispatch = useDispatch();

    // get products data as specified in reducers
    const getProducts = useSelector((state) => state.getProducts);

    // get products array, loading and errror
    // before rendering or mapping anything, loading and error should be checked to avoid errors/crashes
    const { products, loading, error } = getProducts;

    // any time this page loads make a dispatch to list all the products
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]); // dispatch must also be a dependency

    return (
        <div className="homescreen">

            <h2 className="homescreen__title">Latest Products</h2>

            <div className="homescreen__products">
                {/* check if loading has been completed yet */}
                {loading ? (
                    // display loading message to the user
                    <h2>Loading...</h2>
                ) : error ? (
                    // else display error to the user
                    <h2>{error}</h2>
                ) : (
                    // if no loading is required and there is no errors then
                    // map through the products array to display
                    products.map((product) => 
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />)
                    
                )}
            </div>
        </div>
    );
};

export default HomeScreen;
