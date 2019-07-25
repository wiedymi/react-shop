import React from 'react'

const Form = ({ children, onSubmit }) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;