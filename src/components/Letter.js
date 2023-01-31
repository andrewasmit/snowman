import { useState } from 'react'

function Letter({ 
        letter, 
        answer, 
        handleDisplayWrongLetters, 
        selectedLetters, 
        setSelectedLetters, 
        win,
        lose
     }){

const [chosen, setChosen] = useState(false)

    function handleClickLetter(){
        setChosen(true)
        if (answer === "red-letter"){
            handleDisplayWrongLetters(letter)
        }
        setSelectedLetters([...selectedLetters, letter])
    }


    // Return of JSX
    return(
        <div id={letter} className={ chosen ? answer : "default-letter"} onClick={win || lose ? null : handleClickLetter}>
            <h1>{letter}</h1>
        </div>
    )
}

export default Letter;