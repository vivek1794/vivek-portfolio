import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import HomePage from './components/info/homepage';
import AboutMe from './components/info/about-me';

const useStyles = makeStyles({

});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <HomePage />
      <AboutMe />
    </Grid>
  );
}

export default App;
