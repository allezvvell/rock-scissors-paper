import React from 'react';

const Box = (props) => {
  let result = props.result;
  if(props.title === 'Computer'){
    if(result === 'win'){
      result = 'lose'
    }else if(result === 'lose'){
      result = 'win'
    }
  }
  return (
    <div className={result}>
       <h1 className='title'>{props.title}</h1>
       <span className='img-box'><img src={props.item && props.item.img} alt='ê°??œ„ë°”ìœ„ë³´ì´ë¯¸ì??'/></span>
       <h2 className='result'>{result}</h2>
    </div>
  )
}

export default Box
