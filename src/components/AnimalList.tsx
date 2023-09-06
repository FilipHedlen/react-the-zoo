import React from 'react';
import { IAnimal } from '../models/IAnimal';
import AnimalCard from './AnimalCard';

interface AnimalListProps {
  animals: IAnimal[];
}

const AnimalList: React.FC<AnimalListProps> = ({ animals }) => {
  return (
    <div>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalList;