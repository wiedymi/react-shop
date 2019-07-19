import React from 'react'

const inputs = ({ type = 'text', name, placeholder = '', onChange }) => {
    return (
        <div className='field'>
            <label name={name} >{name}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default inputs
