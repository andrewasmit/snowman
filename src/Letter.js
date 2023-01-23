

function Letter({ letter }){

    // Return of JSX
    return(
        <div className="letter" id={letter}>
            <h3 onClick={()=>console.log({letter}," was clicked!")}>{letter}</h3>
        </div>
    )
}

export default Letter;