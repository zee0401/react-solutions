/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../cartSlice/cartSlice";
import "./cartTile.css";

export default function CartTile({ cartItem }) {
    const dispatch = useDispatch();

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
                    <div className="quantity-control">
                        <button
                            onClick={() =>
                                dispatch(decrementQuantity(cartItem.id))
                            }
                        >
                            -
                        </button>
                        <span>{cartItem.quantity}</span>
                        <button
                            onClick={() =>
                                dispatch(incrementQuantity(cartItem.id))
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
