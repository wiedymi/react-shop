import React from 'react'
import PropTypes from 'prop-types'

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map(tag => (
        <span className="tag" key={`${tag}`}>
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
}

export default Tags
