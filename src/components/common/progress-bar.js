import React from 'react';
import {
  Grid,
  Typography,
  LinearProgress,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    paddingRight: theme.spacing(6),
  },
  percentageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  percentage: {
    color: theme.palette.yellow.main,
    paddingRight: theme.spacing(1)
  },
  title: {
    color: '#A4A5A6'
  },
  progressContainer: {
    marginTop: theme.spacing(1)
  },
  progressRoot: {
    height: '6px'
  },
  progressBar: {
    backgroundColor: theme.palette.grey.secondary,
  },
  progress: {
    backgroundColor: theme.palette.yellow.main
  }
}));

const ProgressBar = ({
  value,
  name,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.percentageContainer}>
        <Typography className={classes.percentage}>{value}%</Typography>
        <Typography className={classes.title}>{name}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.progressContainer}>
        <LinearProgress
          classes={{
            root: classes.progressRoot,
            colorPrimary: classes.progressBar,
            barColorPrimary: classes.progress,
          }}
          value={value}
          variant="determinate"
        />
      </Grid>
    </Grid>
  );
}

export default ProgressBar;
