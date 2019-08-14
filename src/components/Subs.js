import React from 'react';
import PropTypes from 'prop-types';
import Sub from './Sub';


export default function Subs() {
  const subsArr = [
    {
      name: 'kimura',
      type: 'shoulder lock'
    },
    {
      name: 'RNC',
      type: 'strangle'
    },
    {
      name: 'knee Bar',
      type: 'joint lock'
    },
    
  ];
  const styles = {
    marginLeft: '45vw',
    fontSize: '25px'
  };
  
  const subs = subsArr.map(sub => {
    return (
      <>
        <Sub name={sub.name} type={sub.type} />
      </>
    );
  });

  return (
    <>
      <h2 style={styles}>SUBMISSIONS!</h2>
      {subs}
    </>
  );

}

Subs.propTypes = {
  subsArr: PropTypes.array.isRequired,
  colorProps: PropTypes.object
};
