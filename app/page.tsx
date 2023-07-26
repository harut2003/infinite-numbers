'use client';

import PrimaryCard from '@/components/card/PrimaryCard';
import useMainContext from '@/hooks/useMainContext';
import { useCallback } from 'react';

export default function Home() {
  const { cards, setCards } = useMainContext();

  const handleDeleteCard = useCallback(
    (id: string) => {
      const findedIndex = cards.findIndex((item) => item.id === id);
      const copyCards = [...cards];
      copyCards.splice(findedIndex, 1);
      setCards(copyCards);
      localStorage.setItem('cards', JSON.stringify(copyCards));
    },
    [cards, setCards]
  );

  return (
    <main className='flex flex-col items-center justify-between p-3 overflow-auto h-[calc(100vh-148px)]'>
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          {cards.map(({ id, number }) => {
            return (
              <PrimaryCard
                key={id}
                id={id}
                number={number}
                handleDeleteCard={handleDeleteCard}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
