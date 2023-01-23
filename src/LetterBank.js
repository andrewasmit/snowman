import Letter from "./Letter";

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function LetterBank(){

    const lettersToDisplay = alphabet.map((e,i)=>{
        return <Letter letter={e.toUpperCase()} key={i}/>
    })


    // Return of JSX
    return(
        <div id="letter-bank">
            <h3>The Alphabet</h3>
            {lettersToDisplay}
        </div>
    )
};

export default LetterBank;