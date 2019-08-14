import React from 'react';
import Dog from './Dog';
import Header from './Header';
import Color from './Color';
import Space from './Space';
import Footer from './Footer';
import Subs from './Subs';

export default function App() {

  return (
    <>
      <Header />
      <Space />
      <Space />
      <Dog name="Harvey" age={9} weight="55 lbs" />
      <Space />
      <Color name="lava" rgb="207, 16, 32" hex="#cf1020"/>
      <Space />
      <Subs />
      <Footer />
    </>
  );
}
