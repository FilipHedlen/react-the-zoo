import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import errorImg from '../assets/errorImg.png';
import { feedAnimal } from '../services/feedingAnimals';

function AnimalPage() {
  const { id } = useParams<{ id?: string }>();
  const [animal, setAnimal] = useState<IAnimal | null>(null);

  useEffect(() => {
    const fetchAnimalData = async () => {
      if (id) {
        const animalsData = JSON.parse(localStorage.getItem('animalList') || '[]');
        const specificAnimal = animalsData.find((animal: IAnimal) => animal.id === parseInt(id, 10));
        if (specificAnimal) {
          setAnimal(specificAnimal);
  
          const storedAnimal = localStorage.getItem(`animal_${specificAnimal.id}`);
          if (storedAnimal) {
            setAnimal(JSON.parse(storedAnimal));
          }
        }
      }
    };
  
    fetchAnimalData();
  }, [id]);

  const handleFeedAnimal = () => {
    if (animal) {
      feedAnimal(animal, setAnimal);
    }
  };

  return (
    <div
      style={{
        margin: '1rem',
        padding: '1rem',
        maxWidth: '600px',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'red',
          fontSize: '1.2rem',
          fontWeight: '700',
          marginBottom: '1rem',
          display: 'block',
        }}
      >
        Gå tillbaka
      </Link>
      {animal && (
        <div>
          <h2>{animal.name}</h2>
          <h4>{animal.latinName}</h4>
          <img
            src={animal.imageUrl}
            alt={animal.name}
            style={{ width: '100%', height: 'auto' }}
            onError={e => {
              e.currentTarget.src = errorImg;
            }}
          />
          <p>{animal.longDescription}</p>
          <button
            onClick={handleFeedAnimal}
            disabled={animal.isFed}
            style={{
              fontSize: '1rem',
              padding: '0.5rem 1rem',
              border: '0.2rem solid black',
            }}
          >
            {animal.isFed ? 'Matad' : 'Mata djur'}
          </button>
          {animal.isFed && (
            <p>
              Senast matad: {new Date(animal.feedingTime).toLocaleString()}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default AnimalPage;