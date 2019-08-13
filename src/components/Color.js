import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb, hex }) {
 
  const colorBlock = {
    backgroundColor: '#cf1020',
    width: '1rem',
    height: '1rem',
    display: 'inline-block',
  };

  const styles = {
    textAlign: 'center'
  }

  return (
    <>
      <dl style={styles}>
        <div style={colorBlock}></div>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>rgb</dt>
        <dd>{rgb ? rgb : 'unknown'}</dd>

        <dt>hex</dt>
        <dd>{hex ? hex : 'unknown'}</dd>
      </dl>
    </>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  rgb: PropTypes.string,
  hex: PropTypes.string
};

export default Color;
