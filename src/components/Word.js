import {useEffect, useState } from 'react'

function Word({ word, selectedLetters, setWin, count, setLose }){

    const wordArr= word.split('')
    const [letterUnderscores, setLetterUnderscores] = useState([]);

    function checkForWinLoss(){
        const checkArr = letterUnderscores.map(e=>{
            if(e.props.children === "__"){
                return "NO";
            } else {
                return e.props.children;
            }
        })
        if(checkArr.includes("NO") || checkArr.length===0){
            // console.log("No win yet")
        }else{
            setWin(true)
        };

        if(count ===8){
            setLose(true)
        }
    };


    function renderUnderscores(){
        setLetterUnderscores(wordArr.map((letter, i)=>{
            if(selectedLetters.includes(wordArr[i].toUpperCase())){
                 return <h1 key={i} className="display-letter">{letter.toUpperCase()}</h1>
             } else
                 return <h1 key={i} className="display-letter">__</h1>
         }))
    };

    useEffect(()=>{ renderUnderscores() }, [selectedLetters, word])
    useEffect(()=>{ checkForWinLoss(); }, [letterUnderscores])

    
    // Return of JSX
    return(
        <div id="word">
            <h1>The answer is: "{word.toUpperCase()}"</h1>
            {letterUnderscores}
        </div>
    )
}

export default Word;

