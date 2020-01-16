import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Achievement from '../common/achievement';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: theme.palette.grey.dark,
    padding: theme.spacing(8),
  },
  align: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  contentContainer: {
    backgroundColor: theme.palette.grey.main,
    padding: theme.spacing(8),
    paddingBottom: 0,
  },
}));

const Awards = () => {
  const classes = useStyles();

  const awards = [
    {
      title: 'Google certified Associate Android Developer',
      content: ''
    },
    {
      title: 'Business English Certification from University of Cambridge - Level B - 2013',
      content: ''
    },
    {
      title: 'IBM certified Rational Application Developer - 2013',
      content: ''
    },
  ]

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography variant="h3" className={classes.align}>AWARDS</Typography>
        <Typography variant="h6" className={classes.align}>Happy times!</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <Achievement items={awards} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Awards;
