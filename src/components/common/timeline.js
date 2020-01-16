import React from 'react';
import classNames from 'classnames';
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
      backgroundColor: theme.palette.grey.secondary,
    }
  },
  timelineBottomAlign: {
    '&:after': {
      height: 'calc(100% - 6px)',
      top: 6,
    }
  },
  itemContainer: {
    padding: '0 24px 40px 24px',
    position: 'relative',

    '&:before': {
      content: '" "',
      position: 'absolute',
      borderRadius: '50%',
      height: '10px',
      width: '10px',
      left: -4,
      zIndex: 1,
      backgroundColor: theme.palette.yellow.main,
    },
  },
  itemContainerBottomAlign: {
    '&:before': {
      top: 6
    }
  },
  itemContainerTopAlign: {
    paddingTop: '40px',

    '&:before': {
      top: 46
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
  },
  timelineEndMarker: {
    position: 'relative',

    '&:before': {
      content: '" "',
      position: 'absolute',
      height: '2px',
      width: '10px',
      left: -4,
      zIndex: 1,
      backgroundColor: '#404242',
    },
  }
}));

const Timeline = ({ items, align, isEnd }) => {
  const classes = useStyles();
  const isBottomAlign = align === 'bottom';

  return (
    <Grid className={classNames(
      classes.timeline,
      { [classes.timelineBottomAlign]: isBottomAlign }
    )}>
      {items.map(item => {
        const {
          title,
          subtitle,
          caption,
          duration,
          content
        } = item;

        return (
          <Grid
            item
            container
            key={title}
            className={classNames(
              classes.itemContainer,
              isBottomAlign ? classes.itemContainerBottomAlign : classes.itemContainerTopAlign
            )}
          >

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
      {isEnd && <Grid item className={classes.timelineEndMarker} />}
    </Grid>
  );
}

export default Timeline;
