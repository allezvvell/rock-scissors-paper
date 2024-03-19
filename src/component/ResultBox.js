import React from 'react'

const ResultBox = (props) => {
let result = '';
if(props.result === 'tie'){
    result = '비겼습니다'
}else if(props.result === 'win'){
    result = '당신이 이겼습니다'
}else if(props.result === 'lose'){
    result = '당신이 졌습니다'
}
return (
    <div className='result-box'>
        {result}
    </div>
  )
}

export default ResultBox
