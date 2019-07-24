import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map(tag => (
        <span className="tag" key={`${tag}`}>
          {tag}
        </span>
      ))}
    </div>
  );
};

Tags.defaultProps = {
  tags: []
};

export default Tags;
