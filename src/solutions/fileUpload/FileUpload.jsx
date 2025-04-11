import React from "react";
import FileInput from "./FileInput";
import "./styles.css";

const fileUpload = () => {
    return (
        <>
            <div className="input-container">
                <FileInput />
            </div>
        </>
    );
};

export default fileUpload;
