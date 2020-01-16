import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Timeline from '../common/timeline';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: theme.palette.grey.main,
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
    backgroundColor: theme.palette.grey.light,
    padding: theme.spacing(8),
    paddingTop: 0,
  },
  content: {
    color: '#979899'
  }
}));

const Education = () => {
  const classes = useStyles();

  const educations = [
    {
      title: 'Anna University',
      subtitle: 'Bachelor of computer science',
      caption: 'Chennai, IN',
      duration: '2011 - 2015',
      content: `Worked as Android developer for entire Zoho Assist suite of apps.
                Responsible for managing the Android and iOS app development
                schedule and the single point of contact for the mobile team.
                Managed a team of 4 developers to see the product to launch.
                Came up with some ideas and introduced new apps to the Zoho
                Assist suite.
                Responsible for communicating the requirements to the designers
                and the marketing team.
                Responsible for taking all technological decisions on the mobile
                app development for Android and iOS.
      `
    },
  ]

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography className={classes.title}>EDUCATION</Typography>
        <Typography className={classes.subtitle}>Lazy isn't in my vocabulary.</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <Timeline items={educations} align="top" isEnd />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Education;
