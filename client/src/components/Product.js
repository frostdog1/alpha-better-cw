import "./Product.css";
import { Link } from "react-router-dom";

// must extract all the values so it can be accessed by the HomeScreen.js file
const Product = ({ imageUrl, description, price, name, productId }) => {
    // set all the values with the data from data/products.js
    return (
        <div className="product">
        
            <img src={imageUrl} alt={name} />

            <div className="product__info">
                {/* provide the name of the product */}
                <p className="info__name">{name}</p>
                {/* provide a description, if greater than 100 characters it gets cut off, will be fully visible in ProductScreen.js */}
                <p className="info__description">{description.substring(0, 100)}...</p>
                {/* provide the price in GBP */}
                <p className="info__price">£{price}</p>

                {/* link will turn the product item into a button which will add a product ID */}
                <Link to={`/product/${productId}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    );
};

export default Product;
