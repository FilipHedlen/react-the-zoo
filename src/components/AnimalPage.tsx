import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { fetchAnimals } from '../services/fetchAnimals';
import errorImg from '../assets/errorImg.png';
import { feedAnimal } from '../services/feedingAnimals';

function AnimalPage() {
  const { id } = useParams<{ id?: string }>();
  const [animal, setAnimal] = useState<IAnimal | null>(null);

  useEffect(() => {
    if (id) {
      const getAnimalById = async () => {
        const animalsData = await fetchAnimals();
        const specificAnimal = animalsData.find((animal) => animal.id === parseInt(id, 10));
        if (specificAnimal) {
          setAnimal(specificAnimal);
        }
      };

      getAnimalById();
    }
  }, [id]);

  if (!animal) {
    return <div>Information om valt djur saknas</div>;
  }

  return (
    <div>
      <Link to="/">Gå tillbaka</Link>
      <AnimalDetail animal={animal} setAnimal={setAnimal} feedAnimal={feedAnimal} />
    </div>
  );
}

function AnimalDetail({ animal, setAnimal, feedAnimal }: { animal: IAnimal, setAnimal: React.Dispatch<React.SetStateAction<IAnimal | null>>, feedAnimal: (animal: IAnimal, setAnimal: React.Dispatch<React.SetStateAction<IAnimal | null>>) => void }) {
  const handleFeedAnimal = () => {
    feedAnimal(animal, setAnimal);
  };

  useEffect(() => {
    const storedAnimal = localStorage.getItem(`animal_${animal.id}`);
    if (storedAnimal) {
      setAnimal(JSON.parse(storedAnimal));
    }
  }, [animal.id, setAnimal]);

  return (
    <div>
      <h2>{animal.name}</h2>
      <h4>{animal.latinName}</h4>
      <img src={animal.imageUrl} 
      alt={animal.name} 
      style={{ width: '500px', height: 'auto' }}
      onError={(e) => {
        e.currentTarget.src = errorImg; 
      }}
       />
      <p>{animal.longDescription}</p>
      <button onClick={handleFeedAnimal} disabled={animal.isFed}>
        {animal.isFed ? 'Matad' : 'Mata djur'}
      </button>
    </div>
  );
}

export default AnimalPage;