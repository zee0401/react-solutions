import React from "react";
import "./style.css";

const Grid = () => {
    return (
        <div className="container">
            <div className="grid-container">
                <div className="box">grid1</div>
                <div className="box">grid2</div>
                <div className="box">grid3</div>
                <div className="box">grid4</div>
                <div className="box">grid5</div>
                <div className="box">grid6</div>
                <div className="box">grid</div>
                <div className="box">grid</div>
                <div className="box">grid</div>
            </div>
            <span>Player X turn</span>
            <div>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Grid;
