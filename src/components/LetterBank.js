import Letter from "./Letter";
import { useState } from "react";

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function LetterBank({ word, count, setCount }){

    const [wrongLetters, setWrongLetters] = useState([]);
    function handleDisplayWrongLetters(letter){
        setWrongLetters([...wrongLetters, letter])
    }
    
    const wrongLettersToDisplay = wrongLetters.map((letter)=>{
        return <h4>{letter.toUpperCase()}</h4>
    })

    
    const wordLetters = word.split('');
    const lettersToDisplay = alphabet.map((e,i)=>{
        if (wordLetters.includes(e)){
            return <Letter 
                        letter={e.toUpperCase()} 
                        key={i} 
                        answer="green-letter" 
                        count={count}
                        setCount={setCount}
                        handleDisplayWrongLetters={handleDisplayWrongLetters}
                    />
        }else
            return <Letter 
                        letter={e.toUpperCase()} 
                        key={i} 
                        answer="red-letter" 
                        count={count}
                        setCount={setCount}
                        handleDisplayWrongLetters={handleDisplayWrongLetters}
                    />
    })


    // Return of JSX
    return(
        <div id="letter-bank">
            <h4>Wrong Letters Chosen</h4>
            {wrongLettersToDisplay}
            {lettersToDisplay}
        </div>
    )
};

export default LetterBank;