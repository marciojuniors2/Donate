import { CardContext } from '@/contexts/CardContext'
import React, { useContext } from 'react'

interface itemProps {
    name: string;
    price: number;
    index: number;
}

function Item({name, price, index}: itemProps) {
const { handleRemoveItemCard } = useContext(CardContext)
  return (
    <li>
        <h2>{name}</h2>
        <span>R${price}</span>
        <button
        className=''
        onClick={() => handleRemoveItemCard(index)}
        >
            REMOVER
        </button>
    </li>
  )
}

export default Item