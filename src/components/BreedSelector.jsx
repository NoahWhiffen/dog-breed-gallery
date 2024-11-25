import React, {useState, useEffect} from 'react';

function BreedSelector({setBreed, setNumImages, breed, numImages}){
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((data) => setBreeds(Object.keys(data.message)))
        .catch((error) => console.error('Error fetching breeds', error));
    }, []);

    return (
        <>
        <form>
            <div>
                <label>
                    Select a Breed: 
                </label>
                <select 
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    required
                >
                <option value="">--Choose a breed--</option>
                    {breeds.map((b, index) => (
                        <option key={index} value={b}>
                            {b}
                        </option>
                    ))};
                </select>
            </div>

            <div>
                <label>Number of Images:</label>
                <input
                type="number"
                value={numImages}
                onChange={(e) => setNumImages(parseInt(e.target.value))}
                min="1"
                max="100"
                required
                />
            </div>
        </form>
        </>
    )
}
  

export default BreedSelector;