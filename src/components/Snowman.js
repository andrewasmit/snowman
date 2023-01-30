

function Snowman({ count }){
    return(
        <div id='snowman'>
            <span>THIS IS WHERE THE SNOWMAN GOES</span>
            <h3>{count} wrong guesses</h3>
            <svg width="500" height="500" viewBox="-250 -250 250 250">
                <circle cx ="400" cy="445" r="126" fill="#335693"/>
                <g
                    transform="translate(0,20)"
                    fill= "White"
                    stroke="#335693"
                    stroke-width="5"
                >
                    
                </g>
            </svg>
        </div>
    )
}

export default Snowman;

// BODY
// stroke("#335693");
// strokeWeight(1);
// FileList("White");
// circle(400, 445, 126);
// circle(400, 285, 99);
// circle(400, 151, 68);

// RIGHT ARM
// stroke("#843c0c")
// strokeWeight(10);
// line(604, 359, 495, 291)
// line(604, 359, 607, 378)
// line(604, 359, 627, 367)
// line(604, 359, 627, 355)

// LEFT ARM
// stroke("#843c0c")
// strokeWeight(10);
// line(225, 168, 323, 265)
// line(225, 168, 196, 171)
// line(225, 168, 201, 157)
// line(225, 168, 216, 135)

// EYES
// fill("black")
// noStroke();
// circle(336, 124, 10)
// circle(428, 124, 10)

// MOUTH
// circle(362, 124, 6);
// circle(379, 197, 6);
// circle(403, 201, 6);
// circle(428, 199, 6);

// BUTTONS
// circle(407, 267, 10);
// circle(407, 320, 10);
// circle(407, 433, 10);
// circle(407, 502, 10);

// NOSE
// fill("#ffa359")
// triangle(397, 161, 401, 176, 483, 146);

// HAT
// fill("#c55a11")
// triangle(321, 125, 353, 39, 434, 73);