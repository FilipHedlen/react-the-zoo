import React from 'react';
import { IAnimal } from '../models/IAnimal';

interface FeedButtonProps {
  animal: IAnimal;
  onFeed: () => void;
}

const FeedButton: React.FC<FeedButtonProps> = ({ animal, onFeed }) => {
  return (
    <button
      onClick={onFeed}
      disabled={animal.isFed}
      style={{
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        border: '0.2rem solid black',
      }}
    >
      {animal.isFed ? 'Matad' : 'Mata djur'}
    </button>
  );
};

export default FeedButton;