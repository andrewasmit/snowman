import React from "react";
import { useState, useEffect } from 'react'
import Word from "./components/Word";
import LetterBank from "./components/LetterBank";
import Snowman from "./components/Snowman";
import WrongLetterBank from "./components/WrongLetterBank";

function MainContainer(){

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


  const [wrongLetters, setWrongLetters] = useState([]);

  function handleDisplayWrongLetters(letter){
      setWrongLetters([...wrongLetters, letter])
  };

//   Return of JSX
    return(
        <div id="main-container">
           <Word 
                word={word} 
                selectedLetters={selectedLetters} 
                setWin={setWin}
                count={count}
                setLose={setLose}
            />
            <Snowman count={count}/>
            <WrongLetterBank wrongLetters={wrongLetters} />
            <LetterBank 
                win={win}
                lose={lose}
                word={word} 
                count={count} 
                setCount={setCount} 
                selectedLetters={selectedLetters} 
                setSelectedLetters={setSelectedLetters}
                handleDisplayWrongLetters={handleDisplayWrongLetters}
            />
        </div>
    )
};

export default MainContainer;