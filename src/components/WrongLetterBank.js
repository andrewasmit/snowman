import React from "react";

function WrongLetterBank({ wrongLetters }){

    const wrongLettersToDisplay = wrongLetters.map((letter, i)=>{
        return <h2 key={i}className="display-letter">{letter.toUpperCase()}</h2>
    })

// return of JSX
    return(
        <div id ="wrong-letter-bank" className="split-screen">
            <h2>Wrong Letters Chosen</h2>
            {wrongLettersToDisplay}
        </div>
    )
};

export default WrongLetterBank;