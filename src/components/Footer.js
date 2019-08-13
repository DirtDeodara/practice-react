import React from 'react';

export default function Footer() {
  
  const styles = {
    backgroundColor: 'black',
    height: '50px',
    width: '100vw',
    marginTop: '20px',
    color: 'white',
    textAlign: 'center',
    fontSize: '30px'
  };

  return (
    <>
      <footer style={styles}>
        <p>the end.</p>
      </footer>
    </>
  );

}
