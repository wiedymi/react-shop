import React from 'react'

const Button = ({ url = '#', text = 'Button', handleClick }) => {
    return (
        <a className='button' href={url} onClick={handleClick}>
            {text}
        </a>
    )
}

export default Button
