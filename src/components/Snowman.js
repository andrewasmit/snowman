

function Snowman({ count }){


    return(
        <div id='snowman'className="split-screen">
            <h3>{count} wrong guesses</h3>
            <svg width="300" height="300" viewBox="-100 -100 200 200">

                {/* Lowest Body */}
            { count >= 1 ? 
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
            { count >=2 ?
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
            { count >= 3 ?
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
            { count >= 4 ?
                <rect 
                    x="20" 
                    y="8" 
                    width="40" 
                    height="4" 
                    fill="#987758" 
                /> : null
            }

                {/* LEFT Arm */}
            { count >=5 ?
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
            { count >=6 ?
                <circle 
                    cx ="-7" 
                    cy="-37" 
                    r="4" 
                    fill="#000"
                /> : null
            }
            { count >=6 ?
                <circle 
                    cx ="8" 
                    cy="-37" 
                    r="4" 
                    fill="#000"
                /> :null
            }
            
                {/* Mouth 4 */}
            { count >=6 ?
                <circle 
                    cx ="15" 
                    cy="-17" 
                    r="2.5" 
                    fill="#000"
                />:null
            }

                {/* Mouth 3 */}
            { count >=6 ?
                <circle 
                    cx ="7" 
                    cy="-13.5" 
                    r="2.5" 
                    fill="#000"
                />: null
            }

                {/* Mouth 2 */}
            { count >=6 ?
                <circle 
                    cx ="-2" 
                    cy="-12" 
                    r="2.5" 
                    fill="#000"
                /> : null
            }

                {/* Mouth 1 */}
            { count >=6 ?
                <circle 
                    cx ="-11.5" 
                    cy="-15" 
                    r="2.5" 
                    fill="#000"
                /> : null
            }

                {/* Carrot Nose */}
            { count >=7 ?
                <polygon 
                    points="-2, -22 0, -27 40, -26 "
                    fill="#fa1"
                /> :null
            }

                {/* Top hat/Bottom */}
            { count >=8 ?
                <rect 
                    x="-30" 
                    y="-55" 
                    width="60" 
                    height="5" 
                    fill="#000" 
                /> : null
            }
                {/* Top hat/TOP */}
            { count >=8 ?
                <rect 
                    x="-18" 
                    y="-75" 
                    width="35" 
                    height="25" 
                    fill="#000" 
                /> : null
            }
                
            </svg>
        </div>
    )
}

export default Snowman;