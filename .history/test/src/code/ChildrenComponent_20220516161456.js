import React from 'react';

function ChildrenComponent(props){
  var a = "ㅎㅎ"
  function sendData(){
    props.setValue(a);
  }
  return(
    <div>
      <button onClick={sendData}>부모 컴포넌트로 데이터 전달</button>
    </div>
    )
}
export default ChildrenComponent;