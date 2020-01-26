import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { contactInfo } from '../../helpers/information';

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
    cursor: 'pointer',
  },
  info: {
    color: theme.palette.text.main,
    '&:hover': {
      color: theme.palette.green.main
    }
  }
}));

const ContactInfo = () => {
  const classes = useStyles();
  const { location, phone, website, email } = contactInfo;
  
  const contactLink = `tel:${phone.value}`;
  const emailLink = `mailto:${email}`;

  return (
    <Fragment>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>{location.title}</Typography>
          <a href={location.value} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <Typography variant="h6" className={classNames(classes.align, classes.info)}>{location.displayName}</Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>{phone.title}</Typography>
          <a href={contactLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <Typography variant="h6" className={classNames(classes.align, classes.info)}>{phone.displayName}</Typography>
          </a>
        </Grid>
      </Grid>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>{website.title}</Typography>
          <a href={website.value} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <Typography variant="h6" className={classNames(classes.align, classes.info)}>{website.displayName}</Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>{email.title}</Typography>
          <a href={emailLink} className={classes.link}>
            <Typography variant="h6" className={classNames(classes.align, classes.info)}>{email.value}</Typography>
          </a>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ContactInfo;
