// ############# Side drawer for the application will slide out from left depending on the users actions #########

import React from 'react'
import './Navdrawer.css';

import {Link} from 'react-router-dom';

// destructure the show prop passed in from App.js
const Navdrawer = ({ show, click }) => {
    const navdrawerClass = ["navdrawer"]; // set the side drawer to array of styles

    // if show is true then push onto that array the new style
    if(show){
        navdrawerClass.push("show"); // show defined in Navdrawer.css
    }

    // now join these two items in the array with a space between them
    return <div className={navdrawerClass.join(" ")} >

        {/* populate the sidedrawer with naviagatale links */}
        <ul className="navdrawer__links" onClick={click}>
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                    Cart{" "}
                        <span className="navdrawer__cartbadge">0</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>

    </div>
    
}

export default Navdrawer;
