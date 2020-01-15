import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  timeline: {
    width: '100%',
    position: 'relative',

    '&:after': {
      content: '" "',
      position: 'absolute',
      height: '100%',
      width: '2px',
      left: 0,
      bottom: 0,
      backgroundColor: '#404242',
    }
  },
  itemContainer: {
    padding: '0 24px 24px 24px',
    position: 'relative',

    '&:before': {
      content: '" "',
      position: 'absolute',
      borderRadius: '50%',
      height: '10px',
      width: '10px',
      left: '-4px',
      zIndex: '1',
      backgroundColor: '#E0A80D',
    }
  },
  duration: {
    color: '#979899'
  },
  title: {
    color: '#A4A5A6'
  },
  subtitle: {
    color: '#A4A5A6'
  },
  caption: {
    color: '#979899'
  },
  content: {
    color: '#979899'
  }
}));

const Timeline = ({ items }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.timeline}>
      {items.map(item => {
        const {
          title,
          subtitle,
          caption,
          duration,
          content
        } = item;

        return (
          <Grid item container className={classes.itemContainer} key={title}>
            <Grid item xs={12} md={6} className={classes.titleContainer}>
              <Typography className={classes.duration}>{duration}</Typography>
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.subtitle}>{subtitle}</Typography>
              <Typography className={classes.caption}>{caption}</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.contentContainer}>
              <Typography className={classes.content}>{content}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Timeline;
