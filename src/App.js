import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './theme/theme';

import HomePage from './components/info/homepage';
import AboutMe from './components/info/about-me';
import Skills from './components/skills/skills';
import Tech from './components/tech/tech';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import Awards from './components/awards/awards';
import Volunteer from './components/volunteer/volunteer';
import Talks from './components/talks/talks';
import Contact from './components/contact/contact';
import PrintPage from './components/print/print-page';

const App = () => (
  <ThemeProvider theme={theme}>
    <HomePage />
    <AboutMe />
    <Skills />
    <Tech />
    <Talks />
    <Experience />
    <Education />
    <Awards />
    <Volunteer />
    <Contact />
    <PrintPage />
  </ThemeProvider>
);

export default App;
