import React from "react";
import { Grid, Typography } from "@mui/material";

function WrongLetterBank({ wrongLetters }){

    const wrongLettersToDisplay = wrongLetters.map((letter, i)=>{
        return <Typography variant="h6" component="h6" key={i}className="display-letter">{letter.toUpperCase()}</Typography>
    })

// return of JSX
    return(
        <div id ="wrong-letter-bank" className="split-screen">
        <Grid container >
            <Grid item xs={12}>
                <Typography variant="h5" component="h5">Wrong Letters Chosen</Typography>
            </Grid>
            <Grid item xs={12}>
                {wrongLettersToDisplay}
            </Grid>
        </Grid>
        </div>
    )
};

export default WrongLetterBank;