import React , { useState } from 'react';
import ChildrenComponent from './code/ChildrenComponent';

function ParentComponent(){
  const [value, setValue] = useState("");
  return(
    <div>
      <ChildrenComponent setValue={setValue}></ChildrenComponent>
      <p>{value}</p>
    </div>
    )
}
export default ParentComponent;