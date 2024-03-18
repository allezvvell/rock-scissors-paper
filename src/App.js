import {useState} from 'react';
import './App.css';
import Box from './component/Box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-regular-svg-icons";
import { faHandScissors } from "@fortawesome/free-regular-svg-icons";
import { faHand } from "@fortawesome/free-regular-svg-icons";


const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';

const choice = {
  rock: {
    name : ROCK,
    img : 'https://i.pinimg.com/originals/af/f9/83/aff98370aa2d91f0d23c79ec03fb8330.png'
  },
  scissors: {
    name : SCISSORS,
    img : 'https://media.istockphoto.com/id/1043551106/vector/scissors-vector-cartoon.jpg?s=612x612&w=0&k=20&c=iu7Ca7ucLnq0HyalszRYYjO29XFnbWlnP2MpoMop0iU='
  },
  paper: {
    name : PAPER,
    img : 'https://i.pinimg.com/originals/af/30/5c/af305cd182d90aed35da8a62c23fed5e.jpg'
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    setResult(judgement(choice[userChoice],choice[computerChoice]));

  }
  const judgement = (user,computer) => {
    if(user.name === computer.name){
        return 'tie'
    }else if(user.name === ROCK){
      return computer.name === SCISSORS ? 'win' : 'lose';
    }else if(user.name === PAPER){
      return computer.name === ROCK ? 'win' : 'lose';
    }else if(user.name === SCISSORS){
      return computer.name === PAPER ? 'win' : 'lose';
    }
  }

  const randomChoice = () => {
    const arr = Object.keys(choice);
    return arr[Math.floor(Math.random()*arr.length)];
  }
  return (
    <div className='wrapper'>
      <div className='box-wrap'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect} />
      </div>
      <div className='button-wrap'>
        <button className='scissors' onClick={() => play('scissors')}><FontAwesomeIcon icon={faHandScissors} /></button>
        <button className='rock' onClick={() => play('rock')}><FontAwesomeIcon icon={faHandBackFist} /></button>
        <button className='paper' onClick={() => play('paper')}><FontAwesomeIcon icon={faHand} /></button>
      </div>
    </div>
  )
}

export default App;
