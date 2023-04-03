
import React from "react";

import { Link } from 'react-router-dom';



function Navbar() {  
    return(
        <div className="navBarCss">
        <Link to="/home">Home</Link><br>
        </br>
        <Link to="/about">About</Link><br></br>
        <Link to="/products">Products</Link>
    </div>
    );

}


export default Navbar;


