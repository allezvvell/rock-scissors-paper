import {useState} from 'react';
import './App.css';
import Score from './component/Score';
import Box from './component/Box';
import Thumb from './component/Thumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-regular-svg-icons";
import { faHandScissors } from "@fortawesome/free-regular-svg-icons";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";



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
  const [result,setResult] = useState('');
  const [userScore,setUserScore] = useState(0); 
  const [computerScore,setComputerScore] = useState(0); 

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
      if(computer.name === SCISSORS){
        setUserScore(userScore + 1);
        return 'win'
      }else{
        setComputerScore(computerScore + 1);
        return 'lose'
      }
    }else if(user.name === PAPER){
      if(computer.name === ROCK){
        setUserScore(userScore + 1);
        return 'win'
      }else{
        setComputerScore(computerScore + 1);
        return 'lose'
      }
    }else if(user.name === SCISSORS){
      if(computer.name === PAPER){
        setUserScore(userScore + 1);
        return 'win'
      }else{
        setComputerScore(computerScore + 1);
        return 'lose'
      }
    }
  }


  const randomChoice = () => {
    const arr = Object.keys(choice);
    return arr[Math.floor(Math.random()*arr.length)];
  }


  function gameStart(e){
    e.target.classList.add('hide');
    e.target.nextSibling.classList.remove('hide');
    document.querySelector('.score-wrap').classList.remove('hide');
  }

  const shareUrl = () => {
    if (navigator.share) {
        navigator.share({
            title: '가위바위보 게임',
            url: 'https://rock-scissors-papper-allezvvell.netlify.app',
        });
    }else{
        alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }
  return (
    <div className='wrapper'>
      <div className='score-wrap hide'>
        <p className='game-title'>ROCK SCISSORS PAPER!</p>
        <div className='score-container'>
          <Score title='You' score={userScore}/>
          <Score title='Computer' score={computerScore}/>
        </div>
      </div>
      <div className='box-wrap'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect} result={result}/>
      </div>
      <div className='button-wrap'>
        <button className='start-btn' onClick={(e) => {gameStart(e)}}>GAME START</button>
        <div className='button-container hide'> 
          <button className='scissors' onClick={() => play('scissors')}><FontAwesomeIcon icon={faHandScissors} /></button>
          <button className='rock' onClick={() => play('rock')}><FontAwesomeIcon icon={faHandBackFist} /></button>
          <button className='paper' onClick={() => play('paper')}><FontAwesomeIcon icon={faHand} /></button>
        </div>
      </div>
      <div className='thumbs-wrap'>
        <Thumb title='you' result={result}/>
        <Thumb title='computer' result={result}/>
      </div>
      <div className='header-btn-wrap'>
        <button className='restart-btn' onClick={() => {window.location.reload()}}>Restart</button>
        <button className='share-btn' onClick={() => {shareUrl()}}><FontAwesomeIcon icon={faShareFromSquare} />Share</button>
      </div>
      <div className='cover'>반응형 작업중 입니다!</div>
    </div>
  )
}

export default App;