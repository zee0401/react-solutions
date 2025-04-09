/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    incrementQuantity,
    decrementQuantity,
} from "../cartSlice/cartSlice";
import "./ProductTile.css";

export default function ProductTile({ product }) {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    const cartItem = cart.find((item) => item.id === product.id);

    return (
        <div className="product-tile">
            <div className="product-card">
                <div className="product-image">
                    <img src={product?.image} alt={product?.title} />
                </div>
                <div className="product-title">
                    <h1 title={product?.title}>{product?.title}</h1>
                </div>
                <div className="product-action">
                    {cartItem ? (
                        <div className="qty-controls">
                            <button
                                onClick={() =>
                                    dispatch(decrementQuantity(product.id))
                                }
                            >
                                -
                            </button>
                            <span>{cartItem.quantity}</span>
                            <button
                                onClick={() =>
                                    dispatch(incrementQuantity(product.id))
                                }
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
