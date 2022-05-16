import React from 'react';
import './App.css';
import Counter from './code/Counter';
import Hello from './code/Hello';
import InputSample from './code/InputSample';
import Wrapper from './code/Wrapper';
import Key from './code/key';



function App() {
  
  return (
    <Wrapper>
      <Hello name ='REACT iS GAD' color='red' isSpecial={true}/>
      <Hello name ='REACT iS GAD' color='red'/>
    <br/>
      <Counter></Counter>
    <br/>
      <InputSample></InputSample>
      <br/>
      <Key></Key>
    </Wrapper>
    
  );
}

export default App;
