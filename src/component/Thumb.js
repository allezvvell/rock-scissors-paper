import React from 'react'

const Thumb = (props) => {
  let result = props.result;
  if(props.title === 'computer' && props.result !== 'tie' && props.result !== ''){
    if(result === 'win'){
      result = 'lose'
    }else if(result === 'lose'){
      result = 'win'
    }
  }
  return (
    <div className={`${props.title} ${result}`}>
      <img src='./img/thumb.png' alt='엄지척 이미지'/>
    </div>
  )
}

export default Thumb
