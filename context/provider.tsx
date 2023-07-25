'use client';

import { useState } from 'react';
import { MainContext } from '.';

interface IProps {
  children: React.ReactNode;
}

export default function MainContextProvider({ children }: IProps) {
  const [cards, setCards] = useState([]);
  return (
    <MainContext.Provider
      value={{
        cards,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
