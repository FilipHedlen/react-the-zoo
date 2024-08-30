import { useState, useEffect } from 'react';
import './App.css';
import { IAnimal } from './models/IAnimal';
import { fetchAnimals } from './services/fetchAnimals';
import AnimalList from './components/AnimalList';

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (animals.length === 0) {
        const animalsData = await fetchAnimals();
        setAnimals(animalsData);
        localStorage.setItem('animalList', JSON.stringify(animalsData));
      }
    };
    getData();
  }, [animals]);

  return (
    <div>
      <h1>Welcome to The Zoo</h1>
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;