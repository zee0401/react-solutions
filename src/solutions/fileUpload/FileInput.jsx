/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Preview from "./Preview";

const FileInput = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles([...files, ...e.target.files]);
    };

    const onRemove = (name) => {
        const filterItem = files.filter((file) => file.name !== name);
        setFiles([...filterItem]);
    };

    return (
        <>
            <div className="file-uploader">
                <div
                    // className={`dropzone ${isDragging ? "dragging" : ""}`}
                    className="dropzone"
                >
                    <p>Drag and Drop File here or</p>
                    <input
                        onMouseEnter={}
                        onChange={handleFileChange}
                        className="hidden-input"
                        multiple
                        type="file"
                        id="file-input"
                    />
                    <label className="browse-btn" htmlFor="file-input">
                        Browser Files
                    </label>
                </div>

                <div>
                    {files.map((file, index) => (
                        <Preview
                            key={index}
                            fileDetail={file}
                            onRemove={onRemove}
                        />
                        // <div key={index}> {file.name}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FileInput;
