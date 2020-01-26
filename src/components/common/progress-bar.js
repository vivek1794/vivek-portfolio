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
    color: theme.palette.green.main,
    paddingRight: theme.spacing(1)
  },
  title: {
    color: theme.palette.text.main
  },
  progressContainer: {
    marginTop: theme.spacing(1)
  },
  progressRoot: {
    height: '6px'
  },
  progressBar: {
    backgroundColor: theme.palette.background.secondary,
  },
  progress: {
    backgroundColor: theme.palette.green.main
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
