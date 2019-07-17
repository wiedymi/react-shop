import React from 'react'

const Button = ({ url = '#', text = 'Button' }) => {
    return (
        <a className='button' href={url}>
            {text}
        </a>
    )
}

export default Button
