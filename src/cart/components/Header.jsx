import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Header() {
    const { cart } = useSelector((state) => state);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

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
                        <Link to={"/cart"}>Cart: {cart.length} </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
