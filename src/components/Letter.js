import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

function Letter({ 
        letter, 
        answer, 
        handleDisplayWrongLetters, 
        selectedLetters, 
        setSelectedLetters, 
        win,
        lose,
        score,
        setScore,
        gamesPlayed
     }){

    const [chosen, setChosen] = useState(false)

    function handleClickLetter(){
        setChosen(true)
        if (answer === "red-letter"){
            handleDisplayWrongLetters(letter)
            setScore(score-=5)
        } else{
            setScore(score+=7)
        }
        setSelectedLetters([...selectedLetters, letter])
    }

    useEffect(()=>{
        setChosen(false)
    }, [gamesPlayed]);


    // Return of JSX
    return(
        <div id={letter} className={ chosen ? answer : "default-letter"} onClick={win || lose ? null : handleClickLetter}>
            <Typography variant="h4" component="h4">{letter}</Typography>
        </div>
    )
}

export default Letter;