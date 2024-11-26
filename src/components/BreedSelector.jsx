import React, { useState, useEffect } from 'react';

function BreedSelector({ setBreed, setNumImages, breed, numImages, fetchImages }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => setBreeds(Object.keys(data.message)))
      .catch((error) => console.error('Error fetching breeds', error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (breed && numImages) {
      fetchImages(breed, numImages);
    } else {
      console.log('Please select a breed and number of images');
    }
  };


  const handleBreedChange = (e) => {
    setBreed(e.target.value); 
  };

  const handleNumImagesChange = (e) => {
    setNumImages(parseInt(e.target.value)); 
  };

  return (
    <form className="breed-selector" onSubmit={handleFormSubmit}>
      <div>
        <label>Select a Breed: </label>
        <select value={breed} onChange={handleBreedChange} required>
          <option value="">--Choose a breed--</option>
          {breeds.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Number of Images:</label>
        <input
          type="number"
          value={numImages}
          onChange={handleNumImagesChange}
          min="1"
          max="100"
          required
        />
      </div>

      <button className="fetch-button" type="submit">
        Fetch Images
      </button>
    </form>
  );
}

export default BreedSelector;