import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Navbar =() =>{
    return(
        <nav className="black">
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo"> DONEit</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">About</Link></li>
            <li><NavLink to="badges.html">Components</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
        </div>
    </nav>
    )
}
export default Navbar;