import React from 'react';
import { Grid, ThemeProvider } from '@material-ui/core';

import { theme } from './theme/theme';

import HomePage from './components/info/homepage';
import AboutMe from './components/info/about-me';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Education from './components/education.js/education';
import Awards from './components/awards/awards';
import Contact from './components/contact/contact';

const App = () => (
  <ThemeProvider theme={theme}>
    <Grid container>
      <HomePage />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Awards />
      <Contact />
    </Grid>
  </ThemeProvider>
);

export default App;
