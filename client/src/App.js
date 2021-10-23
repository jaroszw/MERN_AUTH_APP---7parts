import './App.css';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  butt: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <Button variant="contained" className={classes.butt}>
        button
      </Button>
    </div>
  );
}

export default App;
