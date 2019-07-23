import React from 'react'
import Info from './Info'
import Img from './Img'


const Card = ({ product }) => {
  return (
    <div className='card' key={product["_id"]["$oid"]}>
        <Img image={product.images[0]} />
        <Info
          id={product["_id"]["$oid"]}
          title={product.title}
          rating={product.rating}
          description={product.description} 
          tags={product.tags}
          color={product.color}
          size={product.size}
          price={product.price}                     
        />        
    </div>
  )
}

export default Card;