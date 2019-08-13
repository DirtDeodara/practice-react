import React from 'react';
import paw from '../assets/paw.jpg';

export default function Header() {

  const styles = {
    marginLeft: '40vw'
  };

  const header = {
    image: paw
  };

  return (
    <img style={styles} src={header.image}></img>
  );
}
