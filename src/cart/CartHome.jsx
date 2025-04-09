import React, { useEffect, useState } from "react";

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
    return <div>Cart</div>;
};

export default CartHome;
