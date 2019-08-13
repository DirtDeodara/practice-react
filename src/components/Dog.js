import React from 'react';
import PropTypes from 'prop-types';

function Dog(props) {

  const fields = Object.keys(props)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd>{props[key]}</dd>
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
