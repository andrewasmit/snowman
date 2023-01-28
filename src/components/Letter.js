import { useState } from 'react'

function Letter({ letter, answer, count, setCount }){

const [chosen, setChosen] = useState(false)

    function handleClickLetter(){
        // console.log({letter})
        setChosen(true)
        if (answer === "red-letter"){
            setCount(count +=1)
        }
        console.log(count)
    }


    // Return of JSX
    return(
        <div id={letter} className={ chosen ? answer : "default-letter"} onClick={handleClickLetter}>
            <h3>{letter}</h3>
        </div>
    )
}

export default Letter;