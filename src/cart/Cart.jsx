import React, { useEffect } from "react";

const Cart = () => {
    async function getItems() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
    }
    useEffect(() => {}, []);
    return <div>Cart</div>;
};

export default Cart;
