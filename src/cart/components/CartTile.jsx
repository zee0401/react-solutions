/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import "./CartTile.css";
import { removeFromCart } from "../cartSlice/cartSlice";

export default function CartTile({ cartItem }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(cartItem.id));
    };

    return (
        <div className="cart-tile">
            <div className="cart-tile-left">
                <img
                    src={cartItem?.image}
                    className="cart-image"
                    alt={cartItem?.title}
                />
                <div className="cart-details">
                    <h1>{cartItem?.title}</h1>
                    <p>${cartItem?.price}</p>
                    <p className="quantity">
                        Item Quantity:<span> 2</span>
                    </p>
                </div>
            </div>
            <div className="cart-actions">
                <button className="remove-btn" onClick={handleRemove}>
                    Remove From Cart
                </button>
            </div>
        </div>
    );
}
