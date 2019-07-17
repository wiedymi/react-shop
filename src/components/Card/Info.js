import React from 'react'
import Title from './Title'
import Stars from './Stars'
import Color from './Color'
import Size from './Size'
import Description from './Description'
import Tags from '../Tags'
import Button from '../Button'
import Counter from './Counter'

const Info = ({ 
        title, rating, description, tags, color, size 
    }) => {
    return (
        <div className='info'>  
            <div className='info__title__rating'>
                <Title title={title} />
                <div className='start__tags'>
                    <Stars rating={rating} />
                    <Tags tags={tags}/>
                </div>                
            </div>
            <Color color={color} />
            <Size size={size} />
            <Description description={description} />
            <div className='purchase'>
                <Button name='buy' text='Buy'/>
                <Counter />
            </div>
        </div>
    )
}

export default Info
