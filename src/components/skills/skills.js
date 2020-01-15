import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import ProgressBar from '../common/progress-bar';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: '#2b2c2c',
    padding: theme.spacing(8)
  },
  title: {
    color: '#A4A5A6',

    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  subtitle: {
    color: '#979899',

    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  contentContainer: {
    backgroundColor: '#2d2e2e',
    padding: theme.spacing(8)
  },
  skillContainer: {
    paddingBottom: theme.spacing(3)
  }
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container>

      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography className={classes.title}>Skills</Typography>
        <Typography className={classes.subtitle}>Progress bars, anyone?</Typography>
      </Grid>

      <Grid item container xs={12} lg={8} className={classes.contentContainer}>
        <Grid item xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name="Java" value={90} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name="Android" value={95} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name="Kotlin" value={80} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name="Rx" value={75} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name="HTML" value={85} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name="PHP" value={65} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name="CI/CD" value={75} />
        </Grid>
      </Grid>

    </Grid>
  );
}

export default Skills;
