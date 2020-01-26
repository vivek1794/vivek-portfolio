import React, { Fragment } from 'react';

import { Grid, makeStyles, Avatar } from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';
import { socialLinksInfo } from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  iconContainer: {
    padding: '4px',
    cursor: 'pointer'
  },
  avatar: {
    backgroundColor: theme.palette.background.medium,
  }
}));

const SocialInfo = () => {
  const classes = useStyles();
  const { facebook, linkedIn, twitter } = socialLinksInfo;

  return (
    <Fragment>
      <Grid item className={classes.iconContainer}>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <Avatar variant="rounded" className={classes.avatar}>
            <FacebookIcon />
          </Avatar>
        </a>
      </Grid>
      <Grid item className={classes.iconContainer}>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <Avatar variant="rounded" className={classes.avatar}>
            <LinkedInIcon />
          </Avatar>
        </a>
      </Grid>
      <Grid item className={classes.iconContainer}>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <Avatar variant="rounded" className={classes.avatar}>
            <TwitterIcon />
          </Avatar>
        </a>
      </Grid>
    </Fragment>
  );
}

export default SocialInfo;
