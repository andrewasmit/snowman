import {useEffect, useState } from 'react'
import { Typography } from '@mui/material';

function Word({ word, selectedLetters, setWin, wrongLetters, setLose }){

    const wordArr= word.split('')
    const [letterUnderscores, setLetterUnderscores] = useState([]);

    function checkForWinLoss(){
        const checkArr = letterUnderscores.map(e=>{
            if(e.props.children === "__ "){
                return "NO";
            } else {
                return e.props.children;
            }
        })
        if(checkArr.includes("NO") || checkArr.length===0){
            console.log("No win yet")
        }else{
            setWin(true)
            console.log("WINNER!")
        };

        if(wrongLetters.length ===8){
            setLose(true)
            console.log("You Lose!")
        }
    };


    function renderUnderscores(){
        setLetterUnderscores(wordArr.map((letter, i)=>{
            if(selectedLetters.includes(wordArr[i].toUpperCase())){
                 return <Typography variant="h4" component="h3" key={i} className="display-letter">{letter.toUpperCase()}</Typography>
             } else
                 return <Typography variant="h4" component="h3" key={i} className="display-letter">__ </Typography>
         }))
    };

    useEffect(()=>{ renderUnderscores() }, [selectedLetters, word])
    useEffect(()=>{ checkForWinLoss() }, [letterUnderscores])

    
    // Return of JSX
    return(
        <div id="word">
            {letterUnderscores}
        </div>
    )
}

export default Word;

