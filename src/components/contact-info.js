import React, { Fragment } from 'react';
import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    color: '#A4A5A6',
    fontWeight: 600,

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    }
  },
  content: {
    color: '#979899',

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    }
  },
  contact: {
    [theme.breakpoints.down('md')]: {
      padding: 8
    }
  }
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography className={classes.title}>Location</Typography>
          <Typography className={classes.content}>Victoria, CA</Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography className={classes.title}>Phone</Typography>
          <Typography className={classes.content}>236.464.4566</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography className={classes.title}>Web</Typography>
          <Typography className={classes.content}>example.com</Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography className={classes.title}>Email</Typography>
          <Typography className={classes.content}>vivek@freshworks.io</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ContactInfo;
