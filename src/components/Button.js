import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ count, setCount }) {

  const center = {
    marginLeft: '50vw',
    display: 'inline-block'
  };

  return (
    <div>
      <p style={center}>Count: {count}</p>
      <button style={center} onClick={() => setCount(count + 1)}>Up</button>
      <button style={center} onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}

Button.propTypes = {
  count: PropTypes.string.isRequired,
  setCount: PropTypes.string.isRequired,
};
