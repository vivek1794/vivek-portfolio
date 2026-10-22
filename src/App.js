import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './theme/theme';

import HomePage from './components/info/homepage';
import AboutMe from './components/info/about-me';
import Tech from './components/tech/tech';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import Community from './components/community/community';
import Contact from './components/contact/contact';
import PrintPage from './components/print/print-page';

const App = () => (
  <ThemeProvider theme={theme}>
    <HomePage />
    <AboutMe />
    <Tech />
    <Experience />
    <Education />
    <Community />
    <Contact />
    <PrintPage />
  </ThemeProvider>
);

export default App;
