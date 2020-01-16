import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Timeline from '../common/timeline';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: theme.palette.grey.dark,
    padding: theme.spacing(8),
  },
  align: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  contentContainer: {
    backgroundColor: theme.palette.grey.main,
    padding: theme.spacing(8),
    paddingBottom: 0,
  },
  content: {
    color: '#979899'
  }
}));

const Experience = () => {
  const classes = useStyles();

  const experiences = [
    {
      title: 'Freshworks Studio',
      subtitle: 'Android developer',
      caption: 'Victoria, BC',
      duration: '2018 - present',
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
    {
      title: 'Zoho Corporation pvt. Ltd.',
      subtitle: 'Mobile App Lead',
      caption: 'Chennai, IN',
      duration: '2015 - 2018',
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
        <Typography variant="h3" className={classes.align}>EXPERIENCE</Typography>
        <Typography variant="h6" className={classes.align}>Yes. I've been around</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <Timeline items={experiences} align="bottom" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Experience;
