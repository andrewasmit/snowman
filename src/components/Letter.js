import { useState } from 'react'

function Letter({ letter, answer }){

const [chosen, setChosen] = useState(false)

    function handleClickLetter(){
        // console.log({letter})
        setChosen(true)
    }


    // Return of JSX
    return(
        <div id={letter} className={ chosen ? answer : "default-letter"} onClick={handleClickLetter}>
            <h3>{letter}</h3>
        </div>
    )
}

export default Letter;