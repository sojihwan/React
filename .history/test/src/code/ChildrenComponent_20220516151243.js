import React , { useState } from 'react';

function ChildrenComponent(props){
  function sendData(){
    props.setValue("자식 데이터");
  }
  return(
    <div>
      <button onClick={sendData}>부모 컴포넌트로 데이터 전달</button>
    </div>
    )
}
export default ChildrenComponent;