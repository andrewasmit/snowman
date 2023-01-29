import {useEffect, useState } from 'react'

function Word({ word, selectedLetters, setWin }){

    const wordArr= word.split('')
    const [letterUnderscores, setLetterUnderscores] = useState([]);

    function renderUnderscores(){
        setLetterUnderscores(wordArr.map((letter, i)=>{
            if(selectedLetters.includes(wordArr[i].toUpperCase())){
                 return <h3 key={i} className="display-letter">{letter.toUpperCase()}</h3>
             } else
                 return <h3 key={i} className="display-letter">__</h3>
         }))
    };

    useEffect(()=>{ renderUnderscores() }, [selectedLetters, word])

    function checkForWin(){
        if(letterUnderscores.includes("__")){
            return false
        } else
        setWin(true)
    }
console.log(letterUnderscores)
    useEffect(()=>{ checkForWin() }, [selectedLetters, word])


    // Return of JSX
    return(
        <div>
            <h1>The answer is: "{word}"</h1>
            {letterUnderscores}
        </div>
    )
}

export default Word;

