import React, { useEffect, useState } from "react";
import "./index.css";

export default function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(images[0]?.urls.regular);
console.log(images)
  useEffect(() => {
    setCurrentSlide(images[0]?.urls.regular); // Reset currentSlide when images change
  }, [images]);

  function handleThumbnailStyles(index) {
    const allThumbnails = document.querySelectorAll(".thumbnails label");
    allThumbnails.forEach((thumbnail, idx) => {
      if (idx === index) {
        thumbnail.classList.add("checked");
      } else {
        thumbnail.classList.remove("checked");
      }
    });
  }
  
  function handlePrevious() {
    const currentIndex = images.findIndex(
      (image) => image.urls.regular === currentSlide
    );
    const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentSlide(images[previousIndex].urls.regular);
    handleThumbnailStyles(previousIndex);
  }
  
  function handleNext() {
    const currentIndex = images.findIndex(
      (image) => image.urls.regular === currentSlide
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentSlide(images[nextIndex].urls.regular);
    handleThumbnailStyles(nextIndex);
  }
  
  const handleThumbnailClick = (url, event) => {
    setCurrentSlide(url);
    const targetThumbnail = event.target;
    //console.log(targetThumbnail.parentNode.children)
    const index = Array.from(targetThumbnail.parentNode.children).indexOf(targetThumbnail);
    handleThumbnailStyles(index);
  };  

  return (
    <div
    className="virtualBody"
    style={{
      backgroundImage: `url(${
        images.find((image) => image.urls.regular === currentSlide)?.urls.full
      })`,
    }}
  >
      {images?.map((image, index) => (
        <h3
          className={`description ${
            currentSlide === image.urls.regular ? "active" : ""
          }`}
          key={index}
        >
          {currentSlide === image.urls.regular && image.description}
        </h3>
      ))}

      <div
        className="content"
        style={{
          backgroundImage: currentSlide ? `url(${currentSlide})` : "none",
        }}
      >
        <div className="controls">
          <label onClick={handlePrevious} className="left" htmlFor=""></label>
          <label onClick={handleNext} className="right" htmlFor=""></label>
        </div>
        <div className="thumbnails">
          {images?.map((image, index) => (
            <label
              className={index === 0 ? "checked" : ""}
              key={index}
              htmlFor={index}
              style={{ backgroundImage: `url(${image?.urls?.thumb})` }}
              onClick={(event) =>
                handleThumbnailClick(image?.urls?.regular, event)
              }
            ></label>
          ))}
        </div>
      </div>
    </div>
  );
}
