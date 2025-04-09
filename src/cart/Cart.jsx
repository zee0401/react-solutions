import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import CartTile from "../components/cart-tile";
import "./styles.css";
import CartTile from "./components/CartTile";

export default function Cart() {
    const { cart } = useSelector((state) => state);

    console.log(cart, "cart items");

    return (
        <div className="cart-container">
            {cart && cart.length ? (
                <>
                    <div className="cart-content">
                        <div className="cart-items">
                            {cart.map((cartItem, index) => (
                                <CartTile key={index} cartItem={cartItem} />
                            ))}
                        </div>
                    </div>
                    <div className="cart-summary">
                        <div className="summary-box">
                            <h1>Your Cart Summary</h1>
                            <p>
                                <span>Total Item</span>
                                <span>: {cart.length}</span>
                            </p>
                            <p>
                                <span>Total Amount</span>
                                <span>: </span>
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="empty-cart">
                    <h1>Your cart is empty</h1>
                    <Link to="/">
                        <button className="shop-now">SHOP NOW</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
