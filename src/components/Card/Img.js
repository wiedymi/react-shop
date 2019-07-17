import React from 'react'
import LazyLoad from 'react-lazy-load'

const Img = ({ image }) => {
    return (
        <LazyLoad>
              <img src={image} alt="" height={320} width={240}/>
        </LazyLoad>
    )
}

export default Img
