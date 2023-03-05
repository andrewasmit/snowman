import { Grid, Typography } from "@mui/material";

function Snowman({ count, wrongLetters }){


    return(
        <div id='snowman'className="split-screen">
        <Grid container >
            <Grid item xs={12}>
            <svg width="300" height="300" viewBox="-100 -100 200 200">
            
                <g id="tree">
                    <polygon points="-10, 0 10, 0 0 -50" fill="#38755b"/>
                    <line 
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="10"
                        stroke="#778074"
                        strokeWidth="4"
                    />
                </g>
                <rect x="-100" y="-100" width="300" height="300" fill="#f1dac3" />
                <circle cx="0" cy="380" r="350" fill="#f8f4e8" />

                <use href="#tree" x="-40" y="10" transform="scale(2)"/> 
                <use href="#tree" x="30" y="30" transform="scale(2.5)"/> 

            {/* Lowest Body */}
            { wrongLetters.length >= 1 ? 
                <circle 
                    cx ="0" 
                    cy="55" 
                    r="40" 
                    fill="#fff"
                    stroke="#335693"
                    strokeWidth="3"
                /> : null
            }

            {/* Middle Body */}
            { wrongLetters.length >=2 ?
                <circle 
                    cx ="0" 
                    cy="12" 
                    r="32" 
                    fill="#fff"
                    stroke="#335693"
                    strokeWidth="3"
                /> : null 
            }

            {/* Head / Body */}
            { wrongLetters.length >= 3 ?
                <circle 
                    cx ="0" 
                    cy="-28" 
                    r="25" 
                    fill="#fff"
                    stroke="#335693"
                    strokeWidth="3"
                /> : null
            }

            {/* RIGHT Arm */}
            { wrongLetters.length >= 4 ?
                <rect 
                    x="20" 
                    y="8" 
                    width="40" 
                    height="4" 
                    fill="#987758" 
                /> : null
            }

            {/* LEFT Arm */}
            { wrongLetters.length >=5 ?
                <rect 
                    x="-60" 
                    y="8" 
                    width="40" 
                    height="4" 
                    fill="#987758" 
                /> : null
            }

            {/* FACE */}
            {/* Left Eye */}
            { wrongLetters.length >=6 ?
                <circle 
                    cx ="-7" 
                    cy="-37" 
                    r="4" 
                    fill="#000"
                /> : null
            }
            { wrongLetters.length >=6 ?
                <circle 
                    cx ="8" 
                    cy="-37" 
                    r="4" 
                    fill="#000"
                /> :null
            }
            
            {/* Mouth 4 */}
            { wrongLetters.length >=6 ?
                <circle 
                    cx ="15" 
                    cy="-17" 
                    r="2.5" 
                    fill="#000"
                />:null
            }

            {/* Mouth 3 */}
            { wrongLetters.length >=6 ?
                <circle 
                    cx ="7" 
                    cy="-13.5" 
                    r="2.5" 
                    fill="#000"
                />: null
            }

            {/* Mouth 2 */}
            { wrongLetters.length >=6 ?
                <circle 
                    cx ="-2" 
                    cy="-12" 
                    r="2.5" 
                    fill="#000"
                /> : null
            }

            {/* Mouth 1 */}
            { wrongLetters.length >=6 ?
                <circle 
                    cx ="-11.5" 
                    cy="-15" 
                    r="2.5" 
                    fill="#000"
                /> : null
            }

            {/* Carrot Nose */}
            { wrongLetters.length >=7 ?
                <polygon 
                    points="-2, -22 0, -27 40, -26 "
                    fill="#fa1"
                /> :null
            }

            {/* Top hat/Bottom */}
            { wrongLetters.length >=8 ?
                <rect 
                    x="-30" 
                    y="-55" 
                    width="60" 
                    height="5" 
                    fill="#000" 
                /> : null
            }
            {/* Top hat/TOP */}
            { wrongLetters.length >=8 ?
                <rect 
                    x="-18" 
                    y="-75" 
                    width="35" 
                    height="25" 
                    fill="#000" 
                /> : null
            }
                
            </svg>
            </Grid>
            <Grid item xs={12} >
                {wrongLetters.length >0 ? <Typography variant="p" component="p">Only {8 - wrongLetters.length} incorrect {8-wrongLetters.length === 1 ? "guess" : "guesses" } left...</Typography> 
                : <Typography variant="p" component="p"></Typography> }
            </Grid>
        </Grid>
        </div>
    )
}

export default Snowman;