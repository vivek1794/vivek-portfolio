import React from 'react';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  Divider,
  makeStyles
} from '@material-ui/core';

import ContactInfo from '../info/contact-info';
import SocialInfo from '../info/social-info';

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
    padding: theme.spacing(8),
  },
  divider: {
    margin: '64px 0',
    backgroundColor: '#A4A5A6'
  },
  aboutMeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
    }
  },
  name: {
    fontWeight: 300,
    width: '100%',

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    }
  },
  firstName: {
    color: '#A4A5A6',
    fontSize: '2rem'
  },
  lastName: {
    color: '#E0A80D',
    fontSize: '2rem'
  },
  socialIconContainer: {
    display: 'flex'
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography className={classes.title}>Contact</Typography>
        <Typography className={classes.subtitle}>Call me, maybe.</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <ContactInfo />
        </Grid>
        <Divider classes={{ root: classes.divider }} />
        <Grid item container xs={12} lg={10}>
          <Grid item container className={classes.aboutMeContainer}>
            <Grid item>
              <Typography className={classNames(classes.name,classes.firstName)}>
                Vivek
              </Typography>
              <Typography className={classNames(classes.name,classes.lastName)}>
                Chanddru
              </Typography>
            </Grid>
            <Grid item className={classes.socialIconContainer}>
              <SocialInfo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
