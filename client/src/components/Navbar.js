import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension

// destructure the click event defined in App.js
const Navbar = ({ click }) => {

    return (
        <nav className="navbar">
        <div className="navbar__logo">
            <h2>Alpha-Better Shopping System</h2>
        </div>

        <ul className="navbar__links">
            <li>
            <Link to="/cart" className="cart__link">
                {/* add an icon from font awesome */}
                <i className="fas fa-shopping-cart"></i>
                <span>
                Cart <span className="cartlogo__badge">0</span> {/* this will give the number of carts */}
                </span>
            </Link>
            </li>
            <li>
            <Link to="/">Shop</Link>
            </li>
        </ul>

        {/* when hamburger icon is clicked the sidedrawer will open up */}
        <div className="hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </nav>
    );
};

export default Navbar;