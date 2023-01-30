import './App.css';
import Header from './components/Header';
import Snowman from './components/Snowman';
import Word from './components/Word';
import LetterBank from './components/LetterBank';
import { useState, useEffect } from 'react'

function App() {

  const [word, setWord] = useState('');
  const [count, setCount] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

  useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f210eecfb5mshfc612e739004a93p1bdbcbjsn591e5976f5cf',
      'X-RapidAPI-Host': 'random-word-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://random-word-by-api-ninjas.p.rapidapi.com/v1/randomword', options)
    .then(response => response.json())
    .then(data => setWord(data.word))
    .catch(err => console.error(err));
  }, []);

  console.log(word)

  // return of JSX
  return (
    <div className="App">
      <Header />
      <Word 
          word={word} 
          selectedLetters={selectedLetters} 
          setWin={setWin}
          count={count}
          setLose={setLose}
        />
      <Snowman count={count}/>
      <LetterBank 
          win={win}
          lose={lose}
          word={word} 
          count={count} 
          setCount={setCount} 
          selectedLetters={selectedLetters} 
          setSelectedLetters={setSelectedLetters}
        />
    </div>
  );
}

export default App;
