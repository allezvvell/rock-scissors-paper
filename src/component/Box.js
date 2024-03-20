import React from 'react';

const Box = (props) => {
  
  let result = props.result;
  if(props.title === 'Computer' && props.result !== 'tie' && props.result !== ''){
    if(result === 'win'){
      result = 'lose'
    }else if(result === 'lose'){
      result = 'win'
    }
  }
  return (
    <div className={result}>
       <h2 className='title'>{props.title}</h2>
       <span className='img-box'>{props.item && <img src={props.item.img} alt='가위바위보 이미지'/>}</span>
       <h3 className='result'>{result}</h3>
    </div>
  )
}

export default Box
