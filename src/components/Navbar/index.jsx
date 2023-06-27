import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = ( {title} ) => {
    return (
        <nav>
            <h2><Link to="/">{title}</Link></h2>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/tasks"}>Tasks</Link></li>
                <li><Link to={"/grades"}>Grades</Link></li>
                <li><Link to={"/user"}>User</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;