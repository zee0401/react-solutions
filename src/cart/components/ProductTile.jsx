import { useDispatch, useSelector } from "react-redux";
import "./ProductTile.css";
import { addToCart, decreaseQuantity } from "../cartSlice/cartSlice";

export default function ProductTile({ product }) {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

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
                        <div className="quantity-controls">
                            <button
                                onClick={() =>
                                    dispatch(decreaseQuantity(product.id))
                                }
                            >
                                -
                            </button>
                            <span>{cartItem.quantity}</span>
                            <button
                                onClick={() => dispatch(addToCart(product))}
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
