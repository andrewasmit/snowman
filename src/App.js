import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)


  return (
    <div className="App">
      <Header score={score} setScore={setScore} highScore={highScore}/>
      <MainContainer score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
    </div>
  );
}

export default App;
