import Letter from "./Letter";

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function LetterBank({ 
        word, 
        wrongLetters, 
        selectedLetters, 
        setSelectedLetters, 
        win,
        lose,
        handleDisplayWrongLetters,
        score,
        setScore,
        gamesPlayed
    }){

        
    const wordLetters = word.split('');
    const lettersToDisplay = alphabet.map((e,i)=>{
        if (wordLetters.includes(e)){
            return <Letter 
                        letter={e.toUpperCase()} 
                        key={i} 
                        answer="green-letter" 
                        wrongLetters={wrongLetters}
                        handleDisplayWrongLetters={handleDisplayWrongLetters}
                        selectedLetters={selectedLetters} 
                        setSelectedLetters={setSelectedLetters}
                        win={win}
                        lose={lose}
                        score={score}
                        setScore={setScore}
                        gamesPlayed={gamesPlayed}
                    />
        }else
            return <Letter 
                        letter={e.toUpperCase()} 
                        key={i} 
                        answer="red-letter" 
                        wrongLetters={wrongLetters}
                        handleDisplayWrongLetters={handleDisplayWrongLetters}
                        selectedLetters={selectedLetters} 
                        setSelectedLetters={setSelectedLetters}
                        win={win}
                        lose={lose}
                        score={score}
                        setScore={setScore}
                        gamesPlayed={gamesPlayed}
                    />
    })


    // Return of JSX
    return(
        <div id="letter-bank">
            <h2>Letter Bank</h2>
            {lettersToDisplay}
        </div>
    )
};

export default LetterBank;