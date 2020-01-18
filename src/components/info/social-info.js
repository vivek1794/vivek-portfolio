import React, { Fragment } from 'react';

import { Grid, makeStyles, Avatar } from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  iconContainer: {
    padding: '4px',
    cursor: 'pointer'
  },
  avatar: {
    backgroundColor: theme.palette.grey.medium,
  }
}));

const SocialInfo = () => {
  const classes = useStyles();

  const facebookLink = 'https://fb.com/vivek1794';
  const linkedInLink = 'https://www.linkedin.com/in/vivek1794/';
  const twitterLink = 'https://twitter.com/Vivek_chanddru';

  return (
    <Fragment>
      <Grid item className={classes.iconContainer}>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <Avatar variant="rounded" className={classes.avatar}>
            <FacebookIcon />
          </Avatar>
        </a>
      </Grid>
      <Grid item className={classes.iconContainer}>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <Avatar variant="rounded" className={classes.avatar}>
            <LinkedInIcon />
          </Avatar>
        </a>
      </Grid>
      <Grid item className={classes.iconContainer}>
        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <Avatar variant="rounded" className={classes.avatar}>
            <TwitterIcon />
          </Avatar>
        </a>
      </Grid>
    </Fragment>
  );
}

export default SocialInfo;
