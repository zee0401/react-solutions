/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "./styles.css";
import ProductTile from "./components/ProductTile";

const CartHome = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    async function getItems() {
        setLoading(true);
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
            console.log(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        getItems();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <h1>Loading....</h1>
                </div>
            ) : (
                <div className="product-grid">
                    {products && products.length
                        ? products.map((product) => (
                              <ProductTile product={product} />
                          ))
                        : null}
                </div>
            )}
        </div>
    );
};

export default CartHome;
