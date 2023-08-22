import { useState, useEffect } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';
import { fetchAnimals } from '../services/fetchAnimals';
import { Link } from 'react-router-dom'; 
import errorImg from '../assets/errorImg.png';

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
            style={{ width: '500px', height: 'auto' }} 
            alt={animal.name}
            onError={(e) => {
              e.currentTarget.src = errorImg; 
            }}
            />
            <p>{animal.shortDescription}</p>
            <Link to={`/animal/${animal.id}`}>Läs mer!</Link>
          </div>
        ))}
      </div>
  );
}

export default App;