import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Container, Grid } from '@mui/system';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)


  return (
    <Container className="App">
      <Header score={score} setScore={setScore} highScore={highScore}/>
      <MainContainer score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
    </Container>
  );
}

export default App;
