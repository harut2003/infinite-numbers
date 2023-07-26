'use client';

import { useEffect, useState } from 'react';
import { MainContext } from '.';

interface IProps {
  children: React.ReactNode;
}

export default function MainContextProvider({ children }: IProps) {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    const storageCards = localStorage.getItem('cards');
    if (storageCards) {
      setCards(JSON.parse(storageCards));
    }
  }, []);

  return (
    <MainContext.Provider
      value={{
        cards,
        setCards,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
