import React from "react";

const FileInput = () => {
    return (
        <>
            <div className="file-input-box">
                <label htmlFor="upload"></label>
                <input id="upload" type="file" multiple />
            </div>
        </>
    );
};

export default FileInput;
