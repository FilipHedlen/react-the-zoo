import { IAnimal } from '../models/IAnimal';
import { Dispatch, SetStateAction } from 'react';

export const feedAnimal = (
  animal: IAnimal,
  setAnimal: Dispatch<SetStateAction<IAnimal | null>>,
  animals: IAnimal[] | null,
  setAnimals: Dispatch<SetStateAction<IAnimal[] | null>>
): void => {
  const updatedAnimal = {
    ...animal,
    isFed: true,
    feedingTime: new Date().toISOString(),
  };

  const updatedAnimals = animals
    ? animals.map((a) => (a.id === updatedAnimal.id ? updatedAnimal : a))
    : [];

  setAnimals(updatedAnimals);
  localStorage.setItem(`animal_${animal.id}`, JSON.stringify(updatedAnimal));
  localStorage.setItem('animalList', JSON.stringify(updatedAnimals));
};