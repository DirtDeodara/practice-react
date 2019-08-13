import React from 'react';
import paw from '../assets/paw.jpg';

export default function Header() {
  const header = {
    image: paw
  };

  return (
    <img src={header.image}></img>
  );
}
