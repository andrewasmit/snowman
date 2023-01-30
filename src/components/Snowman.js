

function Snowman({ count }){


    return(
        <div id='snowman'className="split-screen">
            <h3>{count} wrong guesses</h3>
            <svg width="300" height="300" viewBox="-100 -100 200 200">


                {/* Lowest Body */}
                <circle 
                    cx ="0" 
                    cy="55" 
                    r="40" 
                    fill="#fff"
                    stroke="#335693"
                    strokeWidth="3"
                />

                {/* Middle Body */}
                <circle 
                    cx ="0" 
                    cy="12" 
                    r="32" 
                    fill="#fff"
                    stroke="#335693"
                    strokeWidth="3"
                />

                Head / Body
                <circle 
                    cx ="0" 
                    cy="-28" 
                    r="25" 
                    fill="#fff"
                    stroke="#335693"
                    strokeWidth="3"
                />

                {/* RIGHT Arm */}
                <rect 
                    x="20" 
                    y="8" 
                    width="40" 
                    height="4" 
                    fill="#987758" 
                />

                {/* LEFT Arm */}
                <rect 
                    x="-60" 
                    y="8" 
                    width="40" 
                    height="4" 
                    fill="#987758" 
                />

                {/* FACE */}
                / {/* Left Eye */}
                <circle 
                    cx ="-7" 
                    cy="-37" 
                    r="4" 
                    fill="#000"
                />
                <circle 
                    cx ="8" 
                    cy="-37" 
                    r="4" 
                    fill="#000"
                />
                {/* Mouth 4 */}
                <circle 
                    cx ="15" 
                    cy="-17" 
                    r="2.5" 
                    fill="#000"
                />
                {/* Mouth 3 */}
                <circle 
                    cx ="7" 
                    cy="-13.5" 
                    r="2.5" 
                    fill="#000"
                />
                {/* Mouth 2 */}
                <circle 
                    cx ="-2" 
                    cy="-12" 
                    r="2.5" 
                    fill="#000"
                />
                {/* Mouth 1 */}
                <circle 
                    cx ="-11.5" 
                    cy="-15" 
                    r="2.5" 
                    fill="#000"
                />

                {/* Carrot Nose */}
                <polygon 
                    points="-2, -22 0, -27 40, -26 "
                    fill="#fa1"
                />

                {/* Top hat/Bottom */}
                <rect 
                    x="-30" 
                    y="-55" 
                    width="60" 
                    height="5" 
                    fill="#000" 
                />
                {/* Top hat/TOP */}
                <rect 
                    x="-18" 
                    y="-75" 
                    width="35" 
                    height="25" 
                    fill="#000" 
                />
                
            </svg>
        </div>
    )
}

export default Snowman;