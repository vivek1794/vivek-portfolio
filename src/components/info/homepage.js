import React from 'react';
import {
  Grid,
  Typography,
  Avatar,
  makeStyles
} from '@material-ui/core';
import AvatarLogo from '../../assets/avatar.jpg';
import SocialInfo from './social-info';
import ContactInfo from './contact-info';
import { myInfo } from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    backgroundColor: theme.palette.background.page,
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    }
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  avatar: {
    height: '240px',
    width: '240px',
  },
  contentContainer: {
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    }
  },
  name: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    }
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

const HomePage = () => {
  const classes = useStyles();
  const { firstName, lastName, role } = myInfo;

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12} lg={4} className={classes.avatarContainer}>
        <Avatar
          src={AvatarLogo}
          className={classes.avatar}
        />
      </Grid>
      <Grid item container xs={12} lg={8} className={classes.infoContainer}>
        
        <Grid item container xs={12} lg={10} className={classes.contentContainer}>
          <Typography variant="h2" className={classes.name}>
            {firstName}
          </Typography>
          <Typography variant="h1" className={classes.name}>
            {lastName}
          </Typography>
          <Grid item container justify="space-between" alignItems="center">
            <Grid item className={classes.aboutMeContainer}>
              <Typography variant="subtitle1" className={classes.aboutMe}>
                {role}
              </Typography>
            </Grid>
            <Grid item className={classes.socialIconContainer}>
              <SocialInfo />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} lg={10} className={classes.contactContainer}>
          <ContactInfo />
        </Grid>

      </Grid>
    </Grid>
  );
}

export default HomePage;
