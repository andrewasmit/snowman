

function Letter({ letter, answer }){

    // Return of JSX
    return(
        <div id={letter} className={answer}>
            <h3 onClick={()=>console.log({letter}," was clicked!")}>{letter}</h3>
        </div>
    )
}

export default Letter;