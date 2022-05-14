
import Start from "./Start"
import Content from "./Content";
import React from 'react';

export default function App() {
  const [tela, setTela] = React.useState('init');
  return (
    <>
      {
        tela === 'init' ? <Start setTela={setTela}/> : <Content />
      }
    </>
  );
}