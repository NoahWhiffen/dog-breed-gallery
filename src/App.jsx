//          QAP3
// Title: Dog Image Generator
// Author: Noah Whiffen - SD12
// Dates:  November 22nd, 2024 - 

import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (breed && numImages) {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`)
        .then((response) => response.json())
        .then((data) => setImages(data.message))
        .catch((error) => console.error('Error fetching dog images', error));
    }
  }, [breed, numImages]);

  return (
    <div className='gallery-container'>
      <h1>Dog Image Gallery</h1>
      <BreedSelector 
        setBreed={setBreed} 
        setNumImages={setNumImages} 
        breed={breed} 
        numImages={numImages} 
      />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;