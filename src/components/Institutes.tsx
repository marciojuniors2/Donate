import React from 'react'
import InstCard from './InstCard'
import institutes  from '../../Institutes.json';

function Institutes() {
  return (
        <>
            {institutes.map((institute, index) => (
                <InstCard
                key={index}
                img={institute.url}
                title={institute.name}
                price={institute.price}
                />
            ))}
        </>
  )
}

export default Institutes