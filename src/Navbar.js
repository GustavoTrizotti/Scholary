import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Scholary</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/register">Student</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;