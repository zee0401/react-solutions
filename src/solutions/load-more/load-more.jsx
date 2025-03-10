import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMore = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`
            );
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setData((prev) => [...prev, ...result.products]);
            }

            console.log(data, "data");
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [count]);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>something wnt wrong</div>;
    }

    const hadnleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <div className="img-container">
                {data && data.length
                    ? data.map((product) => {
                          return (
                              <div className="img-box" key={product?.id}>
                                  <h3>{product?.title}</h3>
                                  <img
                                      src={product?.thumbnail}
                                      alt={product?.title}
                                  />
                              </div>
                          );
                      })
                    : "No products available"}
            </div>
            <button className="load-more" onClick={hadnleClick}>
                load more
            </button>
        </>
    );
};

export default LoadMore;
