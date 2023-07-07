import { CardContext } from '@/contexts/CardContext';
import React, { useContext } from 'react';
import Item from './Item';


function CardItems() {
  const { card } = useContext(CardContext)
  return (
  <div>   
    <footer>
      <ul>
        {card.map((cardItem, index) => (
          <Item
          key={index}
          index={index}
          name={cardItem.name}
          price={cardItem.price}
          />
        ))}
      </ul>
    </footer>
  </div>
  )
}

export default CardItems



