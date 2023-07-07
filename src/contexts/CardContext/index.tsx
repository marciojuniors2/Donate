"use client"
import React, { useState, createContext, ReactNode } from 'react';

interface ItemCard {
  img: string;
  title: string;
  price: number;
}

interface CardContextProps {
  card: ItemCard[];
  handleAddItemToCard: (item: ItemCard) => void;
  handleRemoveItemCard: (index: number) => void;
  clearCard: () => void;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CardContext = createContext<CardContextProps>({
  card: [],
  handleAddItemToCard: () => {},
  handleRemoveItemCard: () => {},
  clearCard: () => {},
});

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [card, setCard] = useState<ItemCard[]>([]);

  const handleAddItemToCard = (item: ItemCard) => {
    setCard(prevCard => [...prevCard, item]);
  };

  const handleRemoveItemCard = (index: number) => {
    setCard(prevCard => {
      const newCard = [...prevCard];
      newCard.splice(index, 1);
      return newCard;
    });
  };

  const clearCard = () => {
    setCard([]);
  };

  const cardContextValue: CardContextProps = {
    card,
    handleAddItemToCard,
    handleRemoveItemCard,
    clearCard,
  };

  return (
    <CardContext.Provider value={cardContextValue}>
      {children}
    </CardContext.Provider>
  );
};
