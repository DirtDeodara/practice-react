import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Sub({ name, type }) {
  const [count, setCount] = useState(0);

  const styles = {
    textAlign: 'center',
    fontSize: '20px',
    color: count >= 0 ? 'green' : 'red',
    textDecoration: count >= 0 ? 'underline' : 'line-through'
  };

  return (
    <>
      <Button count={count} setCount={setCount} />
      <p style={styles}>Name: {name}</p>
      <p style={styles}>Type: {type}</p>
    </>
  );
}

Sub.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Sub;
