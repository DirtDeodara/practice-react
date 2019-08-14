import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Dog(props) {
  const [count, setCount] = useState(0);

  const styles = {
    marginLeft: '45vw',
    fontSize: '25px'
  };

  return (
    <>
      <Button />
      <dl style={styles}>
        <dt>Name</dt>
        <dd>{props.name}</dd>

        <dt>Age</dt>
        <dd>{props.age}</dd>

        {props.weight && (
          <>
            <dt>Weight</dt>
            <dd>{props.weight}</dd>
          </>
        )}
      </dl>
    </>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
};

export default Dog;
