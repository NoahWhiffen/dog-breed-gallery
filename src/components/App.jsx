//          QAP3
// Title: Dog Image Generator
// Author: Noah Whiffen - SD12
// Dates:  November 22nd, 2024 - 

import BreedSelector from './BreedSelector';
import ImageGallery from './ImageGallery';
import './App.css';
import { useState } from 'react';

function App() {
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const fetchImages = (breed, numImages) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`)
      .then((response) => response.json())
      .then((data) => setImages(data.message))
      .catch((error) => console.error('Error fetching dog images', error));
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Dog Image Gallery</h1>
      </header>
      <BreedSelector
        setBreed={setBreed}
        setNumImages={setNumImages}
        breed={breed}
        numImages={numImages}
        fetchImages={fetchImages}
        />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;