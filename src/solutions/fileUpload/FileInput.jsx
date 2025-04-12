import React, { useState } from "react";

const FileInput = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles([...files, ...e.target.files]);
    };
    console.log(files);

    return (
        <>
            <div className="file-uploader">
                <div
                    // className={`dropzone ${isDragging ? "dragging" : ""}`}
                    className="dropzone"
                >
                    <p>Drag and Drop File here or</p>
                    <input
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
                    {files.map((file) => (
                        <Preview file={file} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FileInput;
