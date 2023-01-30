import React from "react";

function WrongLetterBank({ wrongLetters }){

    const wrongLettersToDisplay = wrongLetters.map((letter, i)=>{
        return <h4 key={i}className="display-letter">{letter.toUpperCase()}</h4>
    })

// return of JSX
    return(
        <div id ="wrong-letter-bank" className="split-screen">
            <h3>Wrong Letters Chosen</h3>
            {wrongLettersToDisplay}
        </div>
    )
};

export default WrongLetterBank;