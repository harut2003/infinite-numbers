'use client';

import useMainContext from '@/hooks/useMainContext';
import PrimaryButton from '../button/PrimaryButton';
import { v4 as generateId } from 'uuid';

const generateRandomNumber = (dynamic: number) =>
  Math.floor(Math.random() * (1000 + dynamic) + 1);

export default function Header() {
  const { cards, setCards } = useMainContext();

  const handleAddCard = () => {
    const cardLength = cards.length;
    let randomNumber = generateRandomNumber(cardLength);

    const cardNumbers = cards.map(({ number }) => number);

    while (cardNumbers.includes(randomNumber)) {
      randomNumber = generateRandomNumber(cardLength);
    }

    const updatedCards = [
      ...cards,
      {
        id: generateId(),
        number: randomNumber,
      },
    ];

    setCards(updatedCards);

    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const handleSortCards = () => {
    setCards((cards) => {
      const copyCards = [...cards];
      copyCards.sort((a, b) => a.number - b.number);
      return copyCards;
    });
  };

  return (
    <header className='p-3 border-b-2 border-black'>
      <div className='container'>
        <div className='flex gap-3'>
          <PrimaryButton onClick={handleAddCard}>Add Card</PrimaryButton>
          <PrimaryButton onClick={handleSortCards}>Sort Cards</PrimaryButton>
        </div>
      </div>
    </header>
  );
}
