import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb, hex }) {
 
  const styles = {
    backgroundColor: '#cf1020',
    width: '1rem',
    height: '1rem',
    display: 'inline-block'
  };

  return (
    <>
      <dl>
        <div style={styles}></div>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>rgb</dt>
        <dd>{rgb}</dd>

        <dt>hex</dt>
        <dd>{hex}</dd>
      </dl>
    </>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
