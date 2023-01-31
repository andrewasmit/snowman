import '../App.css';


function Header({ score, highScore }) {
  return (
    <header id="App-header">
        <h5 id ="high-score">HIGH SCORE: {highScore}</h5>
        <img src="./snowman.png"/>
        <h1 id="title">SNOWMAN</h1>
        <h3 id="scoreboard">SCORE: {score}</h3>
    </header>
  )
}

export default Header;

