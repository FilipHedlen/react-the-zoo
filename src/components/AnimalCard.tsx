import React from 'react';
import { IAnimal } from '../models/IAnimal';
import { Link } from 'react-router-dom';
import errorImg from '../assets/errorImg.png';

interface AnimalCardProps {
  animal: IAnimal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div
      style={{
        border: '0.5rem solid black',
        margin: '1rem',
        padding: '1rem',
        maxWidth: '600px',
      }}
    >
      <h2>{animal.name}</h2>
      <h4>{animal.latinName}</h4>
      <img
        src={animal.imageUrl}
        style={{ width: '100%', height: 'auto' }}
        alt={animal.name}
        onError={(e) => {
          e.currentTarget.src = errorImg;
        }}
      />
      <p>{animal.shortDescription}</p>
      <Link
        to={`/animal/${animal.id}`}
        style={{ color: 'red', fontSize: '1.2rem', fontWeight: '700' }}
      >
        Läs mer om mig!
      </Link>
    </div>
  );
};

export default AnimalCard;