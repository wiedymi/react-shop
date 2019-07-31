import React from 'react'
import PropTypes from 'prop-types'

const Tags = ({ tags, handleClick }) => {
  return (
    <div className="tags">
      {tags.map(tag => (
        <span className="tag" key={`${tag}`}
          onClick={handleClick}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

Tags.defaultProps = {
  tags: [],
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Tags
