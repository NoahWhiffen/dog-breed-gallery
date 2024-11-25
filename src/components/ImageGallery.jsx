import React from 'react';


function ImageGallery({ images }) {
    return (
      <div className="gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt="dog" />
            </div>
          ))
        ) : (
          <p>No images to display. Please select a breed and number of images.</p>
        )}
      </div>
    );
  }
  
  export default ImageGallery;