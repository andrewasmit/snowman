import Letter from "./Letter";
import { useState } from "react";

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function LetterBank({ 
        word, 
        count, 
        setCount, 
        selectedLetters, 
        setSelectedLetters, 
        win,
        lose,
        handleDisplayWrongLetters
    }){

        
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
                        selectedLetters={selectedLetters} 
                        setSelectedLetters={setSelectedLetters}
                        win={win}
                        lose={lose}
                    />
        }else
            return <Letter 
                        letter={e.toUpperCase()} 
                        key={i} 
                        answer="red-letter" 
                        count={count}
                        setCount={setCount}
                        handleDisplayWrongLetters={handleDisplayWrongLetters}
                        selectedLetters={selectedLetters} 
                        setSelectedLetters={setSelectedLetters}
                        win={win}
                        lose={lose}
                    />
    })


    // Return of JSX
    return(
        <div id="letter-bank">
            <h4>Letter Bank</h4>
            {lettersToDisplay}
        </div>
    )
};

export default LetterBank;