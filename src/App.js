import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import HomePage from './components/info/homepage';
import AboutMe from './components/info/about-me';
import Skills from './components/skills/skills';

const useStyles = makeStyles({

});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <HomePage />
      <AboutMe />
      <Skills />
    </Grid>
  );
}

export default App;
