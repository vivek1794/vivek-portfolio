import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: '#292A2A',
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
    backgroundColor: '#2B2C2C',
    padding: theme.spacing(8)
  },
  content: {
    color: '#979899'
  }
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography className={classes.title}>INTRO</Typography>
        <Typography className={classes.subtitle}>What I am all about</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <Typography className={classes.content}>
            {"Android developer and fanboy from Chennai, India. Loves to be caught \
              up with the latest gadgets and developments in Android arena. Dabbles\
              a bit with IoT and Web development when there is free time. Loves to \
              play with <div>s when I am not playing with the <ConstraintLayout>"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
