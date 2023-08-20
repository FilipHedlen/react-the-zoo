import { useState, useEffect } from 'react';
import './App.css';
import { IAnimal } from './models/IAnimal';
import { fetchAnimals } from './services/fetchAnimalService';
import { Link, Router, Route, Routes } from 'react-router-dom'; 

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (animals.length === 0) {
        const animalsData = await fetchAnimals();
        setAnimals(animalsData);
      }
    }
    getData();
  }, [animals]);

  return (
      <div>
        {animals.map(animal => (
          <div key={animal.id}>
            <h2>{animal.name}</h2>
            <h4>{animal.latinName}</h4>
            <img 
            src={animal.imageUrl} 
            style={{ width: '300px', height: '300px' }} 
            alt={animal.name} />
            <p>{animal.shortDescription}</p>
            <Link to={`/animal/${animal.id}`}>Läs mer!</Link>
          </div>
        ))}
        <Routes>
          <Route
            path="/animal/:id"/>
        </Routes>
      </div>
  );
}

export default App;