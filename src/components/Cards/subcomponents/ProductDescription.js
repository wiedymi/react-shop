import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';

const ProductDescription = ({ description }) => {
  const charectersToShowInPreview = 350;
  return (
    <div className="m-top text-break-and-justify desktop">
      <ReadMoreAndLess
        className="m-top"
        charLimit={charectersToShowInPreview}
        readMoreText="Read more"
        readLessText="Read less"
      >
        {description}
      </ReadMoreAndLess>
    </div>
  );
};

export default ProductDescription;
