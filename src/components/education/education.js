import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Timeline from '../common/timeline';
import { educationInfo } from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: theme.palette.grey.main,
    padding: theme.spacing(8)
  },
  align: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  contentContainer: {
    backgroundColor: theme.palette.grey.light,
    padding: theme.spacing(8),
    paddingTop: 0,
  },
}));

const Education = () => {
  const classes = useStyles();
  const { title, subtitle, educations } = educationInfo;

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography variant="h3" className={classes.align}>{title}</Typography>
        <Typography variant="h6" className={classes.align}>{subtitle}</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <Timeline items={educations} align="top" isEnd />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Education;