import React from 'react';
import PropTypes from 'prop-types';

function Dog(props) {

  const styles = {
    textAlign: 'center'
  };

  const fields = Object.keys(props)
    .map(key => {
      return (
        <>
          <dt style={styles}>{key}</dt>
          <dd style={styles}>{props[key]}</dd>
        </>
      );
    });

  return (
    <dl>
      {fields}
    </dl>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
};

export default Dog;
