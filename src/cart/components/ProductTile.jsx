/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./ProductTile.css";
import { addToCart } from "../cartSlice/cartSlice";

export default function ProductTile({ product }) {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addToCart(product));
    };

    const handleRemove = () => {};

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
                    {cart.some((item) => item.id === product?.id) ? (
                        <button onClick={handleRemove}>Remove from Cart</button>
                    ) : (
                        <button onClick={handleClick}>Add to Cart</button>
                    )}
                </div>
            </div>
        </div>
    );
}
