import Letter from "./Letter";

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function LetterBank({ word }){

    const wordLetters = word.split('')
    const lettersToDisplay = alphabet.map((e,i)=>{
        if (wordLetters.includes(e)){
            return <Letter letter={e.toUpperCase()} key={i} answer="green-letter"/>
        }else
        return <Letter letter={e.toUpperCase()} key={i} answer="red-letter"/>
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