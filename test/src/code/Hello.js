import React from 'react';

function Hello(props){
  return <div style={{
    color :props.color
  }}>
    {props.isSpecial && <b>*</b>}
    {props.name}안녕하세요
    {props.isSpecial && <b>*</b>}
    </div>;
}

Hello.defaultProps ={
  name: '이름없음'
};
export default Hello;