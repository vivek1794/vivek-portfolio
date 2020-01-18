import React, { Fragment } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  align: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    }
  },
  contact: {
    [theme.breakpoints.down('md')]: {
      padding: 8
    }
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));

const ContactInfo = () => {
  const classes = useStyles();
  
  const contactLink = 'tel:+12364644566';
  const websiteLink = 'https://vivekc.xyz';
  const emailLink = 'mailto:vivek.chanddru@gmail.com';

  return (
    <Fragment>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Location</Typography>
          <Typography variant="h6" className={classes.align}>Victoria, CA</Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Phone</Typography>
          <a href={contactLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <Typography variant="h6" className={classes.align}>236.464.4566</Typography>
          </a>
        </Grid>
      </Grid>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Web</Typography>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <Typography variant="h6" className={classes.align}>vivekc.xyz</Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Email</Typography>
          <a href={emailLink} className={classes.link}>
            <Typography variant="h6" className={classes.align}>vivek.chanddru@gmail.com</Typography>
          </a>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ContactInfo;
