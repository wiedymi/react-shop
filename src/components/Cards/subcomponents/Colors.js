import React from 'react';

const Colors = ({ colors }) => {
  return (
    <div className="color desktop">
      <label>Avalible colors</label>
      <p>
        {colors.map(color => (
          <button type="button" className="button" style={{ background: color }} key={color} />
        ))}
      </p>
    </div>
  );
};

export default Colors;
