import React from 'react'

const Tags = ({ tags = [] }) => {
    const tag = tags.map((tag, index) => (
        <span className='tag' key={index}>
            {tag}
        </span>
    ));

    return (
        <div className='tags' >
            {tag}
        </div>
    )
}

export default Tags
