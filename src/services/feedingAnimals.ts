import { IAnimal } from '../models/IAnimal';
import { Dispatch, SetStateAction } from 'react';

export const feedAnimal = (
  animal: IAnimal,
  setAnimal: Dispatch<SetStateAction<IAnimal | null>>
): void => {
  const updatedAnimal = {
    ...animal,
    isFed: true,
    feedingTime: new Date().toISOString(),
  };

  setAnimal(updatedAnimal);
  localStorage.setItem(`animal_${animal.id}`, JSON.stringify(updatedAnimal));
};