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

        if(count ===6){
            setLose(true)
        }
    };


    function renderUnderscores(){
        setLetterUnderscores(wordArr.map((letter, i)=>{
            if(selectedLetters.includes(wordArr[i].toUpperCase())){
                 return <h3 key={i} className="display-letter">{letter.toUpperCase()}</h3>
             } else
                 return <h3 key={i} className="display-letter">__</h3>
         }))
    };

    useEffect(()=>{ renderUnderscores() }, [selectedLetters, word])
    useEffect(()=>{ checkForWinLoss(); }, [letterUnderscores])

    
    // Return of JSX
    return(
        <div>
            <h1>The answer is: "{word}"</h1>
            {letterUnderscores}
        </div>
    )
}

export default Word;

