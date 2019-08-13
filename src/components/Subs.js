import React from 'react';
import PropTypes from 'prop-types';


export default function Subs({ subsArr }) {

  const styles = {
    marginLeft: '45vw',
    fontSize: '25px'
  };
  
  const subs = subsArr.map(sub => {
    return (
      <>
        <p style={styles}>Name: {sub.name}</p>
        <p style={styles}>Type: {sub.type}</p>
        <p>.</p>
      </>
    );
  });

  return (
    <>
      <h2 style={styles}>Submissions</h2>
      {subs}
    </>
  );

}

Subs.propTypes = {
  subsArr: PropTypes.array.isRequired,
};
