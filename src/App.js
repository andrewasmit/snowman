import './App.css';
import Header from './Header';
import Snowman from './Snowman';
import Word from './Word';
import LetterBank from './LetterBank';
import { useState, useEffect } from 'react'

function App() {

  const [word, setWord] = useState('') 

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
      <Snowman />
      <LetterBank word={word} />
    </div>
  );
}

export default App;
