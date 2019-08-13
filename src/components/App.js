import React from 'react';
import Dog from './Dog';
import Header from './Header';
import Color from './Color';
import Space from './Space';
import Footer from './Footer';
import Subs from './Subs';
import Button from './Button';

export default function App() {
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

  const colorProps = {
    name: 'lava',
    rgb: '207, 16, 32',
    hex: '#cf1020',
  };

  return (
    <>
      <Header />
      <Space />
      <Button />
      <Space />
      <Dog name="Harvey" age={9} weight="55 lbs" />
      <Space />
      <Color name="lava" rgb="207, 16, 32" hex="#cf1020"/>
      <Space />
      <Subs subsArr={subsArr} colorProps={colorProps}/>
      <Footer />
    </>
  );
}
