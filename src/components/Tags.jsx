import React from 'react'
import PropTypes from 'prop-types'
import { StyledTags, StyledSpan } from '@/components/styled/StyledTags'

const Tags = ({ tags, handleClick }) => {
  return (
    <StyledTags>
      {tags.map(tag => (
        <StyledSpan key={tag} onClick={handleClick}>
          {tag}
        </StyledSpan>
      ))}
    </StyledTags>
  )
}

Tags.defaultProps = {
  tags: [],
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Tags
