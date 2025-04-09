import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <nav className="navbar">
                <Link to={"/"} className="logo-link">
                    <div className="logo">
                        <h1>REACT REDUX SHOPPING CART</h1>
                    </div>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
