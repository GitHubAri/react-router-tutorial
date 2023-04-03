
import React from "react";

import { Link } from 'react-router-dom';



function Navbar() {  
    return(
        <div className="navBarCss">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );

}


export default Navbar;


