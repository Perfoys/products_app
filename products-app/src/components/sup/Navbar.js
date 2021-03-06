import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="App-navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/add-product">Add Product</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;