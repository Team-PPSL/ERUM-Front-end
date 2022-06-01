import React from 'react';

const ColorPick = (color) => {
  const style = {
    backgroundColor: color,
    width: '24px',
    height: '24px',
    margin: '9px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 0,
    outline: 0,
  };
  return <button style={style} />;
};

export default ColorPick;
