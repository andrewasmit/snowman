import { useState } from 'react'

function Letter({ letter, answer }){

const [chosen, setChosen] = useState(false)

    function handleClickLetter(){
        console.log({letter})
    }

    // Return of JSX
    return(
        <div id={letter} className={answer} onClick={handleClickLetter}>
            <h3>{letter}</h3>
        </div>
    )
}

export default Letter;