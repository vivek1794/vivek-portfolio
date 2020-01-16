import React from 'react';
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
    backgroundColor: theme.palette.grey.main,
    padding: theme.spacing(8)
  },
  align: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  contentContainer: {
    backgroundColor: theme.palette.grey.light,
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
  socialIconContainer: {
    display: 'flex'
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography variant="h3" className={classes.align}>Contact</Typography>
        <Typography variant="h6" className={classes.align}>Call me, maybe.</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <ContactInfo />
        </Grid>
        <Divider classes={{ root: classes.divider }} />
        <Grid item container xs={12} lg={10}>
          <Grid item container className={classes.aboutMeContainer}>
            <Grid item>
              <Typography variant="h2" className={classes.name}>
                Vivek
              </Typography>
              <Typography variant="h1" className={classes.name}>
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
