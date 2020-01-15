import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Info from './components/info';

const useStyles = makeStyles({

});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Info />
    </Grid>
  );
}

export default App;
