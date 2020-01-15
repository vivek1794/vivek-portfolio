import React from 'react';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  Avatar,
  makeStyles
} from '@material-ui/core';
import AvatarLogo from '../assets/avatar.jpg';
import SocialInfo from './social-info';
import ContactInfo from './contact-info';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2b2c2c',
    padding: '32px',

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    }
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#2d2e2e',
    position: 'relative'
  },
  avatar: {
    height: '240px',
    width: '240px',
  },
  contentContainer: {
    [theme.breakpoints.up('lg')]: {
      padding: '4rem'
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
    fontSize: '3rem'
  },
  lastName: {
    color: '#E0A80D',
    fontSize: '4rem'
  },
  socialIconContainer: {
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center'
    }
  },
  aboutMeContainer: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: 0
    }
  },
  aboutMe: {
    color: '#979899',

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: '16px'
    }
  },
  contactContainer: {
    padding: '2rem 4rem',

    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    }
  }
}));

const Info = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12} lg={4} className={classes.avatarContainer}>
        <Avatar
          src={AvatarLogo}
          className={classes.avatar}
        />
      </Grid>
      <Grid item container xs={12} lg={8} className={classes.infoContainer}>
        
        <Grid item container xs={12} lg={8} className={classes.contentContainer}>
          <Typography className={classNames(classes.name,classes.firstName)}>
            Vivek
          </Typography>
          <Typography className={classNames(classes.name,classes.lastName)}>
            Chanddru
          </Typography>
          <Grid item container justify="space-between" alignItems="center">
            <Grid item className={classes.aboutMeContainer}>
              <Typography className={classes.aboutMe}>
                Android developer
              </Typography>
            </Grid>
            <Grid item className={classes.socialIconContainer}>
              <SocialInfo />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container className={classes.contactContainer}>
          <ContactInfo />
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Info;
