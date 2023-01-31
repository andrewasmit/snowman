import '../App.css';


function Header({ score }) {
  return (
    <header className="App-header">
        <span>SNOWMAN</span>
        <span>
          <h3 id ="score">SCORE: {score}</h3>
        </span>
    </header>
  )
}

export default Header;

