import './App.css';
import Header from './Header';
import Snowman from './Snowman';
import Word from './Word';
import LetterBank from './LetterBank';
import { useState, useEffect } from 'react'

function App() {

  const [word, setWord] = useState('') 

  // useEffect()

  return (
    <div className="App">
      <Header />
      <Word />
      <Snowman />
      <LetterBank />
    </div>
  );
}

export default App;
