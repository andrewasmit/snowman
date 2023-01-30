import { useState } from 'react'

function Letter({ 
        letter, 
        answer, 
        count, 
        setCount, 
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
            setCount(count +=1)
            handleDisplayWrongLetters(letter)
        }
        console.log(count)
        setSelectedLetters([...selectedLetters, letter])
    }


    // Return of JSX
    return(
        <div id={letter} className={ chosen ? answer : "default-letter"} onClick={win || lose ? null : handleClickLetter}>
            <h3>{letter}</h3>
        </div>
    )
}

export default Letter;