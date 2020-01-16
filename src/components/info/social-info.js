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

  return (
    <Fragment>
      <Grid item className={classes.iconContainer}>
        <Avatar variant="rounded" className={classes.avatar}>
          <FacebookIcon />
        </Avatar>
      </Grid>
      <Grid item className={classes.iconContainer}>
        <Avatar variant="rounded" className={classes.avatar}>
          <LinkedInIcon />
        </Avatar>
      </Grid>
      <Grid item className={classes.iconContainer}>
        <Avatar variant="rounded" className={classes.avatar}>
          <TwitterIcon />
        </Avatar>
      </Grid>
    </Fragment>
  );
}

export default SocialInfo;
