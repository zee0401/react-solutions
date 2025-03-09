import { useState } from "react";
import "./style.css";
import { FaRegStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Star = ({ star = 10 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleMouseEnter = (i) => {
        setRating(i);
        console.log(i);
    };

    const handleMouseLeave = (i) => {
        setHover(i);
    };

    const handleClick = () => {
        setHover(rating);
    };

    return (
        <div>
            <h1>Star</h1>
            {[...Array(star)].map((_, i) => {
                i = i + 1;
                return (
                    <FaRegStar
                        onMouseMove={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => handleClick(i)}
                        size={30}
                        key={i}
                        className={
                            i <= (hover || rating) ? "filled" : "inactive"
                        }
                    />
                );
            })}
        </div>
    );
};

export default Star;
