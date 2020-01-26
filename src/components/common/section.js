import React from 'react';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    backgroundColor: theme.palette.background.page,

    '@media print': {
      display: 'none'
    }
  },
  contentContainer: {
    padding: theme.spacing(8)
  },
  align: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  paddingBottom: {
    paddingBottom: '0 !important'
  },
  paddingTop: {
    paddingTop: '0 !important'
  }
}));

const Section = ({
  title,
  subtitle,
  content,
  additionalContent,
  paddingTop,
  paddingBottom
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} lg={4} className={classes.contentContainer}>
        <Typography variant="h3" className={classes.align}>{title}</Typography>
        <Typography variant="h6" className={classes.align}>{subtitle}</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classNames(
        classes.contentContainer,
        {
          [classes.paddingTop]: paddingTop,
          [classes.paddingBottom]: paddingBottom,
        }
      )}>
        <Grid item container xs={12} lg={10}>
          {content}
        </Grid>
        {additionalContent}
      </Grid>
    </Grid>
  );
};

export default Section;
