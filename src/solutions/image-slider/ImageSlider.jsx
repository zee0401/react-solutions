import React, { useEffect, useState } from "react";
import "./style.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, page, limit }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        try {
            setLoading(true);
            const fetchImages = async () => {
                const response = await fetch(`${url}?limit=${limit}`);
                const data = await response.json();

                setImages(data);
                setLoading(false);
            };
            fetchImages();
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    if (loading) {
        return <div> Loading</div>;
    }

    if (error) {
        return <div>something went wrong</div>;
    }

    const handleLeft = () => {
        setCurrentImage(
            currentImage === 0 ? images.length - 1 : currentImage - 1
        );
    };

    const handleRight = () => {
        setCurrentImage(
            currentImage === images.length - 1 ? 0 : currentImage + 1
        );
    };

    const handleClick = (i) => {
        setCurrentImage(i);
    };

    return (
        <div className="container">
            <BsArrowLeftCircleFill
                className="arrow arrow-left"
                onClick={handleLeft}
            />

            {images && images.length
                ? images.map((image, i) => (
                      <img
                          src={image.download_url}
                          className={
                              currentImage === i
                                  ? "current-image"
                                  : "current-image hide-current-image"
                          }
                          key={image.id}
                          alt={image.download_url}
                      />
                  ))
                : null}

            <BsArrowRightCircleFill
                className="arrow arrow-right"
                onClick={handleRight}
            />

            <span className="circle-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={
                            currentImage === index
                                ? "current-indicator"
                                : "current-indicator inactive-indicator"
                        }
                        onClick={() => handleClick(index)}
                    ></button>
                ))}
            </span>
        </div>
    );
};

export default ImageSlider;
