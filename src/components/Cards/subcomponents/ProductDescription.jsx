import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'
import PropTypes from 'prop-types'

const ProductDescription = ({ description }) => {
  const charectersToShowInPreview = 350
  return (
    <div className="m-top text-break-and-justify ">
      <ReadMoreAndLess
        className="m-top"
        charLimit={charectersToShowInPreview}
        readMoreText="Read more"
        readLessText="Read less"
      >
        {description}
      </ReadMoreAndLess>
    </div>
  )
}

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export default ProductDescription
