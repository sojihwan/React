import React from 'react';
import './App.css';
import Counter from './code/Counter';
import Hello from './code/Hello';
import InputSample from './code/InputSample';
import Wrapper from './code/Wrapper';
import key from './code/key';



function App() {
  
  return (
    <Wrapper>
      <Hello name ='REACT iS GAD' color='red' isSpecial={true}/>
      <Hello name ='REACT iS GAD' color='red'/>
    <br/>
      <Counter></Counter>
    <br/>
      <InputSample></InputSample>
      <br>
      </br>
      <key></key>
    </Wrapper>
    
  );
}

export default App;
