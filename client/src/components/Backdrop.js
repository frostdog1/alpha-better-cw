import React from 'react'

import './Backdrop.css';

// destructure the show prop & the click prop passed in from App.js
const Backdrop = ({ show, click }) => {
    // only reveal the backdrop when the show prop is true
    return show && <div className="backdrop" onClick={click}></div>
    
}

export default Backdrop
