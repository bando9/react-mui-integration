import makeStyles from '@mui/styles/makeStyles';
// import Header from './components/Header';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    fontFamily: '"Segoe UI Symbol"',
  },
  container: {
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  }
})) 

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>
          Excecutive Dashboard
        </h1>
      </div>
    </div>
  )
}

export default App
