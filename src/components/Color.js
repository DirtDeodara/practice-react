import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb, hex }) {
 
  const colorBlock = {
    backgroundColor: '#cf1020',
    width: '8rem',
    height: '2rem',
    display: 'inline-block',
  };

  const styles = {
    marginLeft: '45vw',
    fontSize: '25px'
  };

  return (
    <>
      <h2 style={styles}>COLOR!</h2>
      <dl style={styles}>
        <div style={colorBlock}></div>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>RGB</dt>
        <dd>{rgb ? rgb : 'unknown'}</dd>

        {hex && (
        <>
          <dt>HEX</dt>
          <dd>{hex}</dd>
        </>
        )}
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
