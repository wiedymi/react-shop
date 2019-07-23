import React from 'react'
import LazyLoad from 'react-lazy-load'

const Img = ({ image }) => {
    return (
        <LazyLoad>
              <img src={image} alt="" />
        </LazyLoad>
    )
}

export default Img
