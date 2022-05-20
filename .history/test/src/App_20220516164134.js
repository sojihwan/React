import React , { useState } from 'react';
import ChildrenComponent from './code/ChildrenComponent';
import InputSample from './code/InputSample';

function ParentComponent(){
  const [value, setValue] = useState("");
  return(
    <div>
      <ChildrenComponent setValue={setValue}></ChildrenComponent>
      <InputSample value={value}></InputSample>
      <p>{value}</p>
    </div>
    )
}
export default ParentComponent;