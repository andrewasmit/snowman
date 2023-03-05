import '../App.css';
import { Typography, Container, Grid } from '@mui/material';


function Header({ score, highScore }) {
  return (
    <Container id="App-header" maxWidth >
    <Grid container >
      <Grid item xs={12} md={3}>
        <Typography variant='h6' component="h6" id ="high-score">HIGH SCORE: {highScore}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" component="h2" id="title">☃SNOWMAN☃</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h5" component="h5" id="scoreboard">SCORE: {score}</Typography>
      </Grid>
    </Grid>
    </Container>
  )
}

export default Header;

