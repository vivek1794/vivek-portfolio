import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import HomePage from './components/info/homepage';
import AboutMe from './components/info/about-me';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Education from './components/education.js/education';
import Awards from './components/awards/awards';

const useStyles = makeStyles({

});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <HomePage />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Awards />
    </Grid>
  );
}

export default App;
