'use client';
import { Dispatch, SetStateAction, createContext } from 'react';

type ContextType = {
  cards: ICard[];
  setCards: Dispatch<SetStateAction<ICard[]>>;
};

const MainContext = createContext<ContextType>({
  cards: [],
  setCards: () => {},
});

export { MainContext };
