import React from 'react';
import Dog from './Dog';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="Harvey" age={9} weight="55 lbs" />
      <Color name="lava" rgb="207, 16, 32" hex="#cf1020"/>
    </>
  );
}
