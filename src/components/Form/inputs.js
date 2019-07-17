import React from 'react'

const inputs = ({ type = 'text', name, placeholder = '' }) => {
    return (
        <div className='field'>
            <label name={name} >{name}</label>
            <input type={type} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default inputs
