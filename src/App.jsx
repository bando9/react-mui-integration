import makeStyles from '@mui/styles/makeStyles';
import Header from './components/Header';
import BoxNumber from './components/BoxNumber';
import { Grid2 } from '@mui/material';

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
        <Header />
        <Grid2 container spacing={2}>
          <Grid2 size={3}>            
            <BoxNumber title="New Wins" number={230} percent="25" />
          </Grid2>
          <Grid2 size={3}>
            <BoxNumber title="Trial: Win Rate" number='9.86%' percent="25" />
          </Grid2>
          <Grid2 size={3}>
            <BoxNumber title="New MRR" number='$25,690' percent='8.7' />
          </Grid2>
          <Grid2 size={3}>
            <BoxNumber title="Page Views" chart />
          </Grid2>
        </Grid2>
      </div>
    </div>
  )
}

export default App
