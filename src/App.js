import './App.css';
import Header from './components/Header';
import Snowman from './components/Snowman';
import Word from './components/Word';
import LetterBank from './components/LetterBank';
import { useState, useEffect } from 'react'

function App() {

  const [word, setWord] = useState('') 
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f210eecfb5mshfc612e739004a93p1bdbcbjsn591e5976f5cf',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };
  
  fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options)
    .then(res => res.json())
    .then(data => setWord(data.word))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Word word={word}/>
      <Snowman count={count}/>
      <LetterBank word={word} count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
