import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {

  const [score, setScore] = useState(0);


  return (
    <div className="App">
      <Header score={score} setScore={setScore}/>
      <MainContainer score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
