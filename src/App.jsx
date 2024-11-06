import { useState, useEffect } from 'react'

import './App.css'
import StarShipCard from './components/StarShipCard'
import { getAllStarships } from './services/sw-api.mjs'


function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    async function fetchStarships() {
      try {
        const starshipData = await getAllStarships(); 
        setStarships(starshipData);
      } catch (error) {
        console.error(error)
      }
    }
    fetchStarships();
  }, []);
  return (
    <div className='App'>
      <h1>Starships</h1>
      <div className='cards'>
        {starships.map((starship) => (
          <StarShipCard starship={starship} key={starship.name}/>
        ))}
      </div>
    </div>
  );
}

export default App
