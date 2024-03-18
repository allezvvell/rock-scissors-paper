import React from 'react';

const Box = (props) => {
  return (
    <div className='box'>
       <h1 className='title'>{props.title}</h1>
       <span className='img-box'><img src={props.item && props.item.img} alt='가위바위보이미지'/></span>
       <h2 className='result'>{props.result}</h2>
    </div>
  )
}

export default Box
